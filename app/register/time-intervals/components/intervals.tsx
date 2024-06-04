import { Card, CardContent } from '@/app/_components/ui/card'
import IntervalItem from './inteval-item'
import { Button } from '@/app/_components/ui/button'
import { MoveRightIcon } from 'lucide-react'

function Intervals() {
  return (
    <div className="space-y-4">
      <Card className="border border-[#323238]">
        <CardContent className="bg-[#1D1D1F] p-0">
          <IntervalItem title="Segunda-Feira" />
          <IntervalItem title="Terça-Feira" />
          <IntervalItem title="Quarta-Feira" />
          <IntervalItem title="Quinta-Feira" />
          <IntervalItem title="Sexta-Feira" />
          <IntervalItem title="Sábado" />
          <IntervalItem title="Domingo" />
        </CardContent>
      </Card>
      <Button className="h-11 w-full gap-2">
        Próximo passo <MoveRightIcon size={16} />
      </Button>
    </div>
  )
}

export default Intervals
