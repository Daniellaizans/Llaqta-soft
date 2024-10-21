import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons"

const Academias = () => {


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
                <button className=" rounded-xl px-5 py-2 bg-black text-white">Registrar Academia</button>
            </div>
            <div className="w-full">
                <Tablecore/>
            </div>
        </>
    )
}

export default Academias