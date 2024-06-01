import Stepper from '@/app/_components/stepper'
import RegisterHeader from './components/register-header'
import RegisterForm from './components/register-form'

function RegisterInitial() {
  return (
    <div className="flex h-screen flex-col items-center justify-center space-y-6 px-5">
      <RegisterHeader
        title="Bem-vindo ao Ignite Call!"
        subtitle="Precisamos de algumas informações para criar seu perfil! Ah, você pode
      editar essas informações depois."
      />
      <Stepper step={1} />
      <div className="h-auto w-full rounded-lg bg-[#1D1D1F] p-3">
        <RegisterForm />
      </div>
    </div>
  )
}

export default RegisterInitial
