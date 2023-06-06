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
    <div className="w-screen h-screen bg-slate-600">
      <div>
        <h2>Registre o Seu Delivery!</h2>
        <p>Ficamos felizes com seu interesse em nosso produto, utilize o formulário abaixo para registrar seu Delivery.</p>
      </div>
      <div>
        <p>etapas</p>
        <form onSubmit={(e) => changeStep(currentStep + 1, e)}>
          <div>
            {currentComponent}
          </div>
          <div>
            {!isFirstStep && (
              <button type="button" onClick={() => changeStep(currentStep - 1)}>
                <GrFormPrevious />
                <span>Voltar</span>
              </button>
            )}
            {!isLastStep ? (
              <button type="submit">
                <span>Avançar</span>
                <GrFormNext />
              </button>
            ) : (
              <button type="button">
                <span>Enviar</span>
                <FiSend />
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  )
}

export default RegisterArea