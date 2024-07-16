import { useContext } from "react";
import FormInput from "./Input/FormInput"
import { MainContext, useMainContext } from "../../context/MainContext";
import FormSelect from "./Select/FormSelect";
import FormTextArea from "./TextArea/FormTextArea";
import ButtonNav from "../NavBar/ButtonNav/ButtonNav";
import { useNavigate } from "react-router-dom";

const FormNewVideo = ({ video }) => {

    const { state, dispatch, postNewVideo, formValidation, triggerFetch, refreshProducts, closeModal, modalRef } = useMainContext();

    const urlTest = "https://www.youtube.com/watch?v=ZU-drSVodBw"

    const navigate = useNavigate();
    // console.log(regex.test(urlTest));

    // console.log(url.searchParams.get("s"));





    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);


        const data = formData.entries();

        let data2 = Object.fromEntries(data);

        dispatch({ type: "FORM_VALIDATION", payload: data2 })

        if (state.formErrors.hasError) {
            return "test"
        }

        if (!state.videoEnEdicion) {

            data2 = {
                ...data2,
                id: crypto.randomUUID(),
            }
        }
        data2 = {
            ...data2,
            categoria: Number(data2.categoria)
        }

        const method = !state.videoEnEdicion ? "POST" : "PUT";

        const url = !state.videoEnEdicion ? "http://localhost:5000/videos" : `http://localhost:5000/videos/${state.formValues.id}`

        console.log(data2)
        const con = fetch(url, {
            method: method,
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data2)
        })



        refreshProducts(triggerFetch);

        if (!state.videoEnEdicion) {
            navigate("/");
        }

        if (state.videoEnEdicion) {
            closeModal(modalRef);
        }
    }


    return (
        <>
            <section>

                <h2 className="py-10 text-white text-5xl font-bold border-t-2 border-b-2 border-gray-500">{!state.videoEnEdicion ? "Crear Tarjeta" : "Editar Tarjeta"}</h2>
                <form
                    
                    onSubmit={
                        (e) => {

                            handleSubmit(e);
                        }
                    }
                    className=" pt-28 grid grid-cols-1 gap-4 md:grid-cols-2">
                    <FormInput
                        value={state.formValues.titulo}
                        name="titulo"
                        labelText="Título"
                        type="text"
                        placeholder="titulo del video"
                        onChange={(e) => {
                            dispatch({ type: "SET_FORM_VALUES", payload: { titulo: e.target.value } });
                        }}
                        onBlur={(e) => dispatch({ type: "FORM_VALIDATION", payload: { ...state.formValues, titulo: e.target.value } })}
                    />

                    <FormSelect 
                    value={state.formValues.categoria}  
                    onChange={(e) => dispatch({ type: "SET_FORM_VALUES", payload: { categoria: e.target.value } })} 
                    name="categoria" 
                    labelText="Categoría"
                    onBlur={(e) => dispatch({ type: "FORM_VALIDATION", payload: { ...state.formValues, categoria: e.target.value } })}
                    />

                    <FormInput
                        value={state.formValues.imagen}
                        name="imagen"
                        labelText="Imagen"
                        type="text"
                        placeholder="link de la imagen"
                        onChange={(e) => dispatch({ type: "SET_FORM_VALUES", payload: { imagen: e.target.value } })}
                        onBlur={(e) => dispatch({ type: "FORM_VALIDATION", payload: { ...state.formValues, imagen: e.target.value } })}
                    />
                    <FormInput
                        value={state.formValues.video}
                        name="video"
                        labelText="Video"
                        type="text"
                        placeholder="link del video"
                        onChange={(e) => dispatch({ type: "SET_FORM_VALUES", payload: { video: e.target.value } })}
                        onBlur={(e) => {
                            dispatch({ type: "FORM_VALIDATION", payload: { ...state.formValues, video: e.target.value } });
                            dispatch({type: "FILL_IMG_URL", payload: {...state.formValues, video: e.target.value}})
                        }}
                    />

                    <FormTextArea
                        value={state.formValues.descripcion}
                        labelText="Descripción"
                        placeholder="descripción del video"
                        name={"descripcion"}
                        onChange={(e) => dispatch({ type: "SET_FORM_VALUES", payload: { descripcion: e.target.value } })}
                        onBlur={(e) => dispatch({ type: "FORM_VALIDATION", payload: { ...state.formValues, descripcion: e.target.value } })}
                    />

                    <div className="py-16 flex flex-col gap-4 items-stretch justify-center md:flex-row md:col-span-2 md:justify-self-start">

                        <ButtonNav text="GUARDAR" typeStyle="filled" size="sm" type={"submit"} />
                        <ButtonNav text="LIMPIAR" typeStyle="outlined" size="sm" type={"reset"} />
                    </div>

                </form>
            </section>
        </>
    )
}

export default FormNewVideo