import { Button } from '@/app/_components/ui/button'
import { Card, CardContent } from '@/app/_components/ui/card'
import { MoveRightIcon } from 'lucide-react'

function GoogleConnect() {
  return (
    <div className="space-y-4">
      <Card className="border-muted-foreground bg-transparent text-muted">
        <CardContent className="p-0">
          <div className="flex items-center justify-between p-4">
            <span>Google Calendário</span>
            <Button
              variant="link"
              className="gap-2 border-2 border-primary font-semibold"
            >
              Conectar
              <MoveRightIcon size={16} />
            </Button>
          </div>
        </CardContent>
      </Card>
      <Button className="h-11 w-full gap-2">
        Próximo passo <MoveRightIcon size={16} />
      </Button>
    </div>
  )
}

export default GoogleConnect
