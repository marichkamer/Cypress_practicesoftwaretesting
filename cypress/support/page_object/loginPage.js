import { BasePage } from "./basePage"; 

export class LoginPage  extends BasePage {
    constructor() {
        super(); 
    }

    get sighInBtn() { return cy.get('[data-test="nav-sign-in"]') }; 
    get emailInput() { return cy.get('[data-test="email"]') };
    get passwordInput() { return cy.get('[data-test="password"]') };
    get loginSubmitBtn() { return cy.get('[data-test="login-submit"]') };
    get forgotPassword() { return cy.get('[data-test="forgot-password-link"]') };

   login(email, password) {
        this.sighInBtn.click();
        this.emailInput.type(email);
        this.passwordInput.type(password);
        this.loginSubmitBtn.click();
        cy.url().should('include', 'account');
        cy.get('[data-test="nav-contact"]').should('be.visible');
    }
}