import { useContext, useEffect, useRef } from "react";
import { useReducer } from "react";
import { createContext } from "react";

export const MainContext = createContext();

const initialState = {
    videos: [],
    categorias: [],
    formErrors: {
        hasError: false,
        errorMessages: []
    },
    formValues: {
        id: "",
        titulo: "",
        imagen: "",
        video: "",
        descripcion: "",
        categoria: ""
    },
    videoEnEdicion: false,
    loading: true,
}
function reducer(state, action) {

    if (action.type === "SET_VIDEOS") {
        console.log(action.payload)
        return { ...state, videos: action.payload }
    }

    if (action.type === "SET_CATEGORIAS") {
        console.log("test set categoria", { ...state, categorias: action.payload })
        return { ...state, categorias: action.payload }
    }

    if (action.type === "TOOGLE_LOADING") {
        return { ...state, loading: false }
    }

    if (action.type === "FORM_VALIDATION") {

        const data = action.payload;

        console.log(data);

        const regex = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
        const errors = []

        if (!data.titulo.trim()) {

            errors.push({
                field: "titulo",
                message: "El campo titulo es requerido"
            });
        }
        if (!data.imagen.trim()) {

            errors.push({
                field: "imagen",
                message: "El campo imagen es requerido"
            });
        }





        if (!state.categorias.some((categoria) => categoria.id === Number(data.categoria))) {
            errors.push({
                field: "categoria",
                message: "La categoria no es valida"
            })
        }



        if (!data.video.trim()) {
            errors.push({
                field: "video",
                message: "El campo video es requerido"
            })
        } else if (!regex.test(data.video)) {
            errors.push({
                field: "video",
                message: "El campo video no es una url valida"
            })
        } else if (new URL(data.video).searchParams.get("v") === null) {
            errors.push({
                field: "video",
                message: "El campo video no es una url de youtube valida"
            })
        } else {

            const idDelVideo = new URL(data.video).searchParams.get("v");
            console.log(idDelVideo)
            const urlImagen = `https://img.youtube.com/vi/${idDelVideo}/hqdefault.jpg`;

        }


        if (!errors.length) {

            return {
                ...state, formErrors: {
                    hasError: false,
                    errorMessages: []
                }
            }
        }





        return {
            ...state, formErrors: {
                hasError: true,
                errorMessages: errors
            }
        }


    }

    if (action.type === "FILL_IMG_URL") {
        const regex = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;

        const a = action.payload.video.trim() !== "";
        const b = regex.test(action.payload.video);

        if (a && b) {
            const idDelVideo = new URL(action.payload.video).searchParams.get("v");
            const urlImagen = `https://img.youtube.com/vi/${idDelVideo === null? "[id Del Video]" : idDelVideo}/hqdefault.jpg`;
            return {
                ...state, formValues: {
                    ...state.formValues, imagen: urlImagen
                }
            }
         }

        return {
            ...state
        }
    }


    /* form values */

    if (action.type === "SET_FORM_VALUES") {

        const nuevoFormValues = { ...state.formValues, ...action.payload }
        return {
            ...state, formValues: nuevoFormValues
        }
    }


    /* delete video  */

    if (action.type === "DELETE_VIDEO") {

        deleteVideo(action.payload);
        return {
            ...state
        }
    }


    if (action.type === "EDIT_VIDEO") {

        return {
            ...state, formValues: action.payload, videoEnEdicion: true
        }
    }
    if (action.type === "RESET_EDIT_VIDEO_STATE") {
        return {
            ...state, videoEnEdicion: false, formValues: initialState.formValues
        }
    }
}



const MainContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    const triggerFetch = useRef(0)

    useEffect(() => {
        const getData = async () => {
            let con = await fetch("http://localhost:5000/videos");
            let data = await con.json();
            console.log("DATA", data)
            dispatch({ type: "SET_VIDEOS", payload: data })

            con = await fetch("http://localhost:5000/categorias");
            data = await con.json();
            dispatch({ type: "SET_CATEGORIAS", payload: data })
            dispatch({ type: "TOOGLE_LOADING" })
        }

        getData();

    }, [triggerFetch.current])

    const modalRef = useRef(null)

    return (
        <MainContext.Provider value={{ state, dispatch, modalRef, triggerFetch }}>
            {children}
        </MainContext.Provider>
    )
}

export default MainContextProvider


const formValidation = (data) => {

    const { state } = useContext(MainContext);
    const regex = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
    const errors = []

    if (!data.titulo.trim()) {

        errors.push({
            field: "titulo",
            message: "El campo titulo es requerido"
        });
    }
    if (!data.imagen.trim()) {

        errors.push({
            field: "imagen",
            message: "El campo imagen es requerido"
        });
    }

    if (!data.video.trim()) {
        errors.push({
            field: "video",
            message: "El campo video es requerido"
        })
    } else if (!regex.test(data.video)) {
        errors.push({
            field: "video",
            message: "El campo video no es una url valida"
        })
    } else if (new URL(data.video).searchParams.get("v") === null) {
        errors.push({
            field: "video",
            message: "El campo video no es una url de youtube valida"
        })
    }



    if (!state.categorias.some((categoria) => categoria.id === Number(data.categoria))) {
        errors.push({
            field: "categoria",
            message: "La categoria no es valida"
        })
    }


    if (!errors.length) {
        dispatch({
            type: "FORM_ERRORS",
            payload: {
                hasError: false,
                errorMessages: []
            }
        })
        return
    }

    dispatch({
        type: "FORM_ERRORS", payload: {
            hasError: true,
            errorMessages: errors
        }
    })



}


const postNewVideo = async (newVideoData) => {
    const con = await fetch("http://localhost:5000/videos", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newVideoData)
    });
}


const openModal = (modalRef) => {
    modalRef.current.showModal()
}
const closeModal = (modalRef) => {
    modalRef.current.close()
}

const refreshProducts = (triggerFetch) => {
    triggerFetch.current += 1; // Update the ref value to trigger the useEffect
};

const deleteVideo = async (videoId) => {
    const response = await fetch(`http://localhost:5000/videos/${videoId}`, {
        method: "DELETE"
    })
}

export const useMainContext = () => {
    const context = useContext(MainContext);
    return {
        state: context.state,
        dispatch: context.dispatch,
        modalRef: context.modalRef,
        triggerFetch: context.triggerFetch,
        postNewVideo: postNewVideo,
        formValidation: formValidation,
        openModal: openModal,
        refreshProducts: refreshProducts,
        deleteVideo: deleteVideo,
        closeModal: closeModal
    };
}