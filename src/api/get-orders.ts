import { api } from '@/lib/axios';

interface GetOrdersRequest { 
  pageIndex?: number | null;
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
  pageIndex 
}: GetOrdersRequest): Promise<GetOrdersResponse> {
  const response = await api.get('/orders', {
    params: {
      pageIndex,
    }
  });

  return response.data;
}

export { getOrders }