import { useState } from "react";

const CartArea = () => {
    const [itemCount, setItemCount] = useState(0);
    const [observation, setObservation] = useState('');

    const incrementItemCount = () => {
        setItemCount(itemCount + 1);
    };

    const decrementItemCount = () => {
        if (itemCount > 0) {
            setItemCount(itemCount - 1);
        }
    };

    const handleObservationChange = (e) => {
        setObservation(e.target.value);
    };

    const handleFinishClick = () => {
        // Implement your logic for finishing the order
        // This is just a placeholder function
        console.log('Order finished');
    };

    return (
        <div className="container mx-auto">
            <div className="my-4">
                <button
                    className="bg-blue-500 text-white py-2 px-4 rounded"
                    onClick={incrementItemCount}
                >
                    +
                </button>
                <button
                    className="bg-red-500 text-white py-2 px-4 rounded ml-2"
                    onClick={decrementItemCount}
                >
                    -
                </button>
            </div>
            <div className="my-4">
                <button className="bg-green-500 text-white py-2 px-4 rounded">
                    Voltar para o cardápio
                </button>
            </div>
            <div className="my-4">
                <label className="block font-bold">Observações:</label>
                <textarea
                    className="border border-gray-300 rounded w-full h-20 px-2 py-1"
                    value={observation}
                    onChange={handleObservationChange}
                ></textarea>
            </div>
            <div className="my-4">
                <button
                    className="bg-blue-500 text-white py-2 px-4 rounded"
                    onClick={handleFinishClick}
                >
                    Finalizar
                </button>
            </div>
            <div className="my-4">
                <p>Quantidade de itens: {itemCount}</p>
                <p>Observações: {observation}</p>
            </div>
        </div>
    );
};

export default CartArea