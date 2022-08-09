/// <reference types="Cypress"  />
import homePage from '../pages/homePage'
import character from '../pages/character'
let testdata

describe('Test Suite for people search', () =>{
  beforeEach(() => {
    cy.log('I run before every test in every spec file!!!!!!')
    cy.visit(Cypress.env('url'))
    cy.fixture('testdata').then((data)=>{
      testdata = data
      return testdata
      })
    
    })
  afterEach(() => {
        cy.screenshot()
      })
   
  /*This test validate that  when user search for a valid character, 
  hit enter key ,then user should be able to see his
  / her “Gender”, “Birth year”, “Eye color” and “Skin color” */

  it('TC01:Search valid person by hitting enter key', () =>{
    homePage.selectInput('people')
    homePage.enterText(testdata.character.name)
    homePage.hitEnter()
    character.getPeopleSearchResult().should('be.visible')
      .and('include.text',testdata.character.name)
      .and('include.text',testdata.character.gender)
      .and('include.text',testdata.character.birthyear)
      .and('include.text',testdata.character.eyecolor)
      .and('include.text',testdata.character.skincolor)

  })

  /*This test validate when user search for an invalid character, 
  then user should be able to see “Not found” in the results. */

  it('TC02:Search invalid person',()=>{
    homePage.selectInput('people')
    homePage.enterText(testdata.invalidname)
    homePage.clickSearch()
    homePage.verifyNorecordsfound()
  })
   
  /*This test validate that  when user search for a valid character, 
  click search button ,then user should be able to see his
  / her “Gender”, “Birth year”, “Eye color” and “Skin color” */

  it('TC03:Search valid person by clicking search button', () =>{
    homePage.selectInput('people')
    homePage.enterText(testdata.character.name)
    homePage.clickSearch()
    character.getPeopleSearchResult().should('be.visible')
      .and('include.text',testdata.character.name)
      .and('include.text',testdata.character.gender)
      .and('include.text',testdata.character.birthyear)
      .and('include.text',testdata.character.eyecolor)
      .and('include.text',testdata.character.skincolor)
  }) 

  /*This test validate that multiple people search results are displayed when user enters partial matching input */

  it('TC04:Multiple Partial Search results for people',()=>{
    homePage.selectInput('people')
    homePage.enterText(testdata.characterpartialname)
    homePage.clickSearch()
    character.verifyPartialpeoplesearchresults()
  })

  /*This test validates When for example user has  searched for a full character name and 
  has got results, if user switch to Planet and search for the same thing 
  (that has no matching people based on a partial name), you should 
  get a “Not found” in the results. */

  it('TC05:Search a unique character then switch to planet and click search .Verify no records found', () =>{
    homePage.selectInput('people')
    homePage.enterText(testdata.character.name)
    homePage.clickSearch()
    character.getPeopleSearchResult().should('be.visible')
    homePage.selectInput('planets')
    homePage.clickSearch()
    homePage.verifyNorecordsfound()
  })

  /*This test validates When user search for either a character or a planet and you get one 
  or more results for it, clear the “Search form” and hit the Search button again, user should
  then get an empty result list (previous search results are removed). */

  it('TC06:On clear of input in text box empty result list should be displayed', () =>{
    homePage.selectInput('people') 
    homePage.enterText(testdata.characterpartialname)    
    homePage.clickSearch()
    homePage.clearText()
    homePage.clickSearch()
    character.verifyEmptypeoplesearchlist()

  })
  
})