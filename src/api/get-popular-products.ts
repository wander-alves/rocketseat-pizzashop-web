import { api } from "@/lib/axios";

type GetPopularProductResponse = {
  productName: string;
  amount: number;
}[];

async function getPopularProducts(): Promise<GetPopularProductResponse> {
  const response = await api.get('/metrics/popular-products');

  return response.data.popularProducts;
}

export { getPopularProducts }
export type { GetPopularProductResponse }