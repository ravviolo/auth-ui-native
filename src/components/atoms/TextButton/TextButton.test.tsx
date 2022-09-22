/* eslint-disable react-native/no-inline-styles */
import { render, screen, fireEvent } from '@testing-library/react-native';
import testRenderer from 'react-test-renderer';

import { TextButton } from './TextButton';

import type { Props } from './TextButton';

describe('TextButton', () => {
  const mockOnPress = jest.fn<Props['onPress'], []>();

  const props: Props = {
    title: 'Test',
    testID: 'text-btn-test-id',
    onPress: mockOnPress,
  };

  it('should render button with text received through props', () => {
    render(<TextButton {...props} />);

    const textBtn = screen.getByTestId('text-btn-test-id');

    expect(textBtn).toHaveTextContent('Test');
  });

  it('should handle events, run handler once', () => {
    render(<TextButton {...props} />);

    const textBtn = screen.getByTestId('text-btn-test-id');

    fireEvent.press(textBtn);

    expect(mockOnPress).toHaveBeenCalledTimes(1);
  });

  it('should apply additional styles received via props', () => {
    render(<TextButton {...props} style={{ textTransform: 'capitalize' }} />);

    const textBtn = screen.getByTestId('text-btn-test-id');

    expect(textBtn.children[0]).toHaveStyle({ textTransform: 'capitalize' });
  });

  it('should match snapshot', () => {
    const tree = testRenderer.create(<TextButton {...props} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
