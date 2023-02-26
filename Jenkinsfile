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
      steps {
        sshagent(['ansible']) {
        sh 'ssh -o StrictHostKeyChecking=no ubuntu@192.168.55.105'
        sh 'scp -r /var/lib/jenkins/workspace/DevOps_main@2/* ubuntu@192.168.55.105:/home/ubuntu'
        sh 'ssh -o StrictHostKeyChecking=no ubuntu@192.168.55.105 cd /home/ubuntu/app && sudo docker build -t venkysvr/app .'
        sh 'ssh -o StrictHostKeyChecking=no ubuntu@192.168.55.105 cd /home/ubuntu/web && sudo docker build -t venkysvr/web .'
      }
      }

    }

    stage('Docker push') {
      agent any
      steps {
        sshagent(['ansible']) {
        sh 'ssh -o StrictHostKeyChecking=no ubuntu@192.168.55.105 cd /home/ubuntu/web && sudo docker push venkysvr/web'
        sh 'ssh -o StrictHostKeyChecking=no ubuntu@192.168.55.105 cd /home/ubuntu/app && sudo docker push venkysvr/app'
      }
      }
    }

    stage('Kubernetes') {
      agent any
      steps {
        sshagent(['ansible']) {
        sh 'ssh -o StrictHostKeyChecking=no ubuntu@192.168.55.105 ls'
      }
    }

  }
}