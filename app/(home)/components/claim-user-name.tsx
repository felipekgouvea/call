'use client'

import { Button } from '@/app/_components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/app/_components/ui/form'
import { Input } from '@/app/_components/ui/input'
import { zodResolver } from '@hookform/resolvers/zod'
import { MoveRight } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const formSchema = z.object({
  username: z
    .string()
    .min(3, {
      message: 'Deve conter no minímo 3 caracteres.',
    })
    .regex(/^([a-z\\-]+)$/i, { message: 'Use somente letras ou hifens' })
    .transform((username) => username.toLowerCase()),
})

type FormSchema = z.infer<typeof formSchema>

function ClaimUserName() {
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
  })

  function onSubmit(data: FormSchema) {
    console.log({ data })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex gap-2">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder="seu-usuário"
                  prefix="call.com/"
                  className="flex-1"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="flex gap-2 font-normal">
          Reservar
          <MoveRight size={16} />
        </Button>
      </form>
    </Form>
  )
}

export default ClaimUserName
