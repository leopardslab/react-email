import React from "react";
import { render } from "@testing-library/react";

import Email from "./Email";

describe("Email", () => {
  test("renders the Button component", () => {
    render(
      <Email
        text="template"
        styling={{ root: { backgroundColor: "red", border: "solid 4px red" } }}
      />
    );
  });
});
