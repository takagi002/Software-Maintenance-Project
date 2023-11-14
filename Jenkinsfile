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
                      sh 'npm install'
                  }
              }
          }

    stage('Test') {
      parallel {
        stage('Static code analysis') {
          steps {
            script {
              sh 'npm run lint'
            }
          }
        }
        stage('Unit tests') {
            steps { }
        }
      }
    }
  }
}
