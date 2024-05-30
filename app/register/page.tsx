import Stepper from '../_components/stepper'
import RegisterForm from './components/register-form'

function RegisterPage() {
  return (
    <div className="flex h-screen flex-col items-center justify-center space-y-6 px-5">
      <div className="flex flex-col items-center gap-1">
        <h2 className="text-2xl font-semibold text-white">
          Bem-vindo ao Ignite Call!
        </h2>
        <span className="text-center text-sm font-normal text-muted-foreground">
          Precisamos de algumas informações para criar seu perfil! Ah, você pode
          editar essas informações depois.
        </span>
      </div>
      <Stepper />
      <div className="h-auto w-full rounded-lg bg-[#1D1D1F] p-3">
        <RegisterForm />
      </div>
    </div>
  )
}

export default RegisterPage
