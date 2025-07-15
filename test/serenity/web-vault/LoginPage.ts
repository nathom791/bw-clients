import { PageElement, By } from "@serenity-js/web";

export class LoginPage {
  static usernameField = () =>
    PageElement.located(By.css('input[formcontrolname="email"]')).describedAs("username field");

  static passwordField = () =>
    PageElement.located(By.id("masterPassword")).describedAs("password field");

  static loginButton = () =>
    PageElement.located(By.css('button[type="submit"]')).describedAs("login button");
}
