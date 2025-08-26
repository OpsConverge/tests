const path = require("path");
const { Pact } = require("@pact-foundation/pact");
const { Matchers } = require("@pact-foundation/pact");
const axios = require("axios");

const provider = new Pact({
  consumer: "FrontendApp",
  provider: "UserService",
  port: 1234,
  log: path.resolve(process.cwd(), "logs", "pact.log"),
  dir: path.resolve(process.cwd(), "pacts"),
});

describe("Consumer Pact Test", () => {
  beforeAll(() => provider.setup());
  afterAll(() => provider.finalize());

  describe("when a request for a user is made", () => {
    beforeAll(() =>
      provider.addInteraction({
        state: "user with id 1 exists",
        uponReceiving: "a request for user 1",
        withRequest: {
          method: "GET",
          path: "/users/1",
        },
        willRespondWith: {
          status: 200,
          headers: { "Content-Type": "application/json" },
          body: {
            id: 1,
            name: Matchers.like("Alice"),
          },
        },
      })
    );

    it("returns the expected user", async () => {
      const response = await axios.get(`${provider.mockService.baseUrl}/users/1`);
      expect(response.data).toEqual({ id: 1, name: "Alice" });
    });
  });
});
