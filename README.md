# Api with docker, docker-compose and kubernets

## install docker and kubernets with minikube 

<code>
start minibuke <br>
minikube start <br>
kubectl get po -A <br>
or minikube kubectl -- get po -A <br>

docker build -t node_server . <br>
docker run -d -p 3001:3001 node_server <br>

kubectl apply -f back.deployment.yaml  <br>
kubectl get pod <br>

eval $(minikube docker-env) <br>
docker build -t node_server . <br>

minikube ssh <br>
docker images <br>

kubectl get deployment <br>
kubectl delete deployment node_server-deployment <br>
kubectl apply -f back.deployment.yaml   <br>
kubectl get pod <br>

kubectl apply -f back-service.yaml <br>
kubectl get service <br>
minikube service back-service --url <br>

kubectl apply -f envs.yaml <br>
kubectl apply -f back.deployment.yaml   <br>

minikube stop <br>
</code>