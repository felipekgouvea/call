function Stepper() {
  return (
    <div className="flex w-full flex-col gap-2">
      <span className="text-xs font-normal text-muted-foreground">
        Passo 1 de 4
      </span>
      <div className="flex gap-1">
        <div className="h-1 w-28 bg-muted" />
        <div className="h-1 w-28 bg-muted-foreground opacity-55" />
        <div className="h-1 w-28 bg-muted-foreground opacity-55" />
        <div className="h-1 w-28 bg-muted-foreground opacity-55" />
      </div>
    </div>
  )
}

export default Stepper
