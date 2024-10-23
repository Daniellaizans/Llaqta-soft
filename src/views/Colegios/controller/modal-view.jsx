import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTimes } from "@fortawesome/free-solid-svg-icons"

const ModalV = (props) => {
    return(
        <>
            <div className="fixed inset-0 bg-black bg-opacity-50 z-50"></div>
            <div className="fixed inset-0 flex items-center justify-center z-50">
                <div className="bg-white rounded-lg p-6 w-[75%]">
                    <div className="flex justify-between items-center">
                        <h2 className="text-xl font-bold mb-4">Ver Detalles</h2>
                        <FontAwesomeIcon
                        icon={faTimes}
                        size="lg"
                        className="m-3 cursor-pointer"
                        onClick={props.modalAction}
                    />
                    </div>
                    <div className="flex flex-row justify-center items-start">
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit, ex dolorem maxime corrupti mollitia, nesciunt sed sit omnis nostrum ullam accusantium assumenda iure nemo impedit nam, expedita architecto. Molestias, fugit.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ModalV