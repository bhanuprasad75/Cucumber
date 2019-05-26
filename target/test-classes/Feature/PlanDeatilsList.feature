Feature: Entering the Plan Details in the telecom website
  I want to use this template for my feature file

 @sanity
  Scenario: Giving the Plan Details
    Given User should open the browser
    And User should go to the telecom website
    When User should fill all the details as per the requirements
    |1000|2000|3000|4000|133|123|124|
    And User should click on the submit buttons
    
    Then It should show the congratulations page
   
