pipeline {
  agent any
  stages {
    stage('Build') {
        steps {
            script {
                sh 'npm install'
                sh 'ng build'
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
            steps {
              script {
                sh 'ng test'
              }
            }
        }
        stage('End-To-End tests') {
                    steps {
                      script {
                        sh 'ng e2e'
                      }
                    }
                }
      }
    }
  }
}
