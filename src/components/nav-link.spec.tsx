import { describe, afterEach, it, expect  } from 'vitest';
import { render, type RenderResult } from '@testing-library/react';
import { NavLink } from './nav-link';
import { MemoryRouter } from 'react-router-dom';


describe('NavLink', ()=> {
  it('should hightlight the nav link when is the current page', ()=> {
    const wrapper = render(
      <>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      </>,
      {
        wrapper: ({ children }) => {
          return (
            <MemoryRouter initialEntries={['/about']}>
              { children }
            </MemoryRouter>
          )
        }
      }
    );

    const homeDataset = wrapper.getByText('Home').dataset.current;
    const aboutDataset = wrapper.getByText('About').dataset.current;

    expect(homeDataset).toEqual('false');
    expect(aboutDataset).toEqual('true');
  })
});