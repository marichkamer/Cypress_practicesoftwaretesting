import { BasePage } from "./basePage";

export class HomePage  extends BasePage {
    constructor() {
        super(); 
    }
    
    get languageBtn() {return cy.get('[data-test="language-select"]')} 
    get searchBtn() { return cy.get('[data-test="search-query"]') }
    get searchSubmitBtn() { return cy.get('[data-test="search-submit"]') }
    get addToCartBtn() { return cy.get('[data-test="add-to-cart"]') }
    get homeBtn() { return cy.get('[data-test="nav-home"]') }
    get mainCartBtn() { return cy.get('[data-test="nav-cart"]') }


    goHome() {
        this.homeBtn.click();
    }

    openCart() {
        this.mainCartBtn.click();
    }

    openProduct(prodName) {
        this.goHome();
        cy.get('[data-test="product-name"]').filter((_, el) => el.innerText.trim() === prodName).click();
    }

    addToCart() {
        this.addToCartBtn.click();
    }

    addProductToCart(prodName) {
        this.openProduct(prodName);
        this.addToCart();
        this.openCart();
    }
    
    changeLanguage(langCode) {
        this.languageBtn.click();
        cy.get(`[data-test="lang-${langCode}"]`).click();
    }

    searchExactProduct(productName) {
        this.searchBtn.click();
        this.searchBtn.type(productName);
        this.searchSubmitBtn.click();
    }

}
