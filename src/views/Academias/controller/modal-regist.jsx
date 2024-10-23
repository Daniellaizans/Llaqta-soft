import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTimes } from "@fortawesome/free-solid-svg-icons"
const ModalR = ({ modalAction }) => {

    const Inputs = (props) => {
        return(
            <>
                <input className="px-3 py-2 m-3 rounded-xl text-black bg-[#E2E2E2] placeholder:text-black" type={props.type} name={props.name} id={props.name} placeholder={props.placeholder} />
            </>
        )
    }
    return (
        <>
            <div className="fixed inset-0 bg-black bg-opacity-50 z-50"></div>
            <div className="fixed inset-0 flex items-center justify-center z-50">
                <div className="bg-white rounded-lg p-6 w-[75%]">
                    <div className="flex justify-between items-center">
                        <h2 className="text-xl font-bold mb-4">Registrar Academia</h2>
                        <FontAwesomeIcon
                        icon={faTimes}
                        size="lg"
                        className="m-3 cursor-pointer"
                        onClick={modalAction}
                    />
                    </div>
                    <div className="flex flex-row justify-center items-center">
                        <div className="flex flex-col w-full">
                            <Inputs type="text" name="Nombre" placeholder="Nombre de la Academia"/>
                            <Inputs type="text" name="Responsable" placeholder="Nombre del Responsable"/>
                            <Inputs type="text" name="Correo Electronico" placeholder="Correo Electronico"/>
                            <Inputs type="text" name="Usuario" placeholder="Usuario"/>
                            <Inputs type="text" name="Password" placeholder="Password"/>

                        </div>
                        <div className="flex flex-col w-full">
                            <Inputs type="text" name="Departamento" placeholder="Departamento"/>
                            <Inputs type="text" name="Distrito" placeholder="Distrito"/>
                            <Inputs type="text" name="Provincia" placeholder="Provincia"/>
                            <Inputs type="text" name="Ubicacion Exacta" placeholder="Ubicacion Exacta"/>
                            <Inputs type="text" name="Telefono" placeholder="Telefono"/>
                        </div>
                    </div>
                    <div className="flex justify-center items-center mt-2">
                        <button className="bg-[#0C1E33] px-7 py-2 text-center text-white rounded-xl">Registrar Academia</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ModalR