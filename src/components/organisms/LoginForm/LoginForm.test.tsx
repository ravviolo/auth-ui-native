import { fireEvent, render, screen, within } from '@testing-library/react-native';
import testRenderer from 'react-test-renderer';

import { LoginForm } from './LoginForm';

import type { Props } from './LoginForm';

describe('LoginForm', () => {
  const mockOnSubmitLoginForm = jest.fn<Props['onSubmitLoginForm'], [string, string, boolean]>();
  const mockOnPressResetPassword = jest.fn<Props['onPressResetPassword'], []>();
  const testEmail = 'test@test.com';
  const testPassword = 'testpassword';

  const props: Props = {
    onPressResetPassword: mockOnPressResetPassword,
    onSubmitLoginForm: mockOnSubmitLoginForm,
  };

  it('should render email and password inputs', () => {
    render(<LoginForm {...props} />);

    const emailInput = screen.getByTestId('email-input-login-form-test-id');
    const passwordInput = screen.getByTestId('password-input-login-form-test-id');

    expect(emailInput).not.toBeNull();
    expect(passwordInput).not.toBeNull();
  });

  it("should render checkbox with 'Remember me?' label", () => {
    render(<LoginForm {...props} />);

    const checkbox = screen.getByTestId('remember-password-checkbox-test-id');
    const checkboxLabel = screen.getByTestId('input-label-remember-password-checkbox-test-id');

    expect(checkboxLabel).toHaveTextContent(/Remember me?/);
    expect(checkbox).not.toBeNull();
  });

  it('should render initially unchecked checkbox', () => {
    render(<LoginForm {...props} />);

    const checkbox = screen.getByTestId('remember-password-checkbox-test-id');

    expect(checkbox.props.accessibilityState).toHaveProperty('checked', false);
  });

  it("should render submit button with 'Login' text", () => {
    render(<LoginForm {...props} />);

    const submitButton = screen.getByTestId('btn-submit-login-test-id');

    expect(submitButton).toHaveTextContent('Login');
  });

  it('should submit form with non-empty input fields and checkbox unchecked - run submit handler once', () => {
    render(<LoginForm {...props} />);

    const submitButton = screen.getByTestId('btn-submit-login-test-id');
    const emailInputField = within(
      screen.getByTestId('email-input-login-form-test-id')
    ).getByTestId('input-field-email-test-id');
    const passwordInputField = within(
      screen.getByTestId('password-input-login-form-test-id')
    ).getByTestId('input-field-password-test-id');

    fireEvent.changeText(emailInputField, testEmail);
    fireEvent.changeText(passwordInputField, testPassword);
    fireEvent.press(submitButton);

    expect(mockOnSubmitLoginForm).toHaveBeenCalledTimes(1);
    expect(mockOnSubmitLoginForm).toHaveBeenCalledWith(testEmail, testPassword, false);
  });

  it('should submit form with non-empty input fields and checkbox checked - run submit handler once', () => {
    render(<LoginForm {...props} />);

    const submitButton = screen.getByTestId('btn-submit-login-test-id');
    const emailInputField = within(
      screen.getByTestId('email-input-login-form-test-id')
    ).getByTestId('input-field-email-test-id');
    const passwordInputField = within(
      screen.getByTestId('password-input-login-form-test-id')
    ).getByTestId('input-field-password-test-id');
    const checkbox = screen.getByTestId('remember-password-checkbox-test-id');

    fireEvent.changeText(emailInputField, testEmail);
    fireEvent.changeText(passwordInputField, testPassword);
    fireEvent.press(checkbox);
    fireEvent.press(submitButton);

    expect(mockOnSubmitLoginForm).toHaveBeenCalledTimes(1);
    expect(mockOnSubmitLoginForm).toHaveBeenCalledWith(testEmail, testPassword, true);
  });

  it("shouldn't submit form with one or more empty input fields", () => {
    render(<LoginForm {...props} />);

    const submitButton = screen.getByTestId('btn-submit-login-test-id');

    fireEvent.press(submitButton);

    expect(mockOnSubmitLoginForm).not.toHaveBeenCalled();

    const emailInputField = within(
      screen.getByTestId('email-input-login-form-test-id')
    ).getByTestId('input-field-email-test-id');

    fireEvent.changeText(emailInputField, testEmail);
    fireEvent.press(submitButton);

    expect(mockOnSubmitLoginForm).not.toHaveBeenCalled();
  });

  it("should render reset password button with 'Forgot Password?' text", () => {
    render(<LoginForm {...props} />);

    const resetPasswordButton = screen.getByTestId('btn-reset-password-test-id');

    expect(resetPasswordButton).toHaveTextContent('Forgot Password?');
  });

  it('reset password button should handle press events - run handler once', () => {
    render(<LoginForm {...props} />);

    const resetPasswordButton = screen.getByTestId('btn-reset-password-test-id');

    fireEvent.press(resetPasswordButton);

    expect(mockOnPressResetPassword).toHaveBeenCalledTimes(1);
  });

  it('should match snapshot', () => {
    const tree = testRenderer.create(<LoginForm {...props} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
