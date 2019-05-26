
Feature: Entering the Plan Details in the telecom website
  I want to use this template for my feature file
  
  @smoke  @sanity
  
  
Scenario: Giving the Plan Details
    Given User should open the browser1
    And User should go to the telecom website1
    When User should fill all the details as per the requirements1
    |Monthly Rental|300|
    |Free Local Minutes|500|
    |Free International Minutes|600|
    |Free SMS Pack|500|
    |Local Per Minutes Charges|230|
    |International Per Minutes Charges|130|
    |SMS Per Charges|150|

    And User should click on the submit buttons1
   Then It should show the congratulations page1

  
   
