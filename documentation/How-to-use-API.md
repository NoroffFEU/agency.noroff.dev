# API Documentation and how to use it.
#### This documentation is subject to continuous updating. Check frequently for updates.
#### Readme file can be viewed [here](https://github.com/NoroffFEU/agency-api.noroff.dev/blob/Users-Temp-Documentation/User-Endpoint-Documentation.md) as well
#### Please see respective links below to jump strait to the endpoint you are in need of.


# User Endpoin Documentation

## Table Of Contents

1. [Register](#register)
2. [Login](#login)
3. [Get All Users](#get-all-users)
4. [Get A User](#get-user)
5. [Update A User](#update-user)
6. [Delete A User](#delete-user)

## `POST` /users <a id="register"></a>

**Request Parameters**

- Expected: Body(Object)
- Content type: application/json

**_Example Value_**

```json
{}
```

**_Model_**

    {

    }

**Responses Parameters**

- Code:
- Content type: application/json

**_Example Value_**

    data: {

    }

## `POST` /users/login <a id="login"></a>

**Request Parameters**

- Expected: Body(Object)
- Content type: application/json

**_Example Value_**

```json
{
  "email": "user@example.com",
  "password": "string"
}
```

**_Model_**

    {
    email*	    string($email)
    password*	string
                minLength: 8
    }

**Responses Parameters**

- Code: 200
- Content type: application/json

**_Example Value_**

    data: {
      userId: String,
      firstName: String,
      lastName: String,
      email: email,
      token: string,
    }

## `GET` /users <a id="get-all-users"></a>

**Request Parameters**

- Expected: Body(Object)
- Authorization Header: Token?
- Content type: application/json

**_Example Value_**

```json
{}
```

**_Model_**

    {

    }

**Responses Parameters**

- Code:
- Content type: application/json

**_Example Value_**

    data: {

    }

## `GET` /users/:id <a id="get-user"></a>

**Request Parameters**

- Expected: Body(Object)
- Authorization Header: Token?
- Content type: application/json

**_Example Value_**

```json
{}
```

**_Model_**

    {

    }

**Responses Parameters**

- Code:
- Content type: application/json

**_Example Value_**

    data: {

    }

## `PUT` /users/:id <a id="update-user"></a>

**Request Parameters**

- Expected: Body(Object)
- Authorization Header: Token
- Content type: application/json

**_Example Value_**

```json
{}
```

**_Model_**

    {

    }

**Responses Parameters**

- Code:
- Content type: application/json

**_Example Value_**

    data: {

    }

## `DELETE` /users/:id <a id="delete-user"></a>

**Request Parameters**

- Expected: Body(Object)
- Authorization Header: Token
- Content type: application/json

**_Example Value_**

```json
{}
```

**_Model_**

    {

    }

**Responses Parameters**

- Code:
- Content type: application/json

**_Example Value_**

    data: {

    }
