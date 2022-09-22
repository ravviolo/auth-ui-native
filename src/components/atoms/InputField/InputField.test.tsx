import { fireEvent, render, screen } from '@testing-library/react-native';
import testRenderer from 'react-test-renderer';

import { InputField } from './InputField';

import type { Props } from './InputField';

describe('InputField', () => {
  const props: Props = {
    testID: 'input-field-test-id',
    secureTextEntry: false,
  };

  it('should render initially as empty input', () => {
    render(<InputField {...props} />);

    const inputField = screen.getByTestId('input-field-test-id');

    expect(inputField.props.value).toBe('');
  });

  it('should handle onChangeText events', () => {
    render(<InputField {...props} />);

    const inputField = screen.getByTestId('input-field-test-id');

    fireEvent.changeText(inputField, 'test input');

    expect(inputField.props.value).toBe('test input');
  });

  it('should match snapshot', () => {
    const tree = testRenderer.create(<InputField {...props} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
