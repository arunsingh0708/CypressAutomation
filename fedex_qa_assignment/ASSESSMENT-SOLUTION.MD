## Setup
npm install

## Run tests
* cypress test runner(cypress open)- npm run cypress:open

* cypress headless mode to run all tests- npm run cypress:runheadless

* cypress headed mode to run all tests- npm run cypress:runheaded

* To run only people tests- npm run cypress:runpeopletests

* To run only planets test-npm run cypress:runplanettests


## Information
* Page object design pattern approach is followed to create the framework
* Tests are located in cypress/integration folder.
* people.spec.js is test suite for people search.
* planets.spec.js is test suite for planets search.
* Test data file is located in cypress/fixtures.
* Test report can be found in cypress/reports/index.html.
* Page objects can be found in cypress/pages.


## Configuration
Cypress related configuration can be found in cypress.json

## Defects
* TestCase-When user search for either a character or a planet and you get one or more results for it, clear the “Search form” and hit the Search button again, you should then get an empty result list (previous search results are removed).

    Expected behaviour- Empty result list should be displayed.

    Actual behaviour-previous search results of partial match are still displayed.
* I have automated this test. It will report as failure in test report at cypress/reports/index.html


