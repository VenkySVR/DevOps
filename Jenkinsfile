pipeline {
  agent any
  stages {
    stage('Git') {
      agent any
      steps {
        sh 'pwd'
        sh 'ls'
      }
    }

    stage('Docker build') {
      agent any
      sshagent(['ansible']) {
        sh 'ssh -o StrictHostKeyChecking=no ubuntu@192.168.55.106'
        sh 'scp /var/lib/jenkins/workspace/DevOps_main@2/* ubuntu@192.168.55.106:/home/ubuntu'
        sh 'ls'
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