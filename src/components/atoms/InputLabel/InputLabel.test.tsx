import { render, screen } from '@testing-library/react-native';
import testRenderer from 'react-test-renderer';

import { InputLabel } from './InputLabel';

import type { Props } from './InputLabel';

describe('InputLabel', () => {
  const props: Props = {
    label: 'Label',
    testID: 'label-test-id',
  };

  it('should display label text received via props', () => {
    render(<InputLabel {...props} />);

    const label = screen.getByTestId('label-test-id');

    expect(label).toHaveTextContent('Label');
  });

  it('should match snapshot', () => {
    const tree = testRenderer.create(<InputLabel {...props} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
