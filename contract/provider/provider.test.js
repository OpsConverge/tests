const path = require("path");
const { Verifier } = require("@pact-foundation/pact");

describe("Pact Provider Verification", () => {
  it("validates expectations of the consumer", async () => {
    await new Verifier({
      providerBaseUrl: "http://localhost:4000", // your provider service
      pactUrls: [path.resolve(process.cwd(), "../consumer/pacts/frontendapp-userservice.json")],
    }).verifyProvider();
  });
});
