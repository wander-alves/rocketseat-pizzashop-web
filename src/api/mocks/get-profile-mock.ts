import { http, HttpResponse } from 'msw';

import type { GetProfileResponse } from '../get-profile';

const getProfileMock = http.get<
    never, 
    never, 
    GetProfileResponse
  >('/me', ()=> {
    return HttpResponse.json({
      id: 'mock-user-id',
      name: 'John Doe',
      email: 'john.doe@example.com',
      phone: '99 8877-6655',
      role: 'manager',
      createdAt: new Date(),
      updatedAt: null,
    })
});

export { getProfileMock }
