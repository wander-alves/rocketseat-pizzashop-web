import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const signinDataSchema = z.object({
  email: z.email(),
})

type SigninData = z.infer<typeof signinDataSchema>

function Signin() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SigninData>()

  async function handleSignin(data: SigninData) {
    await new Promise((resolve) => setTimeout(resolve, 2000))

    console.log(data)
  }

  return (
    <>
      <title>Signin | pizza.shop</title>

      <div className="p-8">
        <div className="flex w-[350px] flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Acessar Painel
            </h1>
            <p className="text-muted-foreground text-sm">
              Acompanhe suas vendas pelo painel do parceiro.
            </p>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit(handleSignin)}>
            <div className="space-y-2">
              <Label htmlFor="email">Seu e-mail</Label>
              <Input id="email" type="email" {...register('email')} />
            </div>

            <Button className="w-full" type="submit" disabled={isSubmitting}>
              Accessar Painel
            </Button>
          </form>
        </div>
      </div>
    </>
  )
}

export { Signin }
