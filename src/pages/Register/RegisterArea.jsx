// Components
import { GrFormNext, GrFormPrevious } from 'react-icons/gr'

const RegisterArea = () => {
    return (
      <div className="w-screen h-screen bg-slate-600">
        <div>
            <h2>Registre o Seu Delivery!</h2>
            <p>Ficamos felizes com seu interesse em nosso produto, utilize o formulário abaixo para registrar seu Delivery.</p>
        </div>
        <div>
            <p>etapas</p>
            <form>
                <div></div>
                <div>
                    <button type="button">
                        <GrFormPrevious />
                        <span>Voltar</span>
                    </button>
                    <button type="submit">
                        <span>Avançar</span>
                        <GrFormNext />
                    </button>
                </div>
            </form>
        </div>
      </div>
    )
  }
  
  export default RegisterArea