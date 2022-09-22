import { fireEvent, render, screen, within } from '@testing-library/react-native';
import testRenderer from 'react-test-renderer';

import { LoginTemplate } from './LoginTemplate';

import type { Props } from './LoginTemplate';

describe('LoginTemplate', () => {
  const mockOnPressFacebook = jest.fn<Props['onPressFacebook'], []>();
  const mockOnPressGoogle = jest.fn<Props['onPressGoogle'], []>();
  const mockOnPressLinkedIn = jest.fn<Props['onPressLinkedIn'], []>();
  const mockOnSubmitLoginForm = jest.fn<Props['onSubmitLoginForm'], [string, string, boolean]>();
  const mockOnPressResetPassword = jest.fn<Props['onPressResetPassword'], []>();
  const mockOnPressFooterBtn = jest.fn<Props['onPressFooterBtn'], []>();

  const testEmail = 'test@test.com';
  const testPassword = 'testpassword';

  const props: Props = {
    testID: 'login-template-test-id',
    headerText: 'Login Header',
    footerText: 'Login Footer',
    footerBtnText: 'Click me',
    onPressFacebook: mockOnPressFacebook,
    onPressGoogle: mockOnPressGoogle,
    onPressLinkedIn: mockOnPressLinkedIn,
    onSubmitLoginForm: mockOnSubmitLoginForm,
    onPressResetPassword: mockOnPressResetPassword,
    onPressFooterBtn: mockOnPressFooterBtn,
  };

  it('should render login header with title', () => {
    render(<LoginTemplate {...props} />);

    const loginTemplate = screen.getByTestId('login-template-test-id');
    const heading = within(loginTemplate).getByTestId('auth-header-login-template-test-id');

    expect(heading).toHaveTextContent('Login Header');
  });

  it('should render login form', () => {
    render(<LoginTemplate {...props} />);

    const loginForm = screen.getByTestId('login-form-test-id');

    expect(loginForm).not.toBeNull();
  });

  it('should submit form with non-empty input fields - run submit handler once', () => {
    render(<LoginTemplate {...props} />);

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

  it("shouldn't submit form with one or more empty input fields", () => {
    render(<LoginTemplate {...props} />);

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

  it("should render a section divider with 'OR' badge", () => {
    render(<LoginTemplate {...props} />);

    const divider = screen.getByTestId('divider-login-test-id');

    expect(divider).toHaveTextContent('OR');
  });

  it('should render authenticate through socials section, should display 3 icons for Facebook, Google, LinkedIn', () => {
    render(<LoginTemplate {...props} />);

    const authSocials = screen.getByTestId('auth-socials-login-template-test-id');

    const authSocialsIcons = within(authSocials).getAllByTestId(/icon-btn-([A-Z])\w+-test-id/i);

    expect(authSocialsIcons).toHaveLength(3);

    const facebookIcon = within(authSocials).getByTestId(/icon-btn-facebook-test-id/i);
    const googleIcon = within(authSocials).getByTestId(/icon-btn-google-test-id/i);
    const linkedInIcon = within(authSocials).getByTestId(/icon-btn-linkedin-test-id/i);

    expect(facebookIcon).not.toBeNull();
    expect(googleIcon).not.toBeNull();
    expect(linkedInIcon).not.toBeNull();
  });

  it('should handle click events on Facebook icon - run handler once, not trigger other handlers', () => {
    render(<LoginTemplate {...props} />);

    const authSocials = screen.getByTestId('auth-socials-login-template-test-id');
    const facebookIconBtn = within(authSocials).getByTestId(/icon-btn-facebook-test-id/i);

    fireEvent.press(facebookIconBtn);

    expect(mockOnPressFacebook).toHaveBeenCalledTimes(1);
    expect(mockOnPressGoogle).not.toBeCalled();
    expect(mockOnPressLinkedIn).not.toBeCalled();
  });

  it('should handle click events on Google icon - run handler once, not trigger other handlers', () => {
    render(<LoginTemplate {...props} />);

    const authSocials = screen.getByTestId('auth-socials-login-template-test-id');
    const googleIconBtn = within(authSocials).getByTestId(/icon-btn-google-test-id/i);

    fireEvent.press(googleIconBtn);

    expect(mockOnPressGoogle).toHaveBeenCalledTimes(1);
    expect(mockOnPressFacebook).not.toBeCalled();
    expect(mockOnPressLinkedIn).not.toBeCalled();
  });

  it('should handle click events on LinkedIn icon - run handler once, not trigger other handlers', () => {
    render(<LoginTemplate {...props} />);

    const authSocials = screen.getByTestId('auth-socials-login-template-test-id');
    const linkedInIconBtn = within(authSocials).getByTestId(/icon-btn-linkedin-test-id/i);

    fireEvent.press(linkedInIconBtn);

    expect(mockOnPressLinkedIn).toHaveBeenCalledTimes(1);
    expect(mockOnPressFacebook).not.toBeCalled();
    expect(mockOnPressGoogle).not.toBeCalled();
  });

  it('should render login footer with text and button', () => {
    render(<LoginTemplate {...props} />);

    const footer = screen.getByTestId('auth-footer-login-template-test-id');
    const footerBtn = within(footer).getByTestId('btn-footer-test-id');

    expect(footer).toHaveTextContent('Login Footer');
    expect(footerBtn).toHaveTextContent('Click me');
  });

  it('should handle click events on footer button - run handler once', () => {
    render(<LoginTemplate {...props} />);

    const footer = screen.getByTestId('auth-footer-login-template-test-id');
    const footerBtn = within(footer).getByTestId('btn-footer-test-id');

    fireEvent.press(footerBtn);

    expect(mockOnPressFooterBtn).toHaveBeenCalledTimes(1);
  });

  it('should match snapshot', () => {
    const tree = testRenderer.create(<LoginTemplate {...props} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
