class InventoryPage {
  /* Locators */
getPHeading() {
  return cy.get('.is-size-3')
}

getTableHeading() {
  return cy.get('#product_table th')
}

getTableRows() {
  return cy.get('#product_table>tbody>tr')
}

getTableRowsByLineId(id) {
  return cy.get(`#product_table>tbody>tr:nth-child(${id + 1})>tr`)
}

getTotalAmount() {
  return cy.get('#total_amount')
}

// MODAL
getModalTitle() {
  return cy.get('#modal_title')
}

getModalAllLabel() {
  return cy.get('#name_form').find('label')
}

getQuantityInput() {
  return cy.get('#quantity')
}

getProductInput() {
  return cy.get('#product')
}

getPriceInput() {
  return cy.get('#price')
}

getModalInputByLabel(label) {
  return cy.get(`#${label.toLowerCase()}`)
}

getModalLabelByLabel(label) {
  switch (label) {
    case 'Please select the quantity':
      return cy.get('[for="product_quantity"]')
    case 'Please enter the name of the product':
      return cy.get('[for="product_name"]')
    case 'Please enter the price of the product':
      return cy.get('[for="product_price"]')
  }
}

getButtonByLabel(label) {
  switch (label) {
    case 'ADD PRODUCT':
      return cy.get('#add_product_btn')
    case 'X':
      return cy.get('.delete')
    case 'SUBMIT':
      return cy.get('#submit')
  }
}
/* Methods */

clickButtonByLabel(label) {
  this.getButtonByLabel(label).click()
}
}
module.exports = InventoryPage