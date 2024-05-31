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
import { Loader2, MoveRight } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const claimUserNameFormSchema = z.object({
  username: z
    .string()
    .min(3, {
      message: 'Deve conter no minímo 3 caracteres.',
    })
    .regex(/^([a-z\\-]+)$/i, { message: 'Use somente letras ou hifens' })
    .transform((username) => username.toLowerCase()),
})

type ClaimUserNameFormData = z.infer<typeof claimUserNameFormSchema>

function ClaimUserName() {
  const form = useForm<ClaimUserNameFormData>({
    resolver: zodResolver(claimUserNameFormSchema),
  })

  const router = useRouter()

  async function handleClaimUserName(data: ClaimUserNameFormData) {
    const { username } = data

    await router.push(`/register?username=${username}`)
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleClaimUserName)}
        className="flex gap-2"
      >
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
        <Button
          type="submit"
          disabled={form.formState.isSubmitting}
          className="flex gap-2 font-normal"
        >
          {form.formState.isSubmitting && (
            <Loader2 className="mr-1 h-4 w-4 animate-spin" />
          )}
          Reservar
          <MoveRight size={16} />
        </Button>
      </form>
    </Form>
  )
}

export default ClaimUserName
