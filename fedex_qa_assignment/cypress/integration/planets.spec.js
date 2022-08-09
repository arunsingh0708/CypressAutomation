/// <reference types="Cypress"  />
import homePage from '../pages/homePage'
import planet from '../pages/planet'
let testdata

describe('Test suite for planet search', () =>{
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

  /*This test validate that  when user search for a valid planet, 
  hit enter key ,then user should be able to see its
  “Population”, “Climate” and “Gravity”. */

  it('TC01:Search valid planet hitting  enter',()=>{
    homePage.selectInput('planets')
    homePage.enterText(testdata.planet.name)
    homePage.hitEnter()
    planet.getPlanetSearchResult().should('be.visible')
      .and('include.text',testdata.planet.name)
      .and('include.text',testdata.planet.population)
      .and('include.text',testdata.planet.climate)
      .and('include.text',testdata.planet.gravity)
  })

  /*This test validate when user search for an invalid planet, 
  then user should be able to see “Not found” in the results. */  

  it('TC02:Search invalid planet',()=>{
    homePage.selectInput('planets')
    homePage.enterText(testdata.invalidname)
    homePage.clickSearch()
    homePage.verifyNorecordsfound()
    })
 
  /*This test validate that  when user search for a valid planet, 
  click search button ,then user should be able to see its
  “Population”, “Climate” and “Gravity”. */    

  it('TC03:Search valid planet by clicking search button',()=>{
    homePage.selectInput('planets')
    homePage.enterText(testdata.planet.name)
    homePage.clickSearch()
    planet.getPlanetSearchResult().should('be.visible')
      .and('include.text',testdata.planet.name)
      .and('include.text',testdata.planet.population)
      .and('include.text',testdata.planet.climate)
      .and('include.text',testdata.planet.gravity)
  })

  /*This test validate that multiple planet search results are displayed when user enters partial matching input */  

  it('TC04:Multiple partial search results for planets',()=>{
    homePage.selectInput('planets')
    homePage.enterText(testdata.planetpartialname)
    homePage.clickSearch()
    planet.verifyPartialplanetsearchresults()
  })

  /*This test validates When for example user has  searched for a full planet name and 
  has got results, if user switch to People and search for the same thing 
  (that has no matching people based on a partial name), you should 
  get a “Not found” in the results. */  

  it('TC05:Search a unique planet then switch to people and click search .Verify no records found', () =>{
    homePage.selectInput('planets')
    homePage.enterText(testdata.planet.name)
    homePage.clickSearch()
    planet.getPlanetSearchResult().should('be.visible')
    homePage.selectInput('people')
    homePage.clickSearch()
    homePage.verifyNorecordsfound()
  })

  /*This test validates When user search for either a character or a planet and you get one 
  or more results for it, clear the “Search form” and hit the Search button again, user should
  then get an empty result list (previous search results are removed). */

  it('TC06:On clear of input in text box empty result list should be displayed', () =>{
    homePage.selectInput('planets') 
    homePage.enterText(testdata.planetpartialname)    
    homePage.clickSearch()
    homePage.clearText()
    homePage.clickSearch()
    planet.verifyEmptyplanetsearchlist()

  })
  
})