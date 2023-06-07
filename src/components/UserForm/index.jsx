import './styles.css'

const UserForm = () => {
    return (
        <div className="flex flex-col justify-center">
            <div className="sm:flex sm:justify-center sm:w-full">
                <div className="flex flex-col justify-center w-full sm:max-w-lg mx-auto sm:w-[50%]">
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
                <div className="flex flex-col justify-center w-full sm:max-w-lg mx-auto sm:w-[50%] sm:pl-3">
                    <label className="mt-4 text-slate-200" htmlFor="sobrenome">Sobrenome</label>
                    <input
                        className="p-2 rounded bg-slate-400 outline-yellow-500 text-white text-lg"
                        type="text"
                        name="sobrenome"
                        id="sobrenome"
                        placeholder="Digite seu sobrenome..."
                        required
                    />
                </div>
            </div>
            <div className="sm:flex sm:justify-center sm:w-full">
                <div className="flex flex-col justify-center w-full sm:max-w-lg mx-auto sm:w-[50%]">
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
                <div className="flex flex-col justify-center w-full sm:max-w-lg mx-auto sm:w-[50%] sm:pl-3">
                    <label className="mt-4 text-slate-200" htmlFor="password">Senha</label>
                    <input
                        className="p-2 rounded bg-slate-400 outline-yellow-500 text-white text-lg"
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Digite uma senha..."
                        required
                    />
                </div>
            </div>
            <div className="sm:flex sm:justify-center sm:w-full">
                <div className="flex flex-col justify-center w-full sm:max-w-lg mx-auto sm:w-[50%]">
                    <label className="mt-4 text-slate-200" htmlFor="confirmPassword">Confirmar Senha</label>
                    <input
                        className="p-2 rounded bg-slate-400 outline-yellow-500 text-white text-lg"
                        type="password"
                        name="confirmPassword"
                        id="confirmPassword"
                        placeholder="Confirme a senha..."
                        required
                    />
                </div>
                <div className="flex flex-col justify-center w-full sm:max-w-lg mx-auto sm:w-[50%] sm:pl-3">
                    <label className="mt-4 text-slate-200" htmlFor="whatsapp">WhatsApp</label>
                    <input
                        className="p-2 rounded bg-slate-400 outline-yellow-500 text-white text-lg"
                        type="text"
                        name="whatsapp"
                        id="whatsapp"
                        placeholder="Digite seu whatsapp..."
                        required
                    />
                </div>
            </div>

        </div>
    )
}

export default UserForm