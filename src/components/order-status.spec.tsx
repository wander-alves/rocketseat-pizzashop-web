import { describe, afterEach, it, expect  } from 'vitest';
import { render, type RenderResult } from '@testing-library/react';
import { OrderStatus } from './order-status';


describe('Order Status', ()=> {
  let wrapper: RenderResult;
  
  afterEach(()=> {
    wrapper.unmount();
  });

  it('should display the correct text when order status is pending', ()=> {
    wrapper = render(<OrderStatus status='pending' />);
    const statusText = wrapper.getByText('Pendente');
    const badgeElement = wrapper.getByTestId('badge');
    
    expect(statusText).toBeInTheDocument();
    expect(badgeElement).toHaveClass('bg-slate-400');
    wrapper.unmount();
  });
  
  it('should display the correct text when order status is processing', ()=> {
    wrapper = render(<OrderStatus status='processing' />);
    const statusText = wrapper.getByText('Em preparo');
    const badgeElement = wrapper.getByTestId('badge');
    
    expect(statusText).toBeInTheDocument();
    expect(badgeElement).toHaveClass('bg-amber-500');
  });

  it('should display the correct text when order status is delivering', ()=> {
    wrapper = render(<OrderStatus status='delivering' />);
    const statusText = wrapper.getByText('Em entrega');
    const badgeElement = wrapper.getByTestId('badge');
    
    expect(statusText).toBeInTheDocument();
    expect(badgeElement).toHaveClass('bg-amber-500');
  });

  it('should display the correct text when order status is delivered', ()=> {
    wrapper = render(<OrderStatus status='delivered' />);
    const statusText = wrapper.getByText('Entregue');
    const badgeElement = wrapper.getByTestId('badge');
    
    expect(statusText).toBeInTheDocument();
    expect(badgeElement).toHaveClass('bg-emerald-500');
  });

  it('should display the correct text when order status is canceled', ()=> {
    wrapper = render(<OrderStatus status='canceled' />);
    const statusText = wrapper.getByText('Cancelado');
    const badgeElement = wrapper.getByTestId('badge');
    
    expect(statusText).toBeInTheDocument();
    expect(badgeElement).toHaveClass('bg-rose-500');
  });
});