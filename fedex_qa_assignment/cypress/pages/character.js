
class character{

    elements = {
        peoplesinglesearchresult: () => cy.get('app-character > .card > .card-body'),
        
        peoplemultiplesearchresult: () => cy.get(':nth-child(1) > app-character')  
    }    

    /*This function to get single unique character search result */

    getPeopleSearchResult(){
        return(this.elements.peoplesinglesearchresult())   
    }

    /*This function to verify partial matching people result */

    verifyPartialpeoplesearchresults(){
        this.elements.peoplemultiplesearchresult().parent().siblings().its('length').should('be.greaterThan',0)
    }

    /*This function to verify empty people search list */

    verifyEmptypeoplesearchlist(){
        this.elements.peoplemultiplesearchresult().should('not.exist')
    }

}

module.exports = new character();