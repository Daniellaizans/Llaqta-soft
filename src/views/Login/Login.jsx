const Login = () => {

    return(
        <>
                <div className="relative flex justify-center items-center min-h-screen" style={{backgroundImage: `url('img/Fondo-Login.png')`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                width: '100vw',
                minHeight: '100vh',
                backgroundPosition: 'center'
                }}>
                    <div className="flex flex-col justify-center items-center w-auto max-w-[504px] bg-white rounded-xl p-4 ">
                        <div className="flex justify-center my-6 items-center w-auto">
                            <img src="img/Llaqtasoft.png" alt="" />
                        </div>
                        <div className="flex flex-col w-full mb-5">
                            <input type="text" className="px-3 w-[340px] py-1 rounded-full border-2 border-[#484848] m-3" placeholder="Usuario" />
                            <input type="text" className="px-3 w-[340px] py-1 rounded-full border-2 border-[#484848] m-3" placeholder="Contraseña"/>
                        </div>
                        <div className="flex flex-col pb-8 ">
                            <button className="bg-[#8D5A13] text-white rounded-full py-1 px-6 hover:border-[#8D5A13]">Iniciar Sesión</button>
                            <a href="#" className="underline decoration-black text-sm text-black mt-6 hover:text-slate-900 ">Olvide mi Contraseña</a>
                        </div>
                    </div>
                </div>
        </>
    )
}

export default Login