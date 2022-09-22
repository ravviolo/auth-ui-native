import { render, screen } from '@testing-library/react-native';
import testRenderer from 'react-test-renderer';
import { colors } from 'theme';

import { Flex } from './Flex';

import type { Props } from './Flex';

describe('Flex', () => {
  const props: Omit<Props, 'direction'> = {
    testID: 'flex-test-id',
    children: Array(10)
      .fill(1)
      .map((_, i) => (
        <li
          // eslint-disable-next-line react/no-array-index-key
          key={i}
        />
      )),
  };

  it('should render all children horizontally', () => {
    render(<Flex {...props} direction="row" />);

    const flexContainer = screen.getByTestId('flex-test-id');

    expect(flexContainer.children).toHaveLength(10);
    expect(flexContainer).toHaveStyle({ flexDirection: 'row' });
  });

  it('should render all children vertically', () => {
    render(<Flex {...props} direction="column" />);

    const flexContainer = screen.getByTestId('flex-test-id');

    expect(flexContainer.children).toHaveLength(10);
    expect(flexContainer).toHaveStyle({ flexDirection: 'column' });
  });

  it('should apply additional styles from props', () => {
    render(<Flex {...props} direction="column" style={{ backgroundColor: colors.primary }} />);

    const flexContainer = screen.getByTestId('flex-test-id');
    expect(flexContainer).toHaveStyle({ backgroundColor: colors.primary });
  });

  it('should match snapshot - render all children horizontally', () => {
    const tree = testRenderer.create(<Flex {...props} direction="row" />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should match snapshot - render all children vertically', () => {
    const tree = testRenderer.create(<Flex {...props} direction="column" />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should match snapshot - apply styles', () => {
    const tree = testRenderer
      .create(<Flex {...props} direction="row" style={{ backgroundColor: colors.primary }} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
