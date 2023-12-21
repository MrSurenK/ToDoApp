import React, { PropsWithChildren } from "react";
import { Provider } from "react-redux";
import { render } from "@testing-library/react";
import type { RenderOptions } from "@testing-library/react";

import { setupStore } from "../app/store";
import type { AppStore, RootState } from "../app/store";
import "@testing-library/jest-dom";

interface ExtendedRenderOptions extends Omit<RenderOptions, "queries"> {
  preloadedState?: Partial<RootState>;
  store?: AppStore;
}

export function renderWithProviders(
  ui: React.ReactElement,
  {
    preloadedState = {},

    store = setupStore(preloadedState),
    ...renderOptions
  }: ExtendedRenderOptions = {}
) {
  function Wrapper({ children }: PropsWithChildren<{}>): JSX.Element {
    return <Provider store={store}>{children}</Provider>;
  }
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}