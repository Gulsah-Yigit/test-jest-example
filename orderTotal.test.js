var orderTotal = require("./orderTotal");

it("works", () => {
  expect(1).toBe(1);
});

it("Quantity", () =>
  expect(
    orderTotal({
      items: [
        {
          name: "Dragon Candy",
          price: 2,
          quantity: 3,
        },
      ],
    })
  ).toBe(6));

it("No quantity specified", () =>
  expect(
    orderTotal({
      items: [
        {
          name: "Dragon Candy",
          price: 3,
        },
      ],
    })
  ).toBe(3));

it("Happy path (Example 1)", () =>
  expect(
    orderTotal({
      items: [
        {
          name: "Dragon Food",
          price: 8,
          quantity: 1,
        },
        {
          name: "Dragon Cage(small)",
          price: 800,
          quantity: 1,
        },
      ],
    })
  ).toBe(808));

it("Happy path (Example 2)", () =>
  expect(
    orderTotal({
      items: [
        {
          name: "Dragon Food",
          price: 20,
          quantity: 1,
        },
        {
          name: "Dragon Cage(small)",
          price: 40,
          quantity: 1,
        },
      ],
    })
  ).toBe(60));
