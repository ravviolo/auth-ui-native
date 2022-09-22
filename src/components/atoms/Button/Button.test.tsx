/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { fireEvent, render, screen } from '@testing-library/react-native';
import testRenderer from 'react-test-renderer';

import { Button } from './Button';

import type { Props } from './Button';

describe('Button', () => {
  const mockOnPress = jest.fn<Props['onPress'], []>();
  const props: Props = {
    testID: 'btn-test-id',
    title: 'Test',
    onPress: mockOnPress,
  };

  it('should display text received via props', () => {
    render(<Button {...props} />);

    const btn = screen.getByTestId('btn-test-id');

    expect(btn).toHaveTextContent('Test');
  });

  it('should handle click event, fires event handler once', () => {
    render(<Button {...props} />);

    const btn = screen.getByTestId('btn-test-id');

    fireEvent.press(btn);

    expect(mockOnPress).toHaveBeenCalledTimes(1);
  });

  it('should match snapshot', () => {
    const tree = testRenderer.create(<Button {...props} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
