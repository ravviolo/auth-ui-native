import { render, screen, within } from '@testing-library/react-native';
import testRenderer from 'react-test-renderer';

import { Divider } from './Divider';

import type { Props } from './Divider';

describe('Divider', () => {
  const props: Props = {
    testID: 'divider-test-id',
  };

  it('should render correctly without label', () => {
    render(<Divider {...props} />);

    const divider = screen.getByTestId('divider-test-id');

    expect(divider).not.toBeEmpty();

    const labelText = within(divider).queryByText('Label');

    expect(labelText).toBeNull();
  });

  it('should render correctly with label', () => {
    render(<Divider {...props} label="OR" />);

    const divider = screen.getByTestId('divider-test-id');

    expect(divider).not.toBeEmpty();

    const labelText = screen.getByText('OR');

    expect(divider).toContainElement(labelText);
  });

  it('should match snapshot without label', () => {
    const tree = testRenderer.create(<Divider {...props} />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should match snapshot with label', () => {
    const tree = testRenderer.create(<Divider {...props} label="OR" />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
