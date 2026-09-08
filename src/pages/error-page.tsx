import { Link, useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError() as Error;

  return (
    <div className="flex h-screen flex-col items-center justify-center gap-2" >
      <div className="h-40 flex flex-col gap-4">
        <h1 className="text-4xl font-bold">Whoops, algo deu errado ao carregar a página...</h1>
        <div className="flex flex-col gap-2">
          <p className="text-accent-foreground">
            Um erro ocorreu na aplicação, abaixo você pode visualizar os detalhes para contato com o suporte:
          </p>
          <pre>{error?.message || JSON.stringify(error)}</pre>
        </div>
      </div>
      
      <p className="text-accent-foreground">
        Voltar para o{" "}
        <Link to="/" className="text-sky-600 dark:text-sky-400">Dashboard</Link>
      </p>
    </div>
  )
}

export { ErrorPage }