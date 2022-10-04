import { fireEvent, render, screen } from '@testing-library/react-native';
import testRenderer from 'react-test-renderer';

import { AuthSocials } from './AuthSocials';

import type { Props } from './AuthSocials';

describe('AuthSocials', () => {
  const mockOnPressFacebook = jest.fn<Props['onPressFacebook'], []>();
  const mockOnPressGoogle = jest.fn<Props['onPressGoogle'], []>();
  const mockOnPressLinkedIn = jest.fn<Props['onPressLinkedIn'], []>();

  const props: Props = {
    onPressFacebook: mockOnPressFacebook,
    onPressGoogle: mockOnPressGoogle,
    onPressLinkedIn: mockOnPressLinkedIn,
  };

  it('should render 3 icon buttons', () => {
    render(<AuthSocials {...props} />);

    const authSocialsIcons = screen.getAllByTestId(/icon-btn-(facebook|google|linkedin)-test-id/i);

    expect(authSocialsIcons).toHaveLength(3);
  });

  it('should handle click events on Facebook icon - run handler once, not trigger other handlers', () => {
    render(<AuthSocials {...props} />);

    const facebookIconBtn = screen.getByTestId(/icon-btn-facebook-test-id/i);

    fireEvent.press(facebookIconBtn);

    expect(mockOnPressFacebook).toHaveBeenCalledTimes(1);
    expect(mockOnPressGoogle).not.toBeCalled();
    expect(mockOnPressLinkedIn).not.toBeCalled();
  });

  it('should handle click events on Google icon - run handler once, not trigger other handlers', () => {
    render(<AuthSocials {...props} />);

    const googleIconBtn = screen.getByTestId(/icon-btn-google-test-id/i);

    fireEvent.press(googleIconBtn);

    expect(mockOnPressGoogle).toHaveBeenCalledTimes(1);
    expect(mockOnPressFacebook).not.toBeCalled();
    expect(mockOnPressLinkedIn).not.toBeCalled();
  });

  it('should handle click events on LinkedIn icon - run handler once, not trigger other handlers', () => {
    render(<AuthSocials {...props} />);

    const linkedInIconBtn = screen.getByTestId(/icon-btn-linkedin-test-id/i);

    fireEvent.press(linkedInIconBtn);

    expect(mockOnPressLinkedIn).toHaveBeenCalledTimes(1);
    expect(mockOnPressFacebook).not.toBeCalled();
    expect(mockOnPressGoogle).not.toBeCalled();
  });

  it('should match snapshot', () => {
    const tree = testRenderer.create(<AuthSocials {...props} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
