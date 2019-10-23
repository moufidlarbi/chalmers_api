### Getting Started
#Pull Docker image:
$ docker pull modev22/chalmers_api:latest

#Add environment variables file included in email

#Use Docker-Compose:
$ docker-compose up

#App will be available at this url: http://localhost:3257

### API Endpoints

##### Get all services:
GET /api/v1/services

##### Get all services in a specific city:
GET /api/v1/services/cityId

##### Get specific services (shelters, meals..) in a specific city:
GET /api/v1/services/cityId/serviceId

##### Create an error flag:
POST /api/v1/services/flagerror
payload: {serviceId: 1, errorText: 'message'}

### Running the tests

$ npm run test

✓ It should get all services

✓ It should get all services in a specific city

✓ It should get a specific service in a specific city

✓ It should create an error flag