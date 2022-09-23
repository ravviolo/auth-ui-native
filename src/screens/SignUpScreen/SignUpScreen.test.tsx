/* eslint-disable no-console */
import { act, fireEvent, screen, within } from '@testing-library/react-native';
import { RootState } from 'store';
import { createWithProviders, renderWithProviders } from 'utils/testUtils';

import { SignUpScreen } from './SignUpScreen';

const mockNavigate = jest.fn();
jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({ navigate: mockNavigate }),
}));

describe('SignUpScreen', () => {
  const testEmail = 'test@test.com';
  const testPassword = 'password';

  it("initially should have no user's data and hold user status as 'idle'", () => {
    const { store } = renderWithProviders(<SignUpScreen />);

    expect(store.getState().user).toEqual({ userData: null, status: 'idle' });
  });

  it("after sign up should save user's data, change user's status to 'complete'", async () => {
    const { store } = renderWithProviders(<SignUpScreen />);

    const template = screen.getByTestId('signup-template-test-id');
    const emailInputField = within(template).getByTestId('input-field-email-test-id');
    const passwordInputField = within(template).getByTestId('input-field-password-test-id');
    const signUpBtn = within(template).getByTestId('btn-submit-signup-test-id');

    fireEvent.changeText(emailInputField, testEmail);
    fireEvent.changeText(passwordInputField, testPassword);
    await act(() => {
      fireEvent.press(signUpBtn);
    });

    const userStore = store.getState().user;

    expect(userStore.status).toBe('complete');
    expect(userStore.userData?.firstname).toBe('Baby');
    expect(userStore.userData?.lastname).toBe('Yoda');
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

    const { store } = renderWithProviders(<SignUpScreen />, { preloadedState });

    const template = screen.getByTestId('signup-template-test-id');
    const emailInputField = within(template).getByTestId('input-field-email-test-id');
    const passwordInputField = within(template).getByTestId('input-field-password-test-id');
    const signUpBtn = within(template).getByTestId('btn-submit-signup-test-id');

    fireEvent.changeText(emailInputField, testEmail);
    fireEvent.changeText(passwordInputField, 'password');
    await act(() => {
      fireEvent.press(signUpBtn);
    });

    const userStore = store.getState().user;

    expect(userStore.userData?.firstname).toBe('Baby');
    expect(userStore.userData?.lastname).toBe('Yoda');
    expect(userStore.userData?.email).toBe(testEmail);
  });

  it("should log 'Logging user via Google' after clicking on Google icon button", () => {
    renderWithProviders(<SignUpScreen />);
    console.log = jest.fn();

    const googleIconBtn = within(
      screen.getByTestId('auth-socials-signup-template-test-id')
    ).getByTestId(/icon-btn-google-test-id/i);

    fireEvent.press(googleIconBtn);

    expect(console.log).toHaveBeenCalledWith('Registering user via Google');
  });

  it("should log 'Logging user via Facebook' after clicking on Facebook icon button", () => {
    renderWithProviders(<SignUpScreen />);
    console.log = jest.fn();

    const facebookIconBtn = within(
      screen.getByTestId('auth-socials-signup-template-test-id')
    ).getByTestId(/icon-btn-facebook-test-id/i);

    fireEvent.press(facebookIconBtn);

    expect(console.log).toHaveBeenCalledWith('Registering user via Facebook');
  });

  it("should log 'Logging user via LinkedIn' after clicking on LinkedIn icon button", () => {
    renderWithProviders(<SignUpScreen />);
    console.log = jest.fn();

    const linkedInIconBtn = within(
      screen.getByTestId('auth-socials-signup-template-test-id')
    ).getByTestId(/icon-btn-linkedin-test-id/i);

    fireEvent.press(linkedInIconBtn);

    expect(console.log).toHaveBeenCalledWith('Registering user via LinkedIn');
  });

  it('should handle page navigation', () => {
    renderWithProviders(<SignUpScreen />);

    const navigateBtn = within(
      screen.getByTestId('auth-footer-signup-template-test-id')
    ).getByTestId('btn-footer-test-id');

    fireEvent.press(navigateBtn);

    expect(mockNavigate).toHaveBeenCalledWith('Login');
  });

  it('should match snapshot', () => {
    const tree = createWithProviders(<SignUpScreen />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
