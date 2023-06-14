const HeaderCart = () => {
    return (
        <div className="container px-4 sm:px-0">
            <div className="flex items-center">
            <div className="w-10 h-10 bg-white rounded-full mr-3">
                <img className="w-10 h-10 rounded-full" src="http://bnic.mb/sites/default/files/field/image/brasaobnic.png" alt="Logo" />
            </div>
            <div className="">
                <h2 className="text-md font-semibold text-center text-white/75">Restaurante do Zezinho</h2>
                <a className="text-sm text-yellow-500 font-semibold text-center" href="#">Adicionar mais itens</a>
            </div>
            </div>

            <div className="bg-gray-500/70 p-3 rounded mt-5 text-white/70 text-xs sm:text-sm">
                <p className="">O pedido mínimo desse restaurante é R$ 30,00, sem contar com a taxa de entrega.</p>
            </div>
        </div>
    )
}

export default HeaderCart