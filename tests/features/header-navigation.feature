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

