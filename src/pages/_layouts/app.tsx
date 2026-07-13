import { Outlet } from 'react-router-dom'

function AppLayout() {
  return (
    <>
      <div>Cabeçalho</div>
      <div>
        <Outlet />
      </div>
    </>
  )
}

export { AppLayout }
