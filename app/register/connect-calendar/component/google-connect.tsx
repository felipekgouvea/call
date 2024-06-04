'use client'

import { Button } from '@/app/_components/ui/button'
import { Card, CardContent } from '@/app/_components/ui/card'
import { CheckCheckIcon, MoveRightIcon } from 'lucide-react'
import { signIn, useSession } from 'next-auth/react'
import { useRouter, useSearchParams } from 'next/navigation'

function GoogleConnect() {
  const session = useSession()
  const params = useSearchParams()
  const router = useRouter()

  const isSigndeIn = session.status === 'authenticated'

  async function handleSingInClick() {
    await signIn('google')
  }

  return (
    <div className="space-y-4">
      <Card className="border-muted-foreground bg-transparent text-muted">
        <CardContent className="p-0">
          <div className="flex items-center justify-between p-4">
            <span>Google Calendário</span>
            {isSigndeIn ? (
              <Button
                variant="link"
                className="gap-2 border-2 border-primary font-semibold"
                onClick={handleSingInClick}
                disabled
              >
                Conectado
                <CheckCheckIcon size={16} />
              </Button>
            ) : (
              <Button
                variant="link"
                className="gap-2 border-2 border-primary font-semibold transition-colors duration-500 hover:bg-primary hover:text-white"
                onClick={handleSingInClick}
              >
                Conectar
                <MoveRightIcon size={16} />
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
      {params.get('error') === 'permissions' ? (
        <p className="w-full text-[0.8rem] font-medium text-destructive">
          Falha ao conectar ao Google, verifique se você habilitou as permissões
          de acesso ao Google Calendar.
        </p>
      ) : (
        ''
      )}
      <Button
        disabled={!isSigndeIn}
        onClick={() => {
          router.push('/register/time-intervals')
        }}
        className={
          !isSigndeIn
            ? `h-11 w-full gap-2 bg-gray-200 text-primary`
            : `h-11 w-full gap-2`
        }
      >
        Próximo passo <MoveRightIcon size={16} />
      </Button>
    </div>
  )
}

export default GoogleConnect
