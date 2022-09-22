import { render, screen } from '@testing-library/react-native';
import testRenderer from 'react-test-renderer';

import { Heading } from './Heading';

import type { Props } from './Heading';

describe('Heading', () => {
  const props: Props = {
    testID: 'heading-test-id',
    title: 'Title',
  };

  it('should display text received via props', () => {
    render(<Heading {...props} />);

    const heading = screen.getByTestId('heading-test-id');

    expect(heading).toHaveTextContent('Title');
  });

  it('should match snapshot', () => {
    const tree = testRenderer.create(<Heading {...props} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
