### Installing
Add environment variables in './env'

Import 'app/data/chalmers.sql' into MySQL - Database name: chalmers

To install: npm install

### Getting Started
To start: npm start

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