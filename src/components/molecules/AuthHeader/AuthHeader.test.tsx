import { render, screen } from '@testing-library/react-native';
import testRenderer from 'react-test-renderer';

import { AuthHeader } from './AuthHeader';

import type { Props } from './AuthHeader';

describe('AuthHeader', () => {
  const props: Props = {
    testID: 'auth-header-test-id',
    title: 'Header',
  };

  it('should display heading with title text received via props', () => {
    render(<AuthHeader {...props} />);

    const authHeader = screen.getByTestId('auth-header-test-id');

    expect(authHeader.children[0]).toHaveTextContent('Header');
  });

  it('should match snapshot', () => {
    const tree = testRenderer.create(<AuthHeader {...props} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
