Feature: Naviguer sur un site web
    Scenario: Site Hermes  
        Given Que je suis sur le site
        And Que je saisisse <mon_login> et mon <mot_de_passe>
        And Appuie sur le bouton Connexion
        And Dans le menu M3 je cherche le "MMS001" pour avoir le code article et appuie sur ENTRER 
        And Je rentre les valeurs TpA = <valeur1> et Code article = <valeur2> et appuie sur le bouton AFFICHER
        And Que j'appuie sur CTRL+R, et que je tappe PMS170 et je clique sur le bouton OK
        And Que je rentre dans le champ produit : je colle la valeur2 et appuie sur le bouton Suivant
        And Que je rempli les trois champs: numero programme <valeur4> , date de fin et quantite planifie <valeur3> et je verifie les informations
        And Je verifie que mon numero de programme est <valeur4>

    Examples:			
        | valeur1  |     valeur2     | valeur3   |  valeur4   | valeur5            | mon_login                 | mot_de_passe  |
        |  "B01"   | "Y3003-Y01-012" |      "55" |   "125706" | "1-Resp/Whse/Prod" | "andrea.gamba@fr.ibm.com" |  "TestAuto22$"|            
        |  "B01"   | "Y3003-Y01-012" |      "55" |   "125707" | "1-Resp/Whse/Prod" | "andrea.gamba@fr.ibm.com" |  "TestAuto22$"|       

#URL du site : 
   ### https://mingle-portal.eu1.inforcloudsuite.com/IBM1_DEM/dd01c7cd-9f46-418c-be0a-9e5612067c74?favoriteContext=%7B%22type%22%3A%22page%22%2C%22id%22%3A%229d2e4bf6-eb67-42e9-856c-15415d03c3e6%22%2C%22source%22%3A7%7D&LogicalId=lid://infor.homepages.1