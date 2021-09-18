import LoginPage from "../pageobjects/login.page";
import SecurePage from "../pageobjects/secure.page";

const username = "tin_nguyen_tommy@yahoo.com";
const password = "38919299";

describe("My Login application", () => {
  it("should login with valid credentials", async () => {
    await LoginPage.open();

    await LoginPage.login(username, password);
    // await expect(SecurePage.flashAlert).toBeExisting();
    // await expect(SecurePage.flashAlert).toHaveTextContaining(
    //   "You logged into a secure area!"
    // );
  });

  after(async () => {
    // runs once after the last test in this block
    const allCookies = await browser.getCookies();
    console.log("allCookies", allCookies);
  });
});
