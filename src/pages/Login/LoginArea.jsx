 const LoginArea = () => {
    return(
        <div className="container mx-auto flex flex-col justify-center items-center px-4 w-screen h-screen bg-slate-600">
            <h1 className="text-3xl text-white font-bold text-center pt-4 sm:text-4xl">Login</h1>
            <div className="flex flex-col w-full px-3 sm:max-w-lg">
                <label className="mt-4 text-slate-200" htmlFor="email">E-mail</label>
                <input className="p-2 rounded bg-slate-400 outline-none text-white" type="text" name="email" id="email" placeholder="Digite seu e-mail..." />
                <label className="mt-4 text-slate-200" htmlFor="password">Senha</label>
                <input className="p-2 rounded bg-slate-400 outline-none text-white" type="password" name="pasword" id="password" placeholder="Digite seu e-mail..." />
            </div>
            <div>
                <button className="mt-6 py-2 px-4 rounded text-white font-bold bg-yellow-500" type="submit">Entrar</button>
            </div>
        </div>
    )
 }

 export default LoginArea