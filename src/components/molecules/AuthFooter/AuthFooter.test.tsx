import { render, screen, fireEvent, within } from '@testing-library/react-native';
import testRenderer from 'react-test-renderer';

import { AuthFooter } from './AuthFooter';

import type { Props } from './AuthFooter';

describe('AuthFooter', () => {
  const mockOnPress = jest.fn<Props['onPress'], []>();

  const props: Props = {
    btnText: 'Click me!',
    text: 'I am a footer.',
    testID: 'auth-footer-test-id',
    onPress: mockOnPress,
  };

  it('should render footer containing text and button', () => {
    render(<AuthFooter {...props} />);

    const authFooter = screen.getByTestId('auth-footer-test-id');
    expect(authFooter).toHaveTextContent('I am a footer.');

    const footerBtn = within(authFooter).getByTestId('btn-footer-test-id');
    expect(footerBtn).toHaveTextContent('Click me!');
  });

  it('should handle press events, run handler once', () => {
    render(<AuthFooter {...props} />);

    const authFooter = screen.getByTestId('auth-footer-test-id');
    const footerBtn = within(authFooter).getByTestId('btn-footer-test-id');

    fireEvent.press(footerBtn);

    expect(mockOnPress).toHaveBeenCalledTimes(1);
  });

  it('should match snapshot', () => {
    const tree = testRenderer.create(<AuthFooter {...props} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
