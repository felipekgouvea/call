import { cn } from '../_lib/utils'

interface StepperProps {
  step: number
  className?: string
}

function Stepper({ step, className }: StepperProps) {
  return (
    <div className="flex w-full flex-col gap-2">
      <span className="text-xs font-normal text-muted-foreground">
        Passo {step} de 4
      </span>
      <div className="flex gap-1">
        <div className={cn('h-1 w-28 bg-muted', step === 1 ? className : '')} />
        <div
          className={cn(
            'h-1 w-28 bg-muted-foreground',
            step === 2 || step === 3 || step === 4 ? className : '',
          )}
        />
        <div
          className={cn(
            'h-1 w-28 bg-muted-foreground',
            step === 3 || step === 4 ? className : '',
          )}
        />
        <div
          className={cn(
            'h-1 w-28 bg-muted-foreground',
            step === 4 ? className : '',
          )}
        />
      </div>
    </div>
  )
}

export default Stepper
