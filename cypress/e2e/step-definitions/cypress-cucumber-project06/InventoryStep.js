const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");
const InventoryPage = require('../../pages/InventoryPage')

const inventoryPage = new InventoryPage()



Given(/^the user is on "([^"]*)"$/, (url) => {
	cy.visit(url)
});


Then(/^the user should see the "([^"]*)" heading$/, (text) => {
	inventoryPage.getPHeading().should('have.text', text)
});

Then(/^the user should see the table with the headers below$/, (table) => {
	const array = table.rawTable.flat()
  inventoryPage.getTableHeading().each(($el, index) => {
cy.wrap($el).should('contain', array[index])
  })
});


Then(/^the user should see the table with the rows below$/, (table) => {
  const rowsTable = table.rawTable

  inventoryPage.getTableRows().each(($row, index) => {
    rowsTable[index].forEach((cell, i) => {
      cy.wrap($row).find('td').eq(i).should('contain', cell.trim())
    })
  })
})

Then(/^the user should see the "([^"]*)" button is enabled$/, (label) => {
  inventoryPage.getButtonByLabel(label).should('be.enabled')
})

Then(/^the user should see the "([^"]*)" text displayed$/, (text) => {
  inventoryPage.getTotalAmount().should('have.text', text)
})

When(/^the user clicks on the "([^"]*)" button$/, (label) => {
  inventoryPage.clickButtonByLabel(label)
})

Then(/^the user should see the "([^"]*)" modal with its heading$/, (title) => {
  inventoryPage.getModalTitle().should('have.text', title)
})

Then(/^the user should see the "([^"]*)" label$/, (label) => {
  inventoryPage.getModalLabelByLabel(label).should('be.visible')
})

Then(/^the user should see the "([^"]*)" input box is enabled$/, (label) => {
  inventoryPage.getModalInputByLabel(label).should('be.enabled')
})

Then(/^the user should not see the "([^"]*)" modal$/, () => {
  inventoryPage.getModalTitle().should('not.exist')
})

Then(/^the user enters the quantity as "([^"]*)"$/, (quantity) => {
  inventoryPage.getQuantityInput().type(quantity)
})

Then(/^the user enters the product as "([^"]*)"$/, (product) => {
  inventoryPage.getProductInput().type(product)
})

Then(/^the user enters the price as "([^"]*)"$/, (price) => {
  inventoryPage.getPriceInput().type(price)
})

Then(/^the user should see the table with the new row below$/, (table) => {
  const row = table.rawTable.flat()

  inventoryPage
    .getTableRows()
    .last()
    .find('td')
    .each(($el, index) => {
      cy.wrap($el).should('contain', row[index])
    })
})


