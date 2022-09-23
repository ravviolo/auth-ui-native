import { PreloadedState } from '@reduxjs/toolkit';
import { render, RenderOptions } from '@testing-library/react-native';
import { Provider } from 'react-redux';
import testRenderer, { TestRendererOptions, ReactTestRenderer } from 'react-test-renderer';
import { AppStore, RootState, setupStore } from 'store';

interface StoreOptions {
  preloadedState?: PreloadedState<RootState>;
  store?: AppStore;
}

export const renderWithProviders = (
  ui: React.ReactElement,
  { preloadedState = {}, store = setupStore(preloadedState) }: StoreOptions = {},
  renderOptions: RenderOptions = {}
) => {
  const Wrapper = ({ children }: React.PropsWithChildren): JSX.Element => {
    return <Provider store={store}>{children}</Provider>;
  };

  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
};

export const createWithProviders = (
  ui: React.ReactElement,
  { preloadedState = {}, store = setupStore(preloadedState) }: StoreOptions = {},
  testRendererOptions?: TestRendererOptions
): ReactTestRenderer =>
  testRenderer.create(<Provider store={store}>{ui}</Provider>, testRendererOptions);
