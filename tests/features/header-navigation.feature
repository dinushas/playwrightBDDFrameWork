Feature: Header navigation health check

  Scenario: Verify header links are visible and working
    Given I open the homepage
    Then I should see the correct homepage URL

    When I click "Resources" link
    Then URL should contain "resources"

    When I click "Company" link
    Then URL should contain "about"

    When I click "Pricing" link
    Then URL should contain "pricing"

    When I click "Book Demo" button
    Then URL should contain "demo"

    When I click "Login" link and verify URL contains "start"


    Scenario: Verify hero CTA buttons are visible and working
    Given I open the homepage
    Then I should see "Speak to us" button visible
    And I should see "Take a product tour" button visible

    When I click "Speak to us" hero CTA button
    Then URL should contain "demo"

    And I click on logo on the header

    When I click "Take a product tour" button
    Then URL should contain "demo"



    

 
  
   
  