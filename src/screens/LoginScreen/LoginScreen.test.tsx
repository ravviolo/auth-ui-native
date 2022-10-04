/* eslint-disable no-console */
import { act, fireEvent, screen } from '@testing-library/react-native';
import { RootState } from 'store';
import { createWithProviders, renderWithProviders } from 'utils/testUtils';

import { LoginScreen } from './LoginScreen';

const mockNavigate = jest.fn();
jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({ navigate: mockNavigate }),
}));

describe('LoginScreen', () => {
  const testEmail = 'test@test.com';
  const testPassword = 'password';
  it("initially should have no user's data and hold user status as 'idle'", () => {
    const { store } = renderWithProviders(<LoginScreen />);

    expect(store.getState().user).toEqual({ userData: null, status: 'idle' });
  });

  it("after log in should save user's data, change user's status to 'complete'", async () => {
    const { store } = renderWithProviders(<LoginScreen />);

    const emailInputField = screen.getByTestId('input-field-email-test-id');
    const passwordInputField = screen.getByTestId('input-field-password-test-id');
    const loginBtn = screen.getByTestId('btn-submit-login-test-id');

    fireEvent.changeText(emailInputField, testEmail);
    fireEvent.changeText(passwordInputField, testPassword);
    await act(() => {
      fireEvent.press(loginBtn);
    });

    const userStore = store.getState().user;

    expect(userStore.status).toBe('complete');
    expect(userStore.userData?.firstname).toBe('Anakin');
    expect(userStore.userData?.lastname).toBe('Skywalker');
    expect(userStore.userData?.email).toBe(testEmail);
  });

  it("if user exist should update store with new user's data", async () => {
    const preloadedState: RootState = {
      user: {
        status: 'complete',
        userData: {
          avatarUrl: 'url',
          birthday: 'birthday',
          createdAt: 'createdAt',
          email: 'email',
          firstname: 'firstname',
          lastname: 'lastname',
          username: 'username',
          uuid: 'uuid',
        },
      },
    };

    const { store } = renderWithProviders(<LoginScreen />, { preloadedState });

    const emailInputField = screen.getByTestId('input-field-email-test-id');
    const passwordInputField = screen.getByTestId('input-field-password-test-id');
    const loginBtn = screen.getByTestId('btn-submit-login-test-id');

    fireEvent.changeText(emailInputField, testEmail);
    fireEvent.changeText(passwordInputField, testPassword);
    await act(() => {
      fireEvent.press(loginBtn);
    });

    const userStore = store.getState().user;

    expect(userStore.userData?.firstname).toBe('Anakin');
    expect(userStore.userData?.lastname).toBe('Skywalker');
    expect(userStore.userData?.email).toBe(testEmail);
  });

  it("should log 'Logging user via Google' after clicking on Google icon button", () => {
    renderWithProviders(<LoginScreen />);
    console.log = jest.fn();

    const googleIconBtn = screen.getByTestId(/icon-btn-google-test-id/i);

    fireEvent.press(googleIconBtn);

    expect(console.log).toHaveBeenCalledWith('Logging user via Google');
  });

  it("should log 'Logging user via Facebook' after clicking on Facebook icon button", () => {
    renderWithProviders(<LoginScreen />);
    console.log = jest.fn();

    const facebookIconBtn = screen.getByTestId(/icon-btn-facebook-test-id/i);

    fireEvent.press(facebookIconBtn);

    expect(console.log).toHaveBeenCalledWith('Logging user via Facebook');
  });

  it("should log 'Logging user via LinkedIn' after clicking on LinkedIn icon button", () => {
    renderWithProviders(<LoginScreen />);
    console.log = jest.fn();

    const linkedInIconBtn = screen.getByTestId(/icon-btn-linkedin-test-id/i);

    fireEvent.press(linkedInIconBtn);

    expect(console.log).toHaveBeenCalledWith('Logging user via LinkedIn');
  });

  it("should log 'Reset password' after clicking on reset password button", () => {
    renderWithProviders(<LoginScreen />);
    console.log = jest.fn();

    const resetPasswordBtn = screen.getByTestId('btn-reset-password-test-id');

    fireEvent.press(resetPasswordBtn);

    expect(console.log).toHaveBeenCalledWith('Reset password');
  });

  it('should handle page navigation', () => {
    renderWithProviders(<LoginScreen />);

    const navigateBtn = screen.getByTestId('btn-footer-test-id');

    fireEvent.press(navigateBtn);

    expect(mockNavigate).toHaveBeenCalledWith('SignUp');
  });

  it('should match snapshot', () => {
    const tree = createWithProviders(<LoginScreen />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
