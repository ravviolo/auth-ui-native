import { render, screen, fireEvent } from '@testing-library/react-native';
import testRenderer from 'react-test-renderer';

import { IconButton } from './IconButton';

import type { Props } from './IconButton';

describe('IconButton', () => {
  const mockOnPress = jest.fn<Props['onPress'], []>();

  const props: Props = {
    color: 'cyan',
    icon: 'I',
    testID: 'icon-btn-test-id',
    onPress: mockOnPress,
  };

  it('should render button with specified color and icon', () => {
    render(<IconButton {...props} />);

    const iconBtn = screen.getByTestId('icon-btn-test-id');

    expect(iconBtn).toHaveTextContent('I');
    expect(iconBtn).toHaveStyle({ borderColor: 'cyan' });
    expect(iconBtn.children[0]).toHaveStyle({ color: 'cyan' });
  });

  it('should handle events - run handler once', () => {
    render(<IconButton {...props} />);

    const iconBtn = screen.getByTestId('icon-btn-test-id');

    fireEvent.press(iconBtn);

    expect(mockOnPress).toHaveBeenCalledTimes(1);
  });

  it('should match snapshot', () => {
    const tree = testRenderer.create(<IconButton {...props} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
