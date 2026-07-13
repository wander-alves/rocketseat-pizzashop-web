import { Outlet } from 'react-router-dom'

function AuthLayout() {
  return (
    <>
      <div>Autenticação</div>
      <div>
        <Outlet />
      </div>
    </>
  )
}

export { AuthLayout }
