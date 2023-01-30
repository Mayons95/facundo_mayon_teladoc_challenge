Feature: Delete user

    As a admin user
    I want to add a new user
    in order to manage them

    Scenario: Delete an existant user
        Given The admin user is on the home page
        When The user clicks the delete button
        Then The user its not displayed anymore