import mathModule from "./1_math";

// test suite
describe("Math module", () => {
  // example: authorization
  beforeAll(() => {});

  // example: clean up
  afterAll(() => {});

  // example: setup a DOM element as a render target
  beforeEach(() => {});

  // example: clearn render target
  afterEach(() => {});

  // it/test
  it("should add 1 + 2 and equal 3", () => {
    const result = mathModule.add(1, 2);

    expect(result).toBe(3);
  });

  // Exceptions
  it("should fail when trying to add anything that is not a number", () => {
    const run = () => mathModule.add("Hello World", 10);

    expect(run).toThrow();
    expect(run).toThrow("parameters must be numbers");
  });

  it("should calculate bounding box given set of points", () => {
    const points = [
      { x: 0, y: 0 },
      { x: 1, y: 1 },
      { x: 2, y: 2 },
    ];

    const boundingBox2D = mathModule.boundingBox2D(points);

    expect(boundingBox2D).toEqual({ min: { x: 0, y: 0 }, max: { x: 2, y: 2 } });
  });

  // Array's/Iterables
  it("should clamp points", () => {
    const points = [
      { x: -10, y: -10 },
      { x: 10, y: 10 },
    ];
    const clampMin = -5;
    const clampMax = 5;

    const clampedPoints = mathModule.clamp(points, clampMin, clampMax);

    expect(clampedPoints).toContainEqual({ x: -5, y: -5 });
    expect(clampedPoints).toContainEqual({ x: 5, y: 5 });
  });
});

// More about expect
// https://jestjs.io/docs/expect

// When to use unit tests
// - logic is encapsulated and no need to interact with DOM
