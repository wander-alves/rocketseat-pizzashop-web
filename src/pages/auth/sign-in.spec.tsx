import { describe, it, expect  } from 'vitest';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { SignIn } from './sign-in';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '@/lib/react-query';

describe('NavLink', ()=> {
  it('should hightlight the nav link when is the current page', ()=> {
    const wrapper = render(
      <SignIn />,
      {
        wrapper: ({ children }) => {
          return (
            <MemoryRouter initialEntries={['/sign-in?email=john.doe@example.com']}>
              <QueryClientProvider client={queryClient}>
                { children }
              </QueryClientProvider>
            </MemoryRouter>
          )
        }
      }
    );

    const emailInput = wrapper.getByLabelText('email') as HTMLInputElement;

    expect(emailInput.value).toEqual('john.doe@example.com');

  })
});