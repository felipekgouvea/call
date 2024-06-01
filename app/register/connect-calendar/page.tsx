import Stepper from '@/app/_components/stepper'
import RegisterHeader from '../register-initial/components/register-header'

function ConnectCalendar() {
  return (
    <div className="flex h-screen flex-col items-center justify-center space-y-6 px-5">
      <RegisterHeader
        title="Conecte sua agenda!"
        subtitle="Conecte o seu calendário para verificar automaticamente as horas ocupadas e os novos eventos à medida em que são agendados."
      />
      <Stepper step={2} className="bg-muted" />
      <div className="h-auto w-full rounded-lg bg-[#1D1D1F] p-3"></div>
    </div>
  )
}

export default ConnectCalendar
