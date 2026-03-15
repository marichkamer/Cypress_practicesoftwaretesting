export class BasePage {
    constructor(path = "/") {
        this.path = path; 
    }

    open() {
        cy.visit(this.path)
    }
}