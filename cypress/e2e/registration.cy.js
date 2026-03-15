import { RegistrationPage } from "../support/page_object/registrationPage";
import { registrationData } from "../fixtures/registration";
import { LoginPage } from "../support/page_object/loginPage";

const regPage = new RegistrationPage();
const loginPage = new LoginPage();

describe("Registration test", () => {
    beforeEach(() => {
      regPage.open();
    });

  it("User registration", () => {
    regPage.register(registrationData);
    loginPage.forgotPassword.should("be.visible")

  });
});
