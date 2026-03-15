import { BasePage } from "./basePage";

export class CheckoutPage extends BasePage {
  constructor() {
    super();
      }

        get mainCartBtn() { return cy.get('[data-test="nav-cart"]') };
        get proceedToCheckoutStep1() { return cy.get('[data-test="proceed-1"]') };
        get proceedToCheckoutStep2() { return cy.get('[data-test="proceed-2"]') };
        get proceedToCheckoutStep3() { return cy.get('[data-test="proceed-3"]') };
        get paymentMethod() { return cy.get('[data-test="payment-method"]') };
        get confirmBtn() { return cy.get('[data-test="finish"]') };
        get paymentSuccessMsg() { return cy.get('[data-test="payment-success-message"]') };
        get productNameLocator() { return cy.get('[data-test="product-name"]') };
        get streetInput() { return cy.get('[data-test="street"]') };
        get cityInput() { return cy.get('[data-test="city"]') };
        get stateInput() { return cy.get('[data-test="state"]') };
        get countryInput() { return cy.get('[data-test="country"]') };
        get postalCodeInput() { return cy.get('[data-test="postal_code"]') };
    

    checkout(method, addressData){
      this.proceedToCheckoutStep1.click();
      this.proceedToCheckoutStep2.click();
      this.fillAddressIfNeeded(addressData);
      this.proceedToCheckoutStep3.click();
      this.selectPaymentMethod(method);
      this.confirmBtn.click();
    }

    selectPaymentMethod(method) {
      this.paymentMethod.select(method);
    }

    fillAddressIfNeeded(data) {
      this.streetInput.invoke('val').then(val => {
        if (!val) this.streetInput.type(data.street);
      });

      this.cityInput.invoke('val').then(val => {
        if (!val) this.cityInput.type(data.city);
      });

      this.stateInput.invoke('val').then(val => {
        if (!val) this.stateInput.type(data.state);
      });

      this.countryInput.invoke('val').then(val => {
        if (!val) this.countryInput.select(data.country);
      });

      this.postalCodeInput.invoke('val').then(val => {
        if (!val) this.postalCodeInput.type(data.postalCode);
      });
    }
}
