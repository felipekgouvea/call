import Image from 'next/image'
import ClaimUserName from './components/claim-user-name'

export default function Home() {
  return (
    <div className="flex h-screen flex-col items-center justify-center space-y-5 px-5">
      <div className="relative h-[300px] w-full">
        <Image
          src="/banner-calendar.png"
          alt="Calendario simbolizando a aplicação em funcionamento"
          fill
          className="object-contain"
          priority
        />
      </div>
      <div className="space-y-1">
        <h1 className="text-center text-3xl font-extrabold">
          Agendamento descomplicado
        </h1>
        <h2 className="text-center text-sm font-normal text-muted-foreground">
          Conecte seu calendário e permita que as pessoas marquem agendamentos
          no seu tempo livre.
        </h2>
      </div>
      <div className="h-auto w-full rounded-lg bg-[#1D1D1F] p-3">
        <ClaimUserName />
      </div>
    </div>
  )
}
