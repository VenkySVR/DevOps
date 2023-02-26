pipeline {
  agent any
  stages {
    stage('Git') {
      agent any
      steps {
        git(url: 'https://github.com/VenkySVR/DevOps.git', branch: 'main')
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