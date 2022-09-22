import { render, screen, fireEvent, within } from '@testing-library/react-native';
import testRenderer from 'react-test-renderer';

import { PasswordInput } from './PasswordInput';

import type { Props } from './PasswordInput';

describe('PasswordInput', () => {
  const props: Props = {
    testID: 'password-input-test-id',
  };

  it('should render input with text entry secured', () => {
    render(<PasswordInput {...props} />);

    const passwordInput = screen.getByTestId('password-input-test-id');
    const passwordInputField = within(passwordInput).getByTestId('input-field-password-test-id');

    expect(passwordInputField.props).toHaveProperty('secureTextEntry', true);
  });

  it('should render initially as empty input', () => {
    render(<PasswordInput {...props} />);

    const passwordInput = screen.getByTestId('password-input-test-id');
    const passwordInputField = within(passwordInput).getByTestId('input-field-password-test-id');

    expect(passwordInputField.props.value).toBe('');
  });

  it('should handle onChangeText events', () => {
    render(<PasswordInput {...props} />);

    const passwordInput = screen.getByTestId('password-input-test-id');
    const passwordInputField = within(passwordInput).getByTestId('input-field-password-test-id');

    fireEvent.changeText(passwordInputField, 'test input');

    expect(passwordInputField.props.value).toBe('test input');
  });

  it("should display 'Password' label", () => {
    render(<PasswordInput {...props} />);

    const passwordInput = screen.getByTestId('password-input-test-id');

    const passwordInputLabel = within(passwordInput).getByTestId('input-label-password-test-id');

    expect(passwordInputLabel).toHaveTextContent('Password');
  });

  it('should match snapshot', () => {
    const tree = testRenderer.create(<PasswordInput {...props} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
