pipeline {
  agent any
  stages {
    stage('Init Project') {
        steps {
            script {
		bat 'nvm on'
                bat 'npm install'
                bat 'npm audit fix --force'
                bat 'npm start'
            }
        }
    }
    stage('Linting') {
      steps {
        script {
          bat 'npm run lint'
        }
      }
    }
    stage('Test Runner') {
      steps {
        script {
          bat 'npm test'
        }
      }
    }
    stage('End-To-End') {
      steps {
        script {
          bat 'npm run e2e'
        }
      }
    }

    stage ('Cleanup'){
      steps{
        bat 'rm -rf node_modules'
        bat 'rm -rf dist'
        bat 'rm -rf coverage'
      }
    }
  }
}
