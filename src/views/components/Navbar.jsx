import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGear } from "@fortawesome/free-solid-svg-icons"
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();

    const Enlaces = (props) => {

        const Navigate = () => {
            navigate(props.url);
        }

        return (
            <>
                <div className="flex flex-row mb-5">
                    <a onClick={Navigate} className="flex items-center space-x-2 w-full text-white px-6 py-2 rounded-xl hover:border-l-4 hover:text-white hover:bg-gradient-to-r  hover:from-white/30 hover:to-transparent transition-all duration-100 ease-in-out">
                        <img src={`img/${props.img}`} alt="" className=" mr-2"/>
                        {props.text}
                    </a>
                </div>
            </>
        )
    }

    return (
        <>
            <div className="flex items-center flex-col w-[25vh] bg-[#737A83] min-h-[100vh] ">
                <img src="img/Llaqtasoft.png" alt="" className="mx-2 mt-8" />
                <div className="flex flex-col mt-14">
                    <Enlaces text='Dashboard' img='Dash-icon.png' url="/Dashboard"/>
                    <Enlaces text='Academia' img='Academia-icon.png' url="/Academias"/>
                    <Enlaces text='Colegios'img='Colegios-icon.png' url="/Colegios"/>
                    
                </div>
                <div className="w-full mt-auto">
                    <div className="w-full h-[1px] bg-white  mb-5"></div>
                        <Enlaces text='Configuración'img='Conf-icon.png'/>
                    <div className="w-full h-[1px] bg-white mb-5"></div>
                        <Enlaces text='Cerrar Sesión'img='logout-icon.png'/>
                </div>
                

            </div>
        </>
    )
}

export default Navbar