import { http, HttpResponse } from 'msw';

import type { GetManagedRestaurantResponse } from '../get-managed-restaurant';

const getManagedRestaurantMock = http.get<
    never, 
    never, 
    GetManagedRestaurantResponse
  >('/managed-restaurant', ()=> {
    return HttpResponse.json({
      id: 'mock-restaurant-id',
      name: 'Pizza Shop',
      description: 'Mock restaurant description.',
      managerId: 'mock-user-id',  
      createdAt: new Date(),
      updatedAt: null,
    })
});

export { getManagedRestaurantMock }
