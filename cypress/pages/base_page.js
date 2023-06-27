export const BaseHelper = {

    inputText(locator, value) {
        cy.get(locator).type(value);
    },

    clickButton(locator) {
        cy.get(locator).click()
    },

    assertElementIsVisible(locator) {
        cy.get(locator).should('be.visible');
    },

    assertElementTextShouldBe(locator, value) {
        cy.get(locator).should("include.text", value);
    }
}