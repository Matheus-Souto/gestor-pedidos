const LoginArea = () => {
  return (
    <div className="container mx-auto flex flex-col justify-center items-center px-4 w-screen h-screen bg-slate-600">
      <div className="w-full flex flex-col justify-center bg-slate-900/40 py-14 px-5 max-w-lg shadow-lg shadow-black/50">
        <div className="flex flex-col justify-center w-full px-3 sm:max-w-lg mx-auto">
          <h1 className="text-3xl text-white font-bold text-center pt-4 sm:text-4xl">Login</h1>
          <label className="mt-4 text-slate-200" htmlFor="email">E-mail</label>
          <input className="p-2 rounded bg-slate-400 outline-yellow-500 text-white text-lg" type="text" name="email" id="email" placeholder="Digite seu e-mail..." />
          <label className="mt-4 text-slate-200" htmlFor="password">Senha</label>
          <input className="p-2 rounded bg-slate-400 outline-yellow-500 text-white text-lg" type="password" name="pasword" id="password" placeholder="Digite seu e-mail..." />
        </div>
        <div className="flex justify-start pt-3 px-3">
            <input className="w-4" type="checkbox" name="remember" id="remember" />
            <span className="ml-1 text-white">Lembrar-me</span>
        </div>
        <div className="mx-auto">
          <button className="mt-6 py-2 px-4 rounded text-white font-bold bg-yellow-500 hover:bg-transparent hover:border" type="submit">Entrar</button>
        </div>
        <p className="text-center pt-3 text-white font-semibold">Não possui uma conta? <span className="text-yellow-500 font-bold cursor-pointer">Cadastre seu Delivery!</span></p>
      </div>

    </div>
  )
}

export default LoginArea