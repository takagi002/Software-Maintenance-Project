pipeline {
  agent any
  stages {
          stage('Checkout') {
              steps {
                  checkout scm
              }
          }

          stage('Build') {
              steps {
                  script {
                      // Install Node.js dependencies and build Angular app
                      sh 'npm install'
                      sh 'npm run build'
                  }
              }
          }

    stage('Test') {
      parallel {
        stage('Static code analysis') {
            steps { sh 'npm run-script lint' }
        }
        stage('Unit tests') {
            steps { sh 'npm run-script test' }
        }
      }
    }
  }
}
