import { Ensure, equals } from "@serenity-js/assertions";
import { actorCalled } from "@serenity-js/core";
import { Navigate, isVisible } from "@serenity-js/web";
import { LoginPage } from "../serenity/web-vault/LoginPage";

/**
 * This test verifies that the web vault login page is accessible
 * and the username field is displayed.
 */
describe("Web Vault Login", () => {
  it("should display the username field on the login page", async () => {
    await actorCalled("User").attemptsTo(
      // Navigate to the base URL configured in wdio.conf.ts
      Navigate.to("/"),

      // Verify the username field is visible
      Ensure.that(LoginPage.usernameField(), isVisible()),
    );
  });
});
