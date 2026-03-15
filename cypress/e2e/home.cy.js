import { HomePage } from "../support/page_object/homePage";
import { productName } from "../fixtures/products";
import { languages } from "../fixtures/languages"; 

const homePage = new HomePage();

describe("Home page tests", () => {
    beforeEach(() => {
        homePage.open();
    });

    it('Possibility of language change', () => {
        const lang = 'es';
        homePage.changeLanguage(lang);
        cy.get('body').should('contain.text', languages[lang].expectedText);
    });

    it('Search for an exact product name', () => {
        const searchData = productName.sledgehammer;
        homePage.searchExactProduct(searchData);
        cy.get('body').should('contain.text', searchData);
    });
});