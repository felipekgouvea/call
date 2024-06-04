import Stepper from '@/app/_components/stepper'
import RegisterHeader from '../register-initial/components/register-header'
import Intervals from './components/intervals'

function TimeIntervals() {
  return (
    <div className="mb-36 mt-36 flex h-screen flex-col items-center justify-center space-y-6 px-5">
      <RegisterHeader
        title="Quase lá"
        subtitle="Defina o intervalo de horários que você está disponível em cada dia da semana."
      />
      <Stepper step={3} className="bg-muted" />
      <div className="h-auto w-full rounded-lg bg-[#1D1D1F] p-3">
        <Intervals />
      </div>
    </div>
  )
}

export default TimeIntervals
