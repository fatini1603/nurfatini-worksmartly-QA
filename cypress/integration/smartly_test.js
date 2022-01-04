/// <reference types="cypress" />
describe('WORK SMARTLY ASSESSMENT', () => {

beforeEach(function(){
    cy.visit('https://www.figma.com/proto/PJS5uZNqDxmIRJJXiwHTdx/Case-Study?node-id=1%3A2&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=10%3A7372&hide-ui=1')
    cy.get('#Username').type('nurfatini_atiqah')
    cy.get('#Password').type('Tini1222')
    cy.get('#SubmitLogin').click()
})

it('Test Case 2 - Add Employee', function() {
    cy.contains('ADD NEW EMPLOYEE').click()
    cy.get('#EmpName').type('Nafiss Radzuan')
    cy.get('#Position').type('Software Engineer')
    cy.get('#Form_workAddress').select('Kuala Lumpur').should('have.value', 'KL')
    cy.get('#Form_Role').select('Contract').should('have.value','1 Year Contract')
    cy.get('#SubmitSave').click()

})

it('Test Case 3 - Edit Employee', function() {
    cy.get('#EditIcon').click()
    cy.get('#EmpName').clear().type('Mohd Nafiss')
    cy.get('#Position').clear().type('Software Tester')
    cy.get('#Form_workAddress').select('Selangor').should('have.value', 'Selangor')
    cy.get('#Form_Role').select('Permanent').should('have.value','Permanent')
    cy.get('#UpdateBtn').click()
})

it('Test Case 4 - Add Address', function() {
    cy.contains('NEW ADDRESS').click()
    cy.get('#AddressName').type('No 5, Lorong 1')
    cy.get('#Unit_Address').type('Jalan Bagan')
    cy.get('#Street_Name').type('Test')
    cy.get('#Postcode_Add').type('02900')
    .should(value => {expect(Number.isInteger(+value)).to.eq(true)})
    cy.get('#Country_Add').type('Malawi')
    cy.get('#Submit_Save').click()
})

it('Test Case 5 - Edit Address', function() {
    cy.get('#EditAddress').click()
    cy.get('#AddressName').clear().type('No 5, Lorong 21')
    cy.get('#Unit_Address').clear().type('Jalan Haru')
    cy.get('#Street_Name').clear().type('Test')
    cy.get('#Postcode_Add').clear().type('02s00')
    .should(value => {expect(Number.isInteger(+value)).to.eq(true)})
    cy.get('#Country_Add').clear().type('Malawi')
    cy.get('#UpdateAddBtn').click()
})

it('Test Case 6 - view historical deleted employees', function() {
    cy.contains('REMOVED EMPLOYEES').click() //navigate to deleted employee page
})
})