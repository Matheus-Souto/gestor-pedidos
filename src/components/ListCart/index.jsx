import { BsFillTrash3Fill } from 'react-icons/bs'
import { AiOutlinePlus } from 'react-icons/ai'

const ListCart = () => {
    return (
        <div className="mt-10 px-4 border-b border-white/75 pb-6 sm:px-0">
            <div>
                <h3 className="text-sm text-white">Lista de itens</h3>
            </div>

            <div className="mt-5">
                <div className="flex">
                    <div className="mr-3 flex w-full">
                        <img className="w-16 h-16 rounded mr-3" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png" alt="" />
                        <div className="flex flex-col justify-center">
                            <h3 className="mb-2 text-sm">X-Tudo</h3>
                            <p className="text-[14px] font-semibold">R$ 10,00</p>
                        </div>

                    </div>
                    <div className="flex justify-end items-end w-full">
                        <div className="">
                            <div className="bg-white py-1 px-2 flex items-center justify-center rounded shadow-md shadow-black/50 font-light">
                                <a href="">
                                    <BsFillTrash3Fill color='red' className='mr-3' />
                                </a>

                                <p className="text-sm">300g</p>
                                <a href="">
                                    <AiOutlinePlus color='red' className='ml-3' />
                                </a>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ListCart