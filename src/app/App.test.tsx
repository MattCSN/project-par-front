import { expect } from "vitest";

import { customRender } from "../tests/custom-render";

import App from "./App";

describe("App", (): void => {
  it("should render correctly and match the snapshot", async (): Promise<void> => {
    const view = await customRender(<App />);

    expect(view).toMatchSnapshot();
  });
});
