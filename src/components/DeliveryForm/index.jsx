const DeliveryForm = () => {
    return(
        <div className="flex flex-col">
            <div className="sm:flex sm:justify-center sm:w-full">
                <div className="flex flex-col justify-center w-full sm:max-w-lg mx-auto ">
                    <label className="mt-4 text-slate-200" htmlFor="nomeRestaurante">Nome do Restaurante</label>
                    <input
                        className="p-2 rounded bg-slate-400 outline-yellow-500 text-white text-lg"
                        type="text"
                        name="nomeRestaurante"
                        id="nomeRestaurante"
                        placeholder="Digite o nome do Restaurante..."
                        required
                    />
                </div>
                <div className="flex flex-col justify-center w-full sm:max-w-lg mx-auto sm:pl-3">
                    <label className="mt-4 text-slate-200" htmlFor="logo">Logo</label>
                    <input
                        className="p-2 rounded bg-slate-400 outline-yellow-500 text-white text-lg"
                        type="text"
                        name="logo"
                        id="logo"
                        placeholder="Upload Logo do Restaurante..."
                        required
                    />
                </div>
            </div>
            <div className="sm:flex sm:justify-center sm:w-full">
                <div className="flex flex-col justify-center w-full sm:max-w-lg mx-auto">
                   <div className="flex flex-col justify-center items-center sm:mt-12 ">
                   <label className="mt-4 text-slate-200" htmlFor="email">Tipo de Restaurante</label>
                    <div className="text-white">
                        <input type="checkbox" id="topping" name="topping" value="Paneer" /> Lanches
                    </div>
                    <div className="text-white">
                        <input type="checkbox" id="topping" name="topping" value="Paneer" /> Japonesa
                    </div>
                    <div className="text-white">
                        <input type="checkbox" id="topping" name="topping" value="Paneer" /> Pizzaria
                    </div>
                    <div className="text-white">
                        <input type="checkbox" id="topping" name="topping" value="Paneer" /> Massas
                    </div>
                   </div>
                </div>
                <div className="flex flex-col justify-center w-full sm:max-w-lg mx-auto sm:pl-3">
                    <label className="mt-4 text-slate-200" htmlFor="cpfcnpj">CPF/CNPJ</label>
                    <input
                        className="p-2 rounded bg-slate-400 outline-yellow-500 text-white text-lg"
                        type="text"
                        name="cpfcnpj"
                        id="cpfcnpj"
                        placeholder="Digite o CPF/CNPJ..."
                        required
                    />
                </div>
            </div>
        </div>
    )
}

export default DeliveryForm