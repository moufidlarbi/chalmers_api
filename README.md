## Getting Started


### API Endpoints

# Get all services:
GET /api/v1/services

# Get all services in a specific city:
GET /api/v1/services/cityId

# Get specific services (shelters, meals..) in a specific city:
GET /api/v1/services/cityId/serviceId

# Create an error flag:
POST /api/v1/services/flagerror
payload: {serviceId: 1, errorText: 'message'}


### Installing


## Running the tests

Please run: npm run test

✓ It should get all services
✓ It should get all services in a specific city
✓ It should get a specific service in a specific city
✓ It should create an error flag

## Deployment

Using MySQL