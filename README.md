# Getting started

**Prerequisites**:

- yarn installed
- deno installed
- minikube or other docker for desktop installed

**First steps**:

- create .env file - use .env.example as a template
- yarn install
- minikube delete
- export MINIKUBE_HOME=/Volumes/SD/.minikube
- minikube start --container-runtime=docker --driver=hyperkit --vm=true --docker-opt data-root=/Volumes/SD/Docker
- eval $(minikube -p minikube docker-env)