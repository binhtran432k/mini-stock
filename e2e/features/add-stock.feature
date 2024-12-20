Feature: Add Stock
  Scenario: Add Success to Empty Stock
    Given I do not have stock "teststock"
    And I am in stock page
    When I fill "teststock" in "Id" field
    And I fill "5" in "Amount" field
    And I click button "Add"
    Then I see a alert of stock with id "teststock" and amount "5"
    And I see stock with id "teststock" and amount "5" in list

  Scenario: Add Success to Existed Stock
    Given I have stock "teststock2" with amount "2"
    And I am in stock page
    When I fill "teststock2" in "Id" field
    And I fill "5" in "Amount" field
    And I click button "Add"
    Then I see a alert of stock with id "teststock2" and amount "7"
    And I see stock with id "teststock2" and amount "7" in list
