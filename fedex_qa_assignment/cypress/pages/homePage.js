
class homePage{

    elements = {
        radioBtn: () => cy.get('[type="radio"]'),
        editBox: () => cy.get('#query'),
        searchBtn: () => cy.get('.btn'),
        norecordfound: () => cy.contains('Not found.')
    } 
    
    /*This function selects radio button people/planet */

    selectInput(option){
        this.elements.radioBtn().check(option)
    }

    /*This function enters text in editbox */

    enterText(text){
        this.elements.editBox().type(text)
    }

    /*This function clears text in editbox */

    clearText(){
        this.elements.editBox().type('{selectall}{backspace}')
    }

    /*This function click search button */

    clickSearch(){
        this.elements.searchBtn().click({ force: true })
    }

    /*This function to hit enter key */

    hitEnter(){
        this.elements.editBox().type('{enter}')
    }

    /*This function to verify text Not Found. */

    verifyNorecordsfound(){
        this.elements.norecordfound().should('be.visible')
    }
}

module.exports = new homePage();