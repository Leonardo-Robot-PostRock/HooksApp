import { fireEvent, render, screen } from '@testing-library/react';
import { MultipleCustomHooks } from '../../03-examples/';
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';

jest.mock('../../hooks/useFetch.js');
jest.mock('../../hooks/useCounter.js');

describe('Pruebas en <MultipleCustomHooks />', () => {
  useFetch.mockReturnValue({
    data: null,
    isLoading: true,
    hasError: null
  });

  const mockIncrement = jest.fn();
  
  useCounter.mockReturnValue({
    counter: 1,
    increment: mockIncrement
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('debe de mostrar el componente por defecto', () => {
    render(<MultipleCustomHooks />);

    expect(screen.getByText('Loading...'));
    expect(screen.getByText('Breaking Bad Quotes'));

    const nextButton = screen.getByRole('button', { name: 'Next quote' });
    expect(nextButton.disabled).toBeTruthy();
  });

  test('debe de mostrar un Quote', () => {
    useFetch.mockReturnValue({
      data: [{ author: 'Leonardo', quote: 'Hola Mundo' }],
      isLoading: false,
      hasError: null
    });

    render(<MultipleCustomHooks />);

    expect(screen.getByText('Hola Mundo')).toBeTruthy();
    expect(screen.getByText('Leonardo')).toBeTruthy();
    const nextButton = screen.getByRole('button', { name: 'Next quote' });
    expect(nextButton.disabled).toBeFalsy();
  });

  test('debe de llamar la function incrementar', () => {
    useFetch.mockReturnValue({
      data: [{ author: 'Leonardo', quote: 'Hola Mundo' }],
      isLoading: false,
      hasError: null
    });

    render(<MultipleCustomHooks />);
    const nextButton = screen.getByRole('button', { name: 'Next quote' });
    fireEvent.click(nextButton);

    expect(mockIncrement).toHaveBeenCalled();
  });
});
