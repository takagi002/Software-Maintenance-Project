pipeline {
  agent any
  stages {
    stage('Build') {
        steps {
            script {
                bat 'npm install'
            }
        }
    }

    stage('Test') {
      parallel {
        stage('Static code analysis') {
          steps {
            script {
              bat 'npm run lint'
            }
          }
        }
        stage('Unit tests') {
          steps {
            script {
              bat 'ng test'
            }
          }
        }
        stage('End-To-End tests') {
          steps {
            script {
              bat 'ng e2e'
            }
          }
        }
        stage('Regression tests') {
          steps {
            script {
              bat 'ng e2e'
            }
          }
        }
      }
    }
    Stage ('Cleanup'){
      steps{

      }
    }
  }
}
