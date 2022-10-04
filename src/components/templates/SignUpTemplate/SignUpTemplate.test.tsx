import { fireEvent, render, screen, within } from '@testing-library/react-native';
import testRenderer from 'react-test-renderer';

import { SignUpTemplate } from './SignUpTemplate';

import type { Props } from './SignUpTemplate';

describe('SignUpTemplate', () => {
  const mockOnPressFacebook = jest.fn<Props['onPressFacebook'], []>();
  const mockOnPressGoogle = jest.fn<Props['onPressGoogle'], []>();
  const mockOnPressLinkedIn = jest.fn<Props['onPressLinkedIn'], []>();
  const mockOnSubmitSignUpForm = jest.fn<Props['onSubmitSignUpForm'], [string, string]>();
  const mockOnPressFooterBtn = jest.fn<Props['onPressFooterBtn'], []>();

  const testEmail = 'test@test.com';
  const testPassword = 'testpassword';

  const props: Props = {
    headerText: 'SignUp Header',
    footerText: 'SignUp Footer',
    footerBtnText: 'Click me',
    onPressFacebook: mockOnPressFacebook,
    onPressGoogle: mockOnPressGoogle,
    onPressLinkedIn: mockOnPressLinkedIn,
    onSubmitSignUpForm: mockOnSubmitSignUpForm,
    onPressFooterBtn: mockOnPressFooterBtn,
  };

  it('should render signup header with title', () => {
    render(<SignUpTemplate {...props} />);

    const heading = screen.getByTestId('auth-header-signup-template-test-id');

    expect(heading).toHaveTextContent('SignUp Header');
  });

  it('should submit form with non-empty input fields - run submit handler once', () => {
    render(<SignUpTemplate {...props} />);

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
    render(<SignUpTemplate {...props} />);

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

  it("should render a section divider with 'OR' badge", () => {
    render(<SignUpTemplate {...props} />);

    const divider = screen.getByTestId('divider-signup-test-id');

    expect(divider).toHaveTextContent('OR');
  });

  it('should render authenticate through socials section, should display 3 icons for Facebook, Google, LinkedIn', () => {
    render(<SignUpTemplate {...props} />);

    const authSocialsIcons = screen.getAllByTestId(/icon-btn-(facebook|google|linkedin)-test-id/i);

    expect(authSocialsIcons).toHaveLength(3);

    const facebookIcon = screen.getByTestId(/icon-btn-facebook-test-id/i);
    const googleIcon = screen.getByTestId(/icon-btn-google-test-id/i);
    const linkedInIcon = screen.getByTestId(/icon-btn-linkedin-test-id/i);

    expect(facebookIcon).not.toBeNull();
    expect(googleIcon).not.toBeNull();
    expect(linkedInIcon).not.toBeNull();
  });

  it('should handle click events on Facebook icon - run handler once, not trigger other handlers', () => {
    render(<SignUpTemplate {...props} />);

    const facebookIconBtn = screen.getByTestId(/icon-btn-facebook-test-id/i);

    fireEvent.press(facebookIconBtn);

    expect(mockOnPressFacebook).toHaveBeenCalledTimes(1);
    expect(mockOnPressGoogle).not.toBeCalled();
    expect(mockOnPressLinkedIn).not.toBeCalled();
  });

  it('should handle click events on Google icon - run handler once, not trigger other handlers', () => {
    render(<SignUpTemplate {...props} />);

    const googleIconBtn = screen.getByTestId(/icon-btn-google-test-id/i);

    fireEvent.press(googleIconBtn);

    expect(mockOnPressGoogle).toHaveBeenCalledTimes(1);
    expect(mockOnPressFacebook).not.toBeCalled();
    expect(mockOnPressLinkedIn).not.toBeCalled();
  });

  it('should handle click events on LinkedIn icon - run handler once, not trigger other handlers', () => {
    render(<SignUpTemplate {...props} />);

    const linkedInIconBtn = screen.getByTestId(/icon-btn-linkedin-test-id/i);

    fireEvent.press(linkedInIconBtn);

    expect(mockOnPressLinkedIn).toHaveBeenCalledTimes(1);
    expect(mockOnPressFacebook).not.toBeCalled();
    expect(mockOnPressGoogle).not.toBeCalled();
  });

  it('should render signup footer with text and button', () => {
    render(<SignUpTemplate {...props} />);

    const footer = screen.getByTestId('auth-footer-signup-template-test-id');
    const footerBtn = screen.getByTestId('btn-footer-test-id');

    expect(footer).toHaveTextContent('SignUp Footer');
    expect(footerBtn).toHaveTextContent('Click me');
  });

  it('should handle click events on footer button - run handler once', () => {
    render(<SignUpTemplate {...props} />);

    const footerBtn = screen.getByTestId('btn-footer-test-id');

    fireEvent.press(footerBtn);

    expect(mockOnPressFooterBtn).toHaveBeenCalledTimes(1);
  });

  it('should match snapshot', () => {
    const tree = testRenderer.create(<SignUpTemplate {...props} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
