import { expect } from "chai";

describe("Mobile App Test", () => {
  it("should open the app and find a menu item", async () => {
    const appMenu = await $("~App"); // Accessibility ID locator
    await appMenu.click();

    const actionBar = await $("~Action Bar");
    expect(await actionBar.isDisplayed()).to.be.true;
  });
});
