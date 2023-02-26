pipeline {
  agent any
  stages {
    stage('Git') {
      agent any
      steps {
        git 'https://github.com/VenkySVR/DevOps'
      }
    }

    stage('Docker build') {
      agent any
      steps {
        sh 'echo "Docker command"'
      }
    }

    stage('Docker push') {
      agent any
      steps {
        sh 'echo "Docker command"'
      }
    }

    stage('Kubernetes') {
      agent any
      steps {
        sh 'echo "Kubernetes command"'
      }
    }

  }
}