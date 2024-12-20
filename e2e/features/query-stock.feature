Feature: Query Stock
  Scenario: Query Fail with Empty Stock
    Given I do not have stock "testquerystock"
    And I am in stock page
    When I fill "testquerystock" in "Id" field
    And I fill "1" in "Amount" field
    And I click button "Query"
    Then I see a alert of stock with id "testquerystock" is not found
    And I do not see stock with id "testquerystock" in list

  Scenario: Deduct Success with Existed Stock
    Given I have stock "testquerystock2" with amount "4"
    And I am in stock page
    When I fill "testquerystock2" in "Id" field
    And I fill "1" in "Amount" field
    And I click button "Query"
    Then I see a alert of stock with id "testquerystock2" and amount "4"
    And I see stock with id "testquerystock2" and amount "4" in list
