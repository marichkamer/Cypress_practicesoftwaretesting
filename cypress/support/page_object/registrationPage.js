import { BasePage } from "./basePage";

export class RegistrationPage extends BasePage {

    get signInBtn() { return cy.get('[data-test="nav-sign-in"]') }
    get registerBtn() { return cy.get('[data-test="register-link"]') }
    get firstNameField() { return cy.get('[data-test="first-name"]') }
    get lastNameField() { return cy.get('[data-test="last-name"]') }
    get dateBirthField() { return cy.get('[data-test="dob"]') }
    get streetField() { return cy.get('[data-test="street"]') }
    get postalCodeField() { return cy.get('[data-test="postal_code"]') }
    get cityField() { return cy.get('[data-test="city"]') }
    get stateField() { return cy.get('[data-test="state"]') }
    get countryField() { return cy.get('[data-test="country"]') }
    get phoneField() { return cy.get('[data-test="phone"]') }
    get emailRegField() { return cy.get('[data-test="email"]') }
    get passwordRegField() { return cy.get('[data-test="password"]') }
    get regSubmitBtn() { return cy.get('[data-test="register-submit"]') }

    register(user) {
        this.signInBtn.click();
        this.registerBtn.click();

        this.firstNameField.type(user.firstName);
        this.lastNameField.type(user.lastName);
        this.dateBirthField.type(user.dateBirth);
        this.streetField.type(user.street);
        this.postalCodeField.type(user.postalCode);
        this.cityField.type(user.city);
        this.stateField.type(user.state);
        this.countryField.select(user.country);
        this.phoneField.type(user.phone);
        this.emailRegField.type(user.email);
        this.passwordRegField.type(user.password);

        this.regSubmitBtn.click();
    }
}