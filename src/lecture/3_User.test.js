import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import User from "./3_User";

describe("A User component", () => {
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

  it("should render the correct user data", async () => {
    const fakeUser = {
      name: "Jane Smith",
      age: "55",
      address: "123, Main Street",
    };

    jest
      .spyOn(global, "fetch")
      .mockImplementation(() =>
        Promise.resolve({ json: () => Promise.resolve(fakeUser) })
      );

    // Use the asynchronous version of act to apply resolved promises
    await act(async () => {
      render(<User id="123" />, container);
    });

    expect(container.querySelector("summary").textContent).toBe(fakeUser.name);
    expect(container.querySelector("strong").textContent).toBe(fakeUser.age);
    expect(container.textContent).toContain(fakeUser.address);

    // remove the mock to ensure tests are completely isolated
    global.fetch.mockRestore();
  });
});
