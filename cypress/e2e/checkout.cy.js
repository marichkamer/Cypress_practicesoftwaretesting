import { LoginPage } from "../support/page_object/loginPage";
import { HomePage } from "../support/page_object/homePage";
import { productName } from "../fixtures/products";
import { paymentMethod } from "../fixtures/paymentMethod"
import { CheckoutPage } from "../support/page_object/checkoutPage";
import { addressData } from "../fixtures/address";

const homePage = new HomePage();
const loginPage = new LoginPage();const checkoutPage = new CheckoutPage();

const EMAIL = Cypress.env("EMAIL");
const PASSWORD = Cypress.env("PASSWORD");

describe("Purchase Flow", () => {
    beforeEach(() => {
        checkoutPage.open();
    });

    it("Logged-in user completes a purchase", () => {
        loginPage.login(EMAIL, PASSWORD);
        const product = productName.pliers;
        homePage.addProductToCart(product);
        checkoutPage.checkout(paymentMethod.cash, addressData);
        checkoutPage.paymentSuccessMsg.should("be.visible");
    });
});