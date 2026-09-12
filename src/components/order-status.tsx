type OrderStatusType = 'pending' | 'canceled' | 'processing' | 'delivering' | 'delivered';

interface OrderStatusProps { 
  status: OrderStatusType;
}

const orderStatusMap: Record<OrderStatusType, string> = { 
  pending: 'Pendente',
  processing: 'Em preparo',
  delivering: 'Em entrega',
  delivered: 'Entregue',
  canceled: 'Cancelado',
}

function OrderStatus ({ status }: OrderStatusProps) { 
  return (
    <div className="flex items-center gap-2">
      {status === 'pending' && (
        <span data-testid="badge" className="h-2 w-2 rounded-full bg-slate-400"/>
      )}
      {['processing', 'delivering'].includes(status) && (
        <span data-testid="badge" className="h-2 w-2 rounded-full bg-amber-500"/>
      )}
      {status === 'delivered' && (
        <span data-testid="badge" className="h-2 w-2 rounded-full bg-emerald-500"/>
      )}
      {status === 'canceled' && (
        <span data-testid="badge" className="h-2 w-2 rounded-full bg-rose-500"/>
      )}
      <span className="font-medium text-muted-foreground">
          {orderStatusMap[status]}
      </span>
    </div>
  );
}

export { OrderStatus }
export type { OrderStatusType }