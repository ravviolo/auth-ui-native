import { render, screen, fireEvent, within } from '@testing-library/react-native';
import testRenderer from 'react-test-renderer';

import { SignUpForm } from './SignUpForm';

import type { Props } from './SignUpForm';

describe('SignUpForm', () => {
  const mockOnSubmitSignUpForm = jest.fn<Props['onSubmitSignUpForm'], [string, string]>();

  const testEmail = 'test@test.com';
  const testPassword = 'testpassword';

  const props: Props = {
    testID: 'signup-form-test-id',
    onSubmitSignUpForm: mockOnSubmitSignUpForm,
  };

  it('should render email and password inputs', () => {
    render(<SignUpForm {...props} />);

    const signupForm = screen.getByTestId('signup-form-test-id');
    const emailInput = within(signupForm).getByTestId('email-input-signup-form-test-id');
    const passwordInput = within(signupForm).getByTestId('password-input-signup-form-test-id');

    expect(emailInput).not.toBeNull();
    expect(passwordInput).not.toBeNull();
  });

  it("should render submit button with 'Sign Up' text", () => {
    render(<SignUpForm {...props} />);

    const signupForm = screen.getByTestId('signup-form-test-id');
    const submitButton = within(signupForm).getByTestId('btn-submit-signup-test-id');

    expect(submitButton).toHaveTextContent('Sign Up');
  });

  it('should submit form with non-empty input fields - run submit handler once', () => {
    render(<SignUpForm {...props} />);

    const submitButton = screen.getByTestId('btn-submit-signup-test-id');
    const emailInputField = within(
      screen.getByTestId('email-input-signup-form-test-id')
    ).getByTestId('input-field-email-test-id');
    const passwordInputField = within(
      screen.getByTestId('password-input-signup-form-test-id')
    ).getByTestId('input-field-password-test-id');

    fireEvent.changeText(emailInputField, testEmail);
    fireEvent.changeText(passwordInputField, testPassword);
    fireEvent.press(submitButton);

    expect(mockOnSubmitSignUpForm).toHaveBeenCalledTimes(1);
    expect(mockOnSubmitSignUpForm).toHaveBeenCalledWith(testEmail, testPassword);
  });

  it("shouldn't submit form with one or more empty input fields", () => {
    render(<SignUpForm {...props} />);

    const submitButton = screen.getByTestId('btn-submit-signup-test-id');

    fireEvent.press(submitButton);

    expect(mockOnSubmitSignUpForm).not.toHaveBeenCalled();

    const emailInputField = within(
      screen.getByTestId('email-input-signup-form-test-id')
    ).getByTestId('input-field-email-test-id');

    fireEvent.changeText(emailInputField, testEmail);
    fireEvent.press(submitButton);

    expect(mockOnSubmitSignUpForm).not.toHaveBeenCalled();
  });

  it('should match snapshot', () => {
    const tree = testRenderer.create(<SignUpForm {...props} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
