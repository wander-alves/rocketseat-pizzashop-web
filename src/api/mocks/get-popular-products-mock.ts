import { http, HttpResponse } from 'msw';

import type { GetPopularProductsResponse } from '../get-popular-products';

const getPopularProductsMock = http.get<
  never,
  never,
  GetPopularProductsResponse
>('/metrics/popular-products', ()=> { 
  return HttpResponse.json({
    popularProducts: [
      { productName: 'Pizza 01', amount: 22 },
      { productName: 'Pizza 02', amount: 16 },
      { productName: 'Pizza 03', amount: 14 },
      { productName: 'Pizza 04', amount: 14 },
      { productName: 'Pizza 05', amount: 12 },
    ],
  });
});

export { getPopularProductsMock };