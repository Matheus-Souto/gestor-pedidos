// Components
import { GrFormNext, GrFormPrevious } from 'react-icons/gr'
import { FiSend } from 'react-icons/fi'
import UserForm from '../../components/UserForm'
import DeliveryForm from '../../components/DeliveryForm'
import AddressForm from '../../components/AddressForm'

// Hooks
import { useForm } from '../../hooks/useForm'

const RegisterArea = () => {

  const formComponents = [<UserForm />, <DeliveryForm />, <AddressForm />]

  const { currentStep, currentComponent, changeStep, isLastStep, isFirstStep } = useForm(formComponents)

  return (
    <div className="container h-full mx-auto flex flex-col justify-center items-center px-4 py-10 bg-slate-600">
      <div className="w-full flex flex-col justify-center bg-slate-900/40 py-14 px-5 max-w-lg shadow-lg shadow-black/50">
        <div>
          <h1 className='text-3xl text-white font-bold text-center pt-4 sm:text-4xl' >Registre o Seu Delivery!</h1>
          <p className='mt-4 text-slate-200 text-center'>Ficamos felizes com seu interesse em nosso produto, utilize o formulário abaixo para registrar seu Delivery.</p>
        </div>
        <div className='flex flex-col w-full sm:max-w-lg'>
          <p>etapas</p>
          <form onSubmit={(e) => changeStep(currentStep + 1, e)}>
            <div className=''>
              {currentComponent}
            </div>
            <div className='flex justify-end w-full pt-4'>
              {!isFirstStep && (
                <button className='flex items-center rounded font-bold text-white py-2 px-4 bg-yellow-500' type="button" onClick={() => changeStep(currentStep - 1)}>
                  <GrFormPrevious color='white' />
                  <span className='-mt-0.5 ml-1'>Voltar</span>
                </button>
              )}
              {!isLastStep ? (
                <button className='flex items-center rounded font-bold text-white py-2 px-4 bg-yellow-500 ml-3' type="submit">
                  <span className='-mt-0.5 ml-1'>Avançar</span>
                  <GrFormNext />
                </button>
              ) : (
                <button className='flex items-center rounded font-bold text-white py-2 px-4 bg-yellow-500 ml-3' type="button">
                  <span className='-mt-0.5 mr-1'>Enviar</span>
                  <FiSend />
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default RegisterArea