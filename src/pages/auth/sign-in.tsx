import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Link } from 'react-router-dom'

const signinDataSchema = z.object({
  email: z.email(),
})

type SignInData = z.infer<typeof signinDataSchema>

function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignInData>()

  async function handleSignIn(data: SignInData) {
    await new Promise((resolve) => setTimeout(resolve, 2000))
    console.log(data)
    toast.success('Enviamos um link para o e-mail cadastrado.')
  }

  return (
    <>
      <title>Cadastro | pizza.shop</title>

      <div className="p-8">
        <Button variant="ghost" className="absolute right-8 top-8">
          <Link to="/sign-up">Novo estabelecimento</Link>
        </Button>
    
        <div className="flex w-[350px] flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Acessar Painel
            </h1>
            <p className="text-muted-foreground text-sm">
              Acompanhe suas vendas pelo painel do parceiro.
            </p>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit(handleSignIn)}>
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

export { SignIn }
