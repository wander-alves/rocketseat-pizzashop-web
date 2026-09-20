import { api } from "@/lib/axios";

interface GetPopularProducts {
  productName: string;
  amount: number;
}

type GetPopularProductsResponse = {
  popularProducts: GetPopularProducts[];
};

async function getPopularProducts() {
  const response = await api.get<GetPopularProductsResponse>('/metrics/popular-products');

  return response.data.popularProducts;
}

export { getPopularProducts }
export type { GetPopularProductsResponse }