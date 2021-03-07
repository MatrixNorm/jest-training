import React from "react";
import renderer from "react-test-renderer";
import { App } from "./App";

describe("xxx", () => {
  it("xxx", () => {
    const app = renderer.create(<App />);
    console.log(app.toJSON());
    expect(app.toJSON().children).toEqual(["xyz"]);
  });
});
