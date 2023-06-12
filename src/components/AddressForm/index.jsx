const AddressForm = () => {
    return(
        <div className="flex flex-col">
            <div className="sm:flex sm:justify-center sm:w-full">
                <div className="flex flex-col justify-center w-full sm:max-w-lg mx-auto ">
                    <label className="mt-4 text-slate-200" htmlFor="rua">Rua</label>
                    <input
                        className="p-2 rounded bg-slate-400 outline-yellow-500 text-white text-lg"
                        type="text"
                        name="rua"
                        id="rua"
                        placeholder="Digite sua rua..."
                        required
                    />
                </div>
                <div className="flex flex-col justify-center w-full sm:max-w-lg mx-auto sm:pl-3">
                    <label className="mt-4 text-slate-200" htmlFor="bairro">Bairro</label>
                    <input
                        className="p-2 rounded bg-slate-400 outline-yellow-500 text-white text-lg"
                        type="text"
                        name="bairro"
                        id="bairro"
                        placeholder="Digite seu bairro..."
                        required
                    />
                </div>
            </div>
            <div className="sm:flex sm:justify-center sm:w-full">
                <div className="flex flex-col justify-center w-full sm:max-w-lg mx-auto">
                    <label className="mt-4 text-slate-200" htmlFor="cidade">Cidade</label>
                    <input
                        className="p-2 rounded bg-slate-400 outline-yellow-500 text-white text-lg"
                        type="text"
                        name="cidade"
                        id="cidade"
                        placeholder="Digite sua cidade..."
                        required
                    />
                </div>
                <div className="flex flex-col justify-center w-full sm:max-w-lg mx-auto sm:pl-3">
                    <label className="mt-4 text-slate-200" htmlFor="estado">Estado</label>
                    <input
                        className="p-2 rounded bg-slate-400 outline-yellow-500 text-white text-lg"
                        type="text"
                        name="estado"
                        id="estado"
                        placeholder="Digite seu estado..."
                        required
                    />
                </div>
            </div>
            <div className="sm:flex sm:justify-center sm:w-full">
                <div className="flex flex-col justify-center w-full sm:max-w-lg mx-auto">
                    <label className="mt-4 text-slate-200" htmlFor="cep">CEP</label>
                    <input
                        className="p-2 rounded bg-slate-400 outline-yellow-500 text-white text-lg"
                        type="text"
                        name="cep"
                        id="cep"
                        placeholder="Digite seu CEP..."
                        required
                    />
                </div>
                <div className="flex flex-col justify-center w-full sm:max-w-lg mx-auto sm:pl-3">
                    <label className="mt-4 text-slate-200" htmlFor="numero">Número</label>
                    <input
                        className="p-2 rounded bg-slate-400 outline-yellow-500 text-white text-lg"
                        type="text"
                        name="numero"
                        id="numero"
                        placeholder="Digite seu número..."
                        required
                    />
                </div>
            </div>
            <div className="w-full sm:flex sm:justify-center sm:w-full">
                <div className="flex flex-col justify-center w-full sm:max-w-lg mx-auto">
                    <label className="mt-4 text-slate-200" htmlFor="complemento">Complemento</label>
                    <input
                        className="p-2 rounded bg-slate-400 outline-yellow-500 text-white text-lg"
                        type="text"
                        name="complemento"
                        id="complemento"
                        placeholder="Digite seu complemento..."
                        required
                    />
                </div>
            </div>

        </div>
    )
}

export default AddressForm