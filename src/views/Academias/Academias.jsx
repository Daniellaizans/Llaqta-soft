import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGraduationCap, faEye, faPenRuler, faTrashCan } from "@fortawesome/free-solid-svg-icons"
import ModalR from "./controller/modal-regist"
import ModalV from "./controller/modal-view"
import { useState } from "react"
import Swal from "sweetalert2"
const Academias = () => {

    const [modalR, setModalR] = useState(false)
    const [modalV, setModalV] = useState(false)
    const ModalRview = () => {
        setModalR(!modalR)
    }

    const ModalVview = () => {
        setModalV(!modalV)
    }

    function Deleteitem() {
        Swal.fire({title: '¿Estas Seguro?', text: 'Se borrara de forma permanente', icon: 'question',showCancelButton: true,confirmButtonText: "Si, Borrar!", cancelButtonText: "No, cancelar!"}).then((result) => {if (result.isConfirmed) {
            Swal.fire({title: 'Eliminado', text: 'Colegio Eliminado Correctamente', icon: 'success'})
        }})
    }

    const Tablecore = () => {
        return(
            <>
                <table className="w-full border border-gray-300 px-3 py-2">
                    <thead>
                        <tr className="bg-gray-200">
                            <th>Nombre</th>
                            <th>Ubicación</th>
                            <th>Correo Electrónico</th>
                            <th>Teléfono</th>
                            <th>Fecha de Registrp</th>
                            <th>Estado</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border border-gray-300 px-2 py-1 text-center">
                            <td>Item</td>
                            <td>Trujillo</td>
                            <td>Academia@item.com</td>
                            <td>849498488498</td>
                            <td>00/00/0000</td>
                            <td>Membresia Activa</td>
                            <td><FontAwesomeIcon
                            icon={faEye}
                            onClick={ModalVview}
                            className="mr-2 cursor-pointer"
                            title="Ver"
                            />
                            <FontAwesomeIcon
                            icon={faPenRuler}
                            className="mr-2 cursor-pointer"
                            title="Editar"
                            />
                            <FontAwesomeIcon
                            icon={faTrashCan}
                            onClick={Deleteitem}
                            className="text-red-600 mr-2 cursor-pointer"
                            title="Eliminar"
                            /></td>
                        </tr>
                        <tr className="border border-gray-300 px-2 py-1 text-center">
                            <td>Item</td>
                            <td>Trujillo</td>
                            <td>Academia@item.com</td>
                            <td>849498488498</td>
                            <td>00/00/0000</td>
                            <td>Membresia Activa</td>
                            <td></td>
                        </tr>
                        <tr className="border border-gray-300 px-2 py-1 text-center">
                            <td>Item</td>
                            <td>Trujillo</td>
                            <td>Academia@item.com</td>
                            <td>849498488498</td>
                            <td>00/00/0000</td>
                            <td>Membresia Activa</td>
                            <td></td>
                        </tr>
                        <tr className="border border-gray-300 px-2 py-1 text-center">
                            <td>Item</td>
                            <td>Trujillo</td>
                            <td>Academia@item.com</td>
                            <td>849498488498</td>
                            <td>00/00/0000</td>
                            <td>Membresia Activa</td>
                            <td></td>
                        </tr>
                        <tr className="border border-gray-300 px-2 py-1 text-center">
                            <td>Item</td>
                            <td>Trujillo</td>
                            <td>Academia@item.com</td>
                            <td>849498488498</td>
                            <td>00/00/0000</td>
                            <td>Membresia Activa</td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </>
        )
    }

    return(
        <>
            <h2 className="text-black"><FontAwesomeIcon icon={faGraduationCap} />ACADEMIAS</h2>
            <div className="flex flex-row justify-between items-center mb-3">
                <input className=" rounded-lg min-w-20 w-[30%] px-2 py-1 border-2" type="text" placeholder="Buscar Academia" />
                <button onClick={ModalRview} className=" rounded-xl px-5 py-2 bg-black text-white">Registrar Academia</button>
            </div>
            <div className="w-full">
                <Tablecore/>
            </div>
            {modalR && <ModalR modalAction={ModalRview}/>}
            {modalV && <ModalV modalAction={ModalVview}/>}
        </>
    )
}

export default Academias