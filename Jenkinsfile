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

    stage('Ansible') {
      agent any
      steps {
        sshagent(['ansible']) {
        sh 'ssh -o StrictHostKeyChecking=no ubuntu@192.168.55.105'
        sh 'scp -r /var/lib/jenkins/workspace/DevOps_main@2/* ubuntu@192.168.55.105:/home/ubuntu'
      }
      }

    }

    stage('Docker') {
      agent any
      steps {
        sshagent(['ansible']) {
        sh 'ssh -o StrictHostKeyChecking=no ubuntu@192.168.55.105 cd /home/ubuntu/app && docker build -t venkysvr/app .'
        sh 'ssh -o StrictHostKeyChecking=no ubuntu@192.168.55.105 cd /home/ubuntu/app && docker push venkysvr/app'
        sh 'ssh -o StrictHostKeyChecking=no ubuntu@192.168.55.105 cd /home/ubuntu/web && docker build -t venkysvr/web .'
        sh 'ssh -o StrictHostKeyChecking=no ubuntu@192.168.55.105 cd /home/ubuntu/web && docker push venkysvr/web'
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
}