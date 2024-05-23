Feature: category

  Scenario: Create a category
    Given the system is ok
    When sending a request to the creation api
    Then it should return the created category
    And the api status should be 201

  Scenario: List categories
    Given there is at least one category created
    When sending a request to fetch the list
    Then it should return the list of categories
    And the api status should be 200

  Scenario: Fetch a category
    Given there is at least one category created
    When sending a request to fetch the category
    Then it should return the category
    And the api status should be 200

  Scenario: Edit a category
    Given there is at least one category created
    When sending a request to modify the category
    Then it should return the modified category
    And the api status should be 200

  Scenario: Delete a category
    Given there is at least one category created
    When sending a request to delete the category
    Then it should successfully delete the category
    And the api status should be 200