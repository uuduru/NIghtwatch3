const {Given, Then, When, Before} = require('@cucumber/cucumber');
const { Builder, By, Key, until } = require('selenium-webdriver')

         Given('Que je suis sur le site', function () {
         return browser.url('https://mingle-portal.eu1.inforcloudsuite.com/IBM1_DEM/dd01c7cd-9f46-418c-be0a-9e5612067c74?favoriteContext=%7B%22type%22%3A%22page%22%2C%22id%22%3A%229d2e4bf6-eb67-42e9-856c-15415d03c3e6%22%2C%22source%22%3A7%7D&LogicalId=lid://infor.homepages.').waitForElementPresent('body', 10000);;
         });

         Given('Que je saisisse {string} et mon {string}', function (string, string2) {
            return browser.sendKeys('#username',string).sendKeys('#pass',string2);
         });

         Given('Appuie sur le bouton Connexion', function () {
            return browser.click("button[type='submit']").pause(20000);
         });
        
         Given('Dans le menu M3 je cherche le {string} pour avoir le code article et appuie sur ENTRER', function (string) {
            //return browser.click("icon-search").shadowRoot.sendKeys("m3-menu-search","MMS001").shadowRoot;
            return browser.url("https://mingle-portal.eu1.inforcloudsuite.com/IBM1_DEM/bd13039e-19fd-43d7-82e7-1df47470691e?favoriteContext=bookmark%3FMMS001%26fieldNames%3DW1OBKV%2C%2CW2OBKV%2C%2CWFSLC2%2C%2CWTSLC2%2C%2CWFSLC3%2C%2CWTSLC3%2C%26includeStartPanel%3DTrue%26source%3DMForms%26requirePanel%3DTrue%26sortingOrder%3D2%26view%3DA02-01%26panel%3DB%26tableName%3DMITMAS%26keys%3DMMCONO%2C770%2CMMITNO%2C%2B&LogicalId=lid://infor.m3.m3");
         });        

         Given('Je rentre les valeurs TpA = {string} et Code article = {string} et appuie sur le bouton AFFICHER', function (string, 
                string2) {
            //const resultElement = browser.findElement("W2OBKV");
            //console.log('Element Id:', resultElement.getId());
            //return  browser.sendKeys("//input[@id='W1OBKV']",string);
            return browser.doubleClick("#W2OBKV").pause(5000);
         }) ;
        
         Given('Que j\'appuie sur CTRL+R, et que je tappe PMS170 et je clique sur le bouton OK', function () {
                 
         }); 
        

         Given('Que je rentre dans le champ produit : je colle la valeur2 et appuie sur le bouton Suivant', function () {
            
         });
        

         Given('Que je rempli les trois champs: numero programme {string} , date de fin et quantite planifie {string} et je verifie les informations', function (string, string2) {
            
         });
        

         Given('Je verifie que mon numero de programme est {string}', function (string) {
            
         });