pipeline {
     agent any

   tools {nodejs 'Nodes-JS'}

    stages {
        stage('Build') {
            steps {
                // Run Maven on a Unix agent
                sh 'chmod 777 node_modules/EdgeDriver/msedgedriver'
                sh 'chmod +x node_modules/.bin/nightwatch'
                sh 'chmod +x node_modules/geckodriver/geckodriver'
                sh 'chmod +x node_modules/chromedriver/lib/chromedriver/chromedriver'
                sh "npx nightwatch"
            }
        }
    }
}
