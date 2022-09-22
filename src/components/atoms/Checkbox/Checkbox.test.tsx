import { fireEvent, render, screen } from '@testing-library/react-native';
import testRenderer from 'react-test-renderer';

import { Checkbox } from './Checkbox';

import type { Props } from './Checkbox';

describe('Checkbox', () => {
  const props: Props = {
    testID: 'checkbox-test-id',
  };
  it('should initially render unchecked', () => {
    render(<Checkbox {...props} />);

    const checkbox = screen.getByTestId('checkbox-test-id');

    expect(checkbox.props.accessibilityState).toHaveProperty('checked', false);
  });

  it('should toggle checked state', () => {
    render(<Checkbox {...props} />);

    const checkbox = screen.getByTestId('checkbox-test-id');

    fireEvent.press(checkbox);
    expect(checkbox.props.accessibilityState).toHaveProperty('checked', true);

    fireEvent.press(checkbox);
    expect(checkbox.props.accessibilityState).toHaveProperty('checked', false);
  });

  it('should match snapshot', () => {
    const tree = testRenderer.create(<Checkbox {...props} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
