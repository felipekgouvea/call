'use client'

import { Button } from '@/app/_components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/app/_components/ui/form'
import { Input } from '@/app/_components/ui/input'
import { zodResolver } from '@hookform/resolvers/zod'
import { MoveRightIcon } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const formSchema = z.object({
  username: z
    .string()
    .min(3, {
      message: 'O usuário precisa ter pelo menos 3 letras.',
    })
    .regex(/^([a-z\\-]+)$/i, { message: 'Use somente letras ou hifens' })
    .transform((username) => username.toLowerCase()),

  name: z.string().min(3, {
    message: 'O nome precisa ter pelo menos 3 letras',
  }),
})

type FormSchema = z.infer<typeof formSchema>

export default function RegisterForm() {
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
  })

  function onSubmit(data: FormSchema) {
    console.log({ data })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-xs font-bold text-muted-foreground">
                Nome de usuário
              </FormLabel>
              <FormControl>
                <Input
                  prefix="cal.com"
                  className="border-none bg-[#121214]"
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-xs font-bold text-muted-foreground">
                Nome completo
              </FormLabel>
              <FormControl>
                <Input
                  className="border-none bg-[#121214]"
                  placeholder="Digite seu nome completo"
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="flex w-full gap-2 font-normal">
          Próximo passo
          <MoveRightIcon size={16} />
        </Button>
      </form>
    </Form>
  )
}
