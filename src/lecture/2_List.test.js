import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import TestRenderer from "react-test-renderer";

import List from "./2_List";

describe("A List", () => {
  let container = null;

  beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement("div");
    document.body.appendChild(container);
  });

  afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });

  /*
   When writing UI tests, tasks like rendering, user events, or data fetching
   can be considered as “units” of interaction with a user interface.
  **/
  //

  // react-dom/test-utils provides a helper called act() that makes sure all
  // updates related to these “units” have been processed and applied to the
  // DOM before you make any assertions:

  // act(() => {
  //   // render components
  // });
  // // make assertions

  // // Arrange Act Assert: pattern for arranging and formatting tests
  // // 1. Arrange all necessary preconditions and inputs.
  // // 2. Act on the object or method under test.
  // // 3. Assert that the expected results have occurred.

  it("should render custom title", () => {
    // act: wrap code rendering it and performing updates inside act(). This makes test run closer to
    // how React works in the browser.
    act(() => {
      render(<List title="My custom list" />, container);
    });

    expect(container.querySelector("h3").textContent).toBe("My custom list");
  });

  it("should render list items", () => {
    const data = ["item 1", "item 2", "item 3"];
    act(() => {
      render(<List items={data} />, container);
    });

    const items = container.querySelector("ul");

    // check all 3 items are there and in the correct order
    data.forEach((d, i) => {
      expect(items.children[i].textContent).toBe(d);
    });

    // Should only add 3 items and not a forth
    expect(items.children[3]).toBeUndefined();
  });

  // snapshot tests
  it("should render list (snapshot)", () => {
    // render the component
    let root;

    TestRenderer.act(() => {
      root = TestRenderer.create(<List title="My custom list" />);
    });

    // make assertions on root
    expect(root.toJSON()).toMatchSnapshot();

    // update with some different props
    TestRenderer.act(() => {
      root.update(<List items={["item 1", "item 2", "item 3"]} />);
    });

    // make assertions on root
    expect(root.toJSON()).toMatchSnapshot();
  });
});
