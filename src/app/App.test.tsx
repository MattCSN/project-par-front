import { render } from "@testing-library/react";
import { expect } from "vitest";

import App from "./App";

describe("App", (): void => {
  it("should render correctly and match the snapshot", (): void => {
    const { baseElement } = render(<App />);

    expect(baseElement).toMatchSnapshot();
  });
});
