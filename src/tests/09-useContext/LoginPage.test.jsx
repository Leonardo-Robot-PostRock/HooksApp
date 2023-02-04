import { fireEvent, render, screen } from '@testing-library/react';
import { UserContext } from '../../09-useContext/context/UserContext';
import { LoginPage } from '../../09-useContext/LoginPage';

describe('Pruebas en <LoginPage />', () => {
  const user = { id: 123, name: 'Leonardo', email: 'leonardo@example.com' };
  const setUser = jest.fn();

  test('debe de mostrar el componente sin el usuario', () => {
    render(
      <UserContext.Provider value={{ user: null }}>
        <LoginPage />
      </UserContext.Provider>
    );
    // screen.debug();

    const preUser = screen.getByLabelText('pre-user');
    expect(preUser.innerHTML).toBe('null');
  });

  test('debe de llamar el setUser cuando se hace click en el boton', () => {
    render(
      <UserContext.Provider value={{ user, setUser }}>
        <LoginPage />
      </UserContext.Provider>
    );
    const setUserButton = screen.getByRole('button');
    fireEvent.click(setUserButton);

    expect(setUser).toHaveBeenCalled();
    expect(setUser).toHaveBeenCalledWith(user);
  });
});
