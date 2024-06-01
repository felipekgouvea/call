interface RegisterHeaderProsps {
  title: string
  subtitle: string
}

function RegisterHeader({ title, subtitle }: RegisterHeaderProsps) {
  return (
    <div className="flex flex-col items-center gap-1">
      <h2 className="text-2xl font-semibold text-white">{title}</h2>
      <span className="text-center text-sm font-normal text-muted-foreground">
        {subtitle}
      </span>
    </div>
  )
}

export default RegisterHeader
