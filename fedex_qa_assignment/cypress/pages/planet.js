
class planet{

    elements = {
        planetsinglesearchresult: () => cy.get('app-planet > .card > .card-body'),
        planetmultiplesearchresult: () => cy.get(':nth-child(1) > app-planet'),
    } 
    
    /*This function to get single unique planet search result */

    getPlanetSearchResult(){
       return(this.elements.planetsinglesearchresult()) 
    }

    /*This function to verify partial matching planet result */

    verifyPartialplanetsearchresults(){
        this.elements.planetmultiplesearchresult().parent().siblings().its('length').should('be.greaterThan',0)
    }

    /*This function to verify empty planet search list */

    verifyEmptyplanetsearchlist(){
        this.elements.planetmultiplesearchresult().should('not.exist')
    }
}

module.exports = new planet();