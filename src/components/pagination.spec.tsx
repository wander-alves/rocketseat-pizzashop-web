import { describe, afterEach, it, expect, vi } from 'vitest';
import { render, type RenderResult } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Pagination } from './pagination';

describe('Pagination', ()=> {
  let wrapper: RenderResult;
  
  afterEach(()=> {
    wrapper.unmount();
  })
  it('should display de rigth amount of pages and results', ()=> {
    wrapper = render(
      <Pagination
        pageIndex={0}
        totalCount={200}
        perPage={10}
        onPageChange={()=> {}}
      />
    );
      
    const paginationDisplayIndex = wrapper.getByText('Página 1 de 20');
    const paginationAmountOfPages = wrapper.getByText('Total de 200 item(s)');

    expect(paginationDisplayIndex).toBeInTheDocument();
    expect(paginationAmountOfPages).toBeInTheDocument();
  });

  it('should be able do navigate to the next page', async ()=> {
    const onPageChangeCallback = vi.fn();

    const user = userEvent.setup();

    wrapper = render(
      <Pagination
        pageIndex={0}
        totalCount={200}
        perPage={10}
        onPageChange={onPageChangeCallback}
      />
    );

    const nextPageButton = wrapper.getByRole('button', {
      name: 'Próxima página',
    });

    await user.click(nextPageButton);

    expect(onPageChangeCallback).toHaveBeenCalledWith(1);
     
  });
});