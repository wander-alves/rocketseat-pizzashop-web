import { api } from '@/lib/axios';

interface GetOrdersRequest { 
  pageIndex?: number | null;
  orderId?: string | null;
  customerName?: string | null;
  status?: string | null;
}

interface GetOrdersResponse {
  orders: {
    orderId: string;
    status: 'pending' | 'canceled' | 'processing' | 'delivering' | 'delivered';
    customerName: string;
    total: number;
    createdAt: string;
  }[];
  meta: { 
    pageIndex: number;
    perPage: number;
    totalCount: number;
  }
}

async function getOrders({ 
  pageIndex,
  orderId,
  customerName,
  status,
}: GetOrdersRequest): Promise<GetOrdersResponse> {
  const response = await api.get('/orders', {
    params: {
      pageIndex,
      orderId,
      customerName,
      status,
    }
  });

  return response.data;
}

export { getOrders }