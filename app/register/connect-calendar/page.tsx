import Stepper from '@/app/_components/stepper'

function ConnectCalendar() {
  return (
    <div className="flex h-screen flex-col items-center justify-center space-y-6 px-5">
      <Stepper step={1} className="bg-muted" />
      <div className="h-auto w-full rounded-lg bg-[#1D1D1F] p-3">
        {/* <RegisterForm /> */}
      </div>
    </div>
  )
}

export default ConnectCalendar
