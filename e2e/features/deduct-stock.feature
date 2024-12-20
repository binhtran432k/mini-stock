Feature: Deduct Stock
  Scenario: Deduct Fail to Empty Stock
    Given I do not have stock "testdeductstock"
    And I am in stock page
    When I fill "testdeductstock" in "Id" field
    And I fill "5" in "Amount" field
    And I click button "Deduct"
    Then I see a alert of stock with id "testdeductstock" is not found
    And I do not see stock with id "testdeductstock" in list

  Scenario: Deduct Success to Existed Stock
    Given I have stock "testdeductstock2" with amount "4"
    And I am in stock page
    When I fill "testdeductstock2" in "Id" field
    And I fill "1" in "Amount" field
    And I click button "Deduct"
    Then I see a alert of stock with id "testdeductstock2" and amount "3"
    And I see stock with id "testdeductstock2" and amount "3" in list

  Scenario: Remove Success when Out of Stock
    Given I have stock "testdeductstock3" with amount "4"
    And I am in stock page
    When I fill "testdeductstock3" in "Id" field
    And I fill "4" in "Amount" field
    And I click button "Deduct"
    Then I see a alert of stock with id "testdeductstock3" is out of stock
    And I do not see stock with id "testdeductstock3" in list
