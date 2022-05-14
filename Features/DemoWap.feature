Feature: Se connecter a WAP

  Scenario: Se connecter WAP
    Given Que le navigateur est ouvert, je cherche URL de WAP
    And Je rentre le <nom_utilisateur> et son mot de passe
    Then Je clique sur le bouton sign in
    And Je verifie que je suis sur le site 

    Examples:
			| nom_utilisateur 							   |
			| "fake_people_manager@yopmail.com"|
			| "fake.user@yopmail.com"				   |