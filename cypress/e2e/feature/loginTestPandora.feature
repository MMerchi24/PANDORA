Feature: Login succesfull
#El Background es como el beforeEach
Background: visit the page and decline the cookies
    Given I visit "https://www.pandora.net"

Scenario: 
  Given I visit "https://www.pandora.net/"
  When I should see the logo Pandora
  And I should see the button Search Button
  Then 