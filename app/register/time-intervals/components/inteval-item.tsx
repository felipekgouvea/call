'use client'

import { Checkbox } from '@/app/_components/ui/checkbox'
import { Input } from '@/app/_components/ui/input'
import { Separator } from '@/app/_components/ui/separator'

interface IntervalItemProps {
  title: string
}

function IntervalItem({ title }: IntervalItemProps) {
  return (
    <>
      <div className="flex items-center justify-between p-4">
        <div className="flex w-full flex-auto items-center gap-3">
          <Checkbox className="h-6 w-6 border-none bg-[#121214]" />
          <span className="text-white">{title}</span>
        </div>
        <div className="flex items-center gap-2">
          <Input
            className="border-none bg-[#121214] placeholder:text-white"
            placeholder="9:00h"
          />
          <Input
            className="border-none bg-[#121214] placeholder:text-white"
            placeholder="17:00h"
          />
        </div>
      </div>
      <Separator className="bg-[#323238]" />
    </>
  )
}

export default IntervalItem
