const result = require("./pokemons");

it("works pokemon", () => {
  expect(1).toBe(1);
});

it("counts the pokemons", () => {
  result.then((res) => expect(res.results.length).toBe(20));
});
