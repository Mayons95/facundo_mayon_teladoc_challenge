Feature: add new user

    As a admin user
    I want to add a new user
    in order to manage them

    Scenario: Add new user
        Given The admin user is on the home page
        When The user clicks the add button
        And The user fills the requested user data
        Then The user its displayed