Feature: Title of your feature
  I want to use this template for my feature file


  Scenario: Entering the plan details
    Given User need to open the Browser
     And  User should go to the telecom home page   
    When  User need to enter all the tariff details
    |100|200|300|400|500|600|700|
    |101|201|301|401|501|601|701|
    |102|202|302|402|502|602|702|
    And   User should click on the submit button
   Then User should get the congratulations page
    
  