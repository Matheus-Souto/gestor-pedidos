const UserForm = () => {
    return(
        <div className="flex flex-col justify-center">
            <div className="flex flex-col justify-center w-full sm:max-w-lg mx-auto">
                <label className="mt-4 text-slate-200" htmlFor="name">Nome</label>
                <input 
                    className="p-2 rounded bg-slate-400 outline-yellow-500 text-white text-lg"
                    type="text" 
                    name="name" 
                    id="name" 
                    placeholder="Digite seu nome..." 
                    required 
                />
            </div>
            <div className="flex flex-col justify-center w-full sm:max-w-lg mx-auto">
                <label className="mt-4 text-slate-200" htmlFor="sobrenome">Sobrenome</label>
                <input 
                    className="p-2 rounded bg-slate-400 outline-yellow-500 text-white text-lg"
                    type="text" 
                    name="sobrenome" 
                    id="sobrenome" 
                    placeholder="Digite seu nome..." 
                    required 
                />
            </div>
            <div className="flex flex-col justify-center w-full sm:max-w-lg mx-auto">
                <label className="mt-4 text-slate-200" htmlFor="email">E-mail</label>
                <input
                    className="p-2 rounded bg-slate-400 outline-yellow-500 text-white text-lg"
                    type="email" 
                    name="email" 
                    id="email" 
                    placeholder="Digite seu e-mail..." 
                    required 
                />
            </div>
            <div className="flex flex-col justify-center w-full sm:max-w-lg mx-auto">
                <label className="mt-4 text-slate-200" htmlFor="name">Nome</label>
                <input 
                    className="p-2 rounded bg-slate-400 outline-yellow-500 text-white text-lg"
                    type="text" 
                    name="name" 
                    id="name" 
                    placeholder="Digite seu nome..." 
                    required 
                />
            </div>
            <div className="flex flex-col justify-center w-full sm:max-w-lg mx-auto">
                <label className="mt-4 text-slate-200" htmlFor="sobrenome">Sobrenome</label>
                <input 
                    className="p-2 rounded bg-slate-400 outline-yellow-500 text-white text-lg"
                    type="text" 
                    name="sobrenome" 
                    id="sobrenome" 
                    placeholder="Digite seu nome..." 
                    required 
                />
            </div>
            <div className="flex flex-col justify-center w-full sm:max-w-lg mx-auto">
                <label className="mt-4 text-slate-200" htmlFor="email">E-mail</label>
                <input
                    className="p-2 rounded bg-slate-400 outline-yellow-500 text-white text-lg"
                    type="email" 
                    name="email" 
                    id="email" 
                    placeholder="Digite seu e-mail..." 
                    required 
                />
            </div>
        </div>
    )
}

export default UserForm