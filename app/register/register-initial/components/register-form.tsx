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
import { api } from '@/app/_lib/axios'
import { zodResolver } from '@hookform/resolvers/zod'
import { AxiosError } from 'axios'
import { MoveRightIcon } from 'lucide-react'
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const registerFormSchema = z.object({
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

type RegisterFormSchema = z.infer<typeof registerFormSchema>

export default function RegisterForm() {
  const form = useForm<RegisterFormSchema>({
    resolver: zodResolver(registerFormSchema),
  })

  const params = useSearchParams()
  const route = useRouter()

  useEffect(() => {
    if (params.get('username')) {
      form.setValue('username', String(params.get('username')))
    }
  }, [params, form])

  async function handleRegister(data: RegisterFormSchema) {
    try {
      await api.post('/users', {
        name: data.name,
        username: data.username,
      })

      await route.push('/register/connect-calendar')
    } catch (error) {
      if (error instanceof AxiosError && error?.response?.data?.message) {
        alert(error.response.data.message)
      }
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleRegister)} className="space-y-4">
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
