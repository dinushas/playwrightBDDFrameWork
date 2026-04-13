Feature: Hero CTA buttons on homepage

  Scenario: Verify hero CTA buttons are visible and working
    Given I open the homepage
    Then I should see "Speak to us" button visible
    And I should see "Take a product tour" button visible

    When I click "Speak to us" hero CTA button
    Then URL should contain "demo"

    And I click on logo on the header

    When I click "Take a product tour" button
    Then URL should contain "demo"

