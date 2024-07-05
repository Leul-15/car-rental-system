# Car Rental System

## Car Rental System API Documentation

### Base URL

```
http://localhost:3000/api
```

### Authentication

- Currently, there is no authentication required for the API endpoints. Future versions may include authentication mechanisms like JWT

---

## Endpoints

### 1. Rentals

#### a. Get All Rentals

- **Endpoint**: `/rentals`
- **Method**: `GET`
- **Description**: Retrieve a list of all rentals.
- **Request Parameters**: None
- **Response**:
  ```json
  [
    {
      "id": 1,
      "car_id": "ABC123",
      "customer_id": 1,
      "customer_name": "New User",
      "rental_fee": 100.0,
      "date": "2024-07-01",
      "due_date": "2024-07-07",
      "available": true
    },
  ]
  ```

#### b. Create a Rental

- **Endpoint**: `/rentals`
- **Method**: `POST`
- **Description**: Create a new rental.
- **Request Body**:
  ```json
  {
    "car_id": "ABC123",
    "customer_id": 1,
    "customer_name": "New User",
    "rental_fee": 100.0,
    "date": "2024-07-01",
    "due_date": "2024-07-07",
    "available": true
  }
  ```
- **Response**:
  ```json
  {
    "id": 1,
    "car_id": "ABC123",
    "customer_id": 1,
    "customer_name": "New User",
    "rental_fee": 100.0,
    "date": "2024-07-01",
    "due_date": "2024-07-07",
    "available": true
  }
  ```

#### c. Update a Rental

- **Endpoint**: `/rentals/:id`
- **Method**: `PUT`
- **Description**: Update an existing rental.
- **Request Parameters**:
  - `id` (URL Parameter): The ID of the rental to be updated.
- **Request Body**:
  ```json
  {
    "car_id": "ABC123",
    "customer_id": 1,
    "customer_name": "New User",
    "rental_fee": 100.0,
    "date": "2024-07-01",
    "due_date": "2024-07-07",
    "available": true
  }
  ```
- **Response**:
  ```json
  {
    "id": 1,
    "car_id": "ABC123",
    "customer_id": 1,
    "customer_name": "New User",
    "rental_fee": 100.0,
    "date": "2024-07-01",
    "due_date": "2024-07-07",
    "available": true
  }
  ```

#### d. Delete a Rental

- **Endpoint**: `/rentals/:id`
- **Method**: `DELETE`
- **Description**: Delete an existing rental.
- **Request Parameters**:
  - `id` (URL Parameter): The ID of the rental to be deleted.
- **Response**:
  ```json
  {
    "message": "Rental deleted"
  }
  ```

---

### 2. Cars

#### a. Get All Cars

- **Endpoint**: `/cars`
- **Method**: `GET`
- **Description**: Retrieve a list of all cars.
- **Request Parameters**: None
- **Response**:
  ```json
  [
    {
      "registration_number": "ABC123",
      "make": "Toyota",
      "model": "Camry",
      "available": true
    },
    ...
  ]
  ```

#### b. Create a Car

- **Endpoint**: `/cars`
- **Method**: `POST`
- **Description**: Add a new car.
- **Request Body**:
  ```json
  {
    "registration_number": "ABC123",
    "make": "Toyota",
    "model": "Camry",
    "available": true
  }
  ```
- **Response**:
  ```json
  {
    "registration_number": "ABC123",
    "make": "Toyota",
    "model": "Camry",
    "available": true
  }
  ```

#### c. Update a Car

- **Endpoint**: `/cars/:registration_number`
- **Method**: `PUT`
- **Description**: Update an existing car's details.
- **Request Parameters**:
  - `registration_number` (URL Parameter): The registration number of the car to be updated.
- **Request Body**:
  ```json
  {
    "make": "Toyota",
    "model": "Corolla",
    "available": false
  }
  ```
- **Response**:
  ```json
  {
    "registration_number": "ABC123",
    "make": "Toyota",
    "model": "Corolla",
    "available": false
  }
  ```

#### d. Delete a Car

- **Endpoint**: `/cars/:registration_number`
- **Method**: `DELETE`
- **Description**: Remove a car from the system.
- **Request Parameters**:
  - `registration_number` (URL Parameter): The registration number of the car to be deleted.
- **Response**:
  ```json
  {
    "message": "Car deleted"
  }
  ```

---

### 3. Customers

#### a. Get All Customers

- **Endpoint**: `/customers`
- **Method**: `GET`
- **Description**: Retrieve a list of all customers.
- **Request Parameters**: None
- **Response**:
  ```json
  [
    {
      "id": 1,
      "name": "New User",
      "address": "123 Main St",
      "email": "user@example.com",
      "mobile": "1234567890"
    },
    ...
  ]
  ```

#### b. Create a Customer

- **Endpoint**: `/customers`
- **Method**: `POST`
- **Description**: Add a new customer.
- **Request Body**:
  ```json
  {
    "name": "New User",
    "address": "123 Main St",
    "email": "user@example.com",
    "mobile": "1234567890"
  }
  ```
- **Response**:
  ```json
  {
    "id": 1,
    "name": "New User",
    "address": "123 Main St",
    "email": "user@example.com",
    "mobile": "1234567890"
  }
  ```

#### c. Update a Customer

- **Endpoint**: `/customers/:id`
- **Method**: `PUT`
- **Description**: Update an existing customer's details.
- **Request Parameters**:
  - `id` (URL Parameter): The ID of the customer to be updated.
- **Request Body**:
  ```json
  {
    "name": "New User",
    "address": "345 Main St",
    "email": "user@example.com",
    "mobile": "0987654321"
  }
  ```
- **Response**:
  ```json
  {
    "id": 1,
    "name": "New User",
    "address": "345 Main St",
    "email": "user@example.com",
    "mobile": "0987654321"
  }
  ```

#### d. Delete a Customer

- **Endpoint**: `/customers/:id`
- **Method**: `DELETE`
- **Description**: Remove a customer from the system.
- **Request Parameters**:
  - `id` (URL Parameter): The ID of the customer to be deleted.
- **Response**:
  ```json
  {
    "message": "Customer deleted"
  }
  ```

---

## Error Handling

- **400 Bad Request**: The request could not be understood or was missing required parameters.
- **404 Not Found**: The requested resource could not be found.
- **500 Internal Server Error**: An error occurred on the server.

**Example Error Response**:

```json
{
  "error": "Customer not found"
}
```

---

## Example Requests and Responses

### Create a Rental

**Request**:

```http
POST /rentals
```

**Request Body**:

```json
{
  "car_id": "ABC123",
  "customer_id": 1,
  "customer_name": "New User",
  "rental_fee": 100.0,
  "date": "2024-07-01",
  "due_date": "2024-07-07",
  "available": true
}
```

**Response**:

```json
{
  "id": 1,
  "car_id": "ABC123",
  "customer_id": 1,
  "customer_name": "New User",
  "rental_fee": 100.0,
  "date": "2024-07-01",
  "due_date": "2024-07-07",
  "available": true
}
```

### Get All Cars

**Request**:

```http
GET /cars
```

**Response**:

```json
[
  {
    "registration_number": "ABC123",
    "make": "Toyota",
    "model": "Camry",
    "available": true
  }
]
```
