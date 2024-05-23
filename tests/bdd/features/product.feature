Feature: product

  Scenario: Create a product
    Given there is a created category
    When sending a request to the product creation api
    Then it should return the created product
    And the api status should be 201

  Scenario: List products
    Given there is at least one product created
    When sending a request to fetch the list of products
    Then it should return the list of products
    And the api status should be 200

  Scenario: Fetch a product
    Given there is at least one product created
    When sending a request to fetch the product
    Then it should return the product
    And the api status should be 200

  Scenario: Edit a product
    Given there is at least one product created
    When sending a request to modify the product
    Then it should return the modified product
    And the api status should be 200

  Scenario: Delete a product
    Given there is at least one product created
    When sending a request to delete the product
    Then it should successfully delete the product
    And the api status should be 200