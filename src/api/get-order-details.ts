import { api } from "@/lib/axios";

interface GetOrderDetailsParams {
  orderId: string;
}

interface GetOrderDetailsResponse {
  id: string;
  status: 'pending' | 'processing' | 'delivering' | 'delivered' | 'canceled';
  totalInCents: number;
  createdAt: string;
  customer: {
    name: string;
    email: string;
    phone: string | null;
  }
  orderProducts: {
    id: string;
    priceInCents: number;
    quantity: number;
    product: {
      name: string;
    }
  }[];
}

async function getOrderDetails({ orderId }: GetOrderDetailsParams ): Promise<GetOrderDetailsResponse> {
  const response = await api.get(`/orders/${orderId}`);

  return response.data;
}

export { getOrderDetails };
export type { GetOrderDetailsParams, GetOrderDetailsResponse };