## Deploy to container apps

```
RESOURCE_GROUP=aca-1
IMAGE=jeffhollan.azurecr.io/frontend:main
CONTAINERAPPS_ENVIRONMENT=myenvironment

# with Docker

docker build -t jeffhollan.azurecr.io/frontend:main .
docker push

# OR

az acr build -t frontend:main -r jeffhollan .
az containerapp create \
    --name frontend \
    --resource-group $RESOURCE_GROUP \
    --image $IMAGE \
    --environment $CONTAINERAPPS_ENVIRONMENT \
    --ingress 'external' \
    --target-port 3000
    # --registry-login-server jeffhollan.azurecr.io
    # --registry-username .. \
    # --registry-password ..

```


## Part 2

```bash
az containerapp create \
    --name frontend \
    --resource-group $RESOURCE_GROUP \
    --image $IMAGE \
    --environment $CONTAINERAPPS_ENVIRONMENT \
    --ingress 'external' \
    --target-port 3000 \
    --environment-variables BACKEND_ADDRESS='http://backend:3000',REDIS_ADDRESS='redis:6379'
```