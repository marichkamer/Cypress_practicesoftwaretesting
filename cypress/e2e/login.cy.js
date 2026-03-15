import { LoginPage } from "../support/page_object/loginPage";

const loginPage = new LoginPage();

const EMAIL = Cypress.env("EMAIL");
const PASSWORD = Cypress.env("PASSWORD");

describe("Login test", () => {

    it("Log into the system", () =>{
        loginPage.open(); 
        loginPage.login(EMAIL, PASSWORD);
        cy.get('body').should('contain.text', 'manage your profile')
    });
});