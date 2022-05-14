const {Given, Then, When, Before} = require('@cucumber/cucumber');
const { Builder, Capabilities } = require("selenium-webdriver");

Given('Que le navigateur est ouvert, je cherche URL de WAP', function () {
    return browser.url('https://staging.wap.ibminteractive.fr/collaborateurs').waitForElementPresent('body', 10000);
  });

  Given('Je rentre le {string} et son mot de passe', function (string) {
    return browser.sendKeys("#email",string);
  });

  Then('Je clique sur le bouton sign in', function () {
    return browser.click('#cd_login_button');
  });

  Then('Je verifie que je suis sur le site', function () {
    return browser.waitForElementPresent(".search-query-button").pause(5000);
  });
  


