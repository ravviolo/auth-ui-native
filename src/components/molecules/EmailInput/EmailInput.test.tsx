import { fireEvent, render, screen, within } from '@testing-library/react-native';
import testRenderer from 'react-test-renderer';

import { EmailInput } from './EmailInput';

import type { Props } from './EmailInput';

describe('EmailInput', () => {
  const props: Props = {
    testID: 'email-input-test-id',
  };

  it('should render input with text entry not secured', () => {
    render(<EmailInput {...props} />);

    const emailInput = screen.getByTestId('email-input-test-id');
    const emailInputField = within(emailInput).getByTestId('input-field-email-test-id');

    expect(emailInputField.props).toHaveProperty('secureTextEntry', false);
  });

  it('should render initially as empty input', () => {
    render(<EmailInput {...props} />);

    const emailInput = screen.getByTestId('email-input-test-id');
    const emailInputField = within(emailInput).getByTestId('input-field-email-test-id');

    expect(emailInputField.props.value).toBe('');
  });

  it('should handle onChangeText events', () => {
    render(<EmailInput {...props} />);

    const emailInput = screen.getByTestId('email-input-test-id');
    const emailInputField = within(emailInput).getByTestId('input-field-email-test-id');

    fireEvent.changeText(emailInputField, 'test input');

    expect(emailInputField.props.value).toBe('test input');
  });

  it("should display 'Email' label", () => {
    render(<EmailInput {...props} />);

    const emailInput = screen.getByTestId('email-input-test-id');
    const emailInputLabel = within(emailInput).getByTestId('input-label-email-test-id');

    expect(emailInputLabel).toHaveTextContent('Email');
  });

  it('should match snapshot', () => {
    const tree = testRenderer.create(<EmailInput {...props} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
