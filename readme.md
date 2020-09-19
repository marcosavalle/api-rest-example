# API REST ejemplo

Esta aplicación es un ejemplo de una API REST hecha en NodeJs y ExpressJs

## Instalación

Ejecutar el siguiente comando por consola:

```bash
npm install
```

## Inicio

Ejecutar el siguiente comando por consola:

```bash
npm start
```

## Recursos

### Carga de usuarios

`POST /users`

Permite cargar nuevos usuarios y recibe los siguientes datos:

```javascript
{
    "name": "John",
    "surname": "Doe",
    "age": "34",
    "email": "john@doe.com"
  }
```

Devuelve como respuesta en caso de éxito:

```javascript
{
    "ok": true,
    "message": "User created",
    "user_id": "97q2115ykf8wrxf7"
}
```

En caso de no pasar correctamente las validaciones:

```javascript
{
    "ok": false,
    "message": "Bad request",
    "details": "\"email\" must be a valid email"
}
```

En caso de cargar un usuario ya existente:

```javascript
{
    "ok": false,
    "message": "User John Doe already exist!"
}
```

### Consultar lista de usuarios

`GET /users`

Devuelve la lista de todos los usuarios cargados:

```javascript
{
    "ok": true,
    "message": "Users found",
    "users": [
        {
            "id": "97q2115ykf8wrxf7",
            "name": "John",
            "surname": "Doe",
            "age": "34",
            "email": "john@doe.com"
        }
    ]
}
```

### Consultar un usuario

`GET /users/:id`

Devuelve un usuario específico:

```javascript
{
    "ok": true,
    "message": "User found",
    "user": {
        "id": "97q2115ykf8wrxf7",
        "name": "John",
        "surname": "Doe",
        "age": "34",
        "email": "john@doe.com"
    }
}
```

Devuelve en caso de no existir el usuario:

```javascript
{
    "ok": false,
    "message": "Not found"
}
```

### Modificar un usuario

`PUT /users/:id`

Permite modificar completamente un usuario específico, recibe los siguientes datos:

````javascript
{
    "name": "John",
    "surname": "Doe",
    "age": "34",
    "email": "j usuario

`DELETE /users/:id`

Elimina un usuario específico, devuelve en caso de éxito:

```javascript
{
    "ok": true,
    "message": "User deleted"
}
````

Devuelve en caso de no existir el usuario:

```javascript
{
    "ok": false,
    "message": "Not found"
}
```

Devuelve como respuesta en caso de éxito:

```javascript
{
    "ok": true,
    "message": "User created",
    "user": {
        "id": "97q2115ykf8wrxf7",
        "name": "John",
        "surname": "Doe",
        "age": "34",
        "email": "john@doe.com"
    }
}
```

En caso de no pasar correctamente las validaciones:

```javascript
{
    "ok": false,
    "message": "Bad request",
    "details": "\"email\" must be a valid email"
}
```

Devuelve en caso de no existir el usuario:

```javascript
{
    "ok": false,
    "message": "Not found"
}
```

### Modificar el email de un usuario

`PATCH /users/:id/email`

Permite modificar el email de un usuario específico, recibe los siguientes datos:

```javascript
{
    "email": "john@doe.com"
  }
```

Devuelve en caso de éxito:

```javascript
{
    "ok": true,
    "message": "User updated",
    "user": {
        "id": "97q2115ykf8wrxf7",
        "name": "John",
        "surname": "Doe",
        "age": "34",
        "email": "john@doe.com"
    }
}
```

En caso de no pasar validación:

```javascript
{
    "ok": false,
    "message": "Bad request",
    "details": "\"email\" must be a valid email"
}
```

Devuelve en caso de no existir el usuario:

```javascript
{
    "ok": false,
    "message": "Not found"
}
```

### Dar bienvenida a un usuario

`GET /users/:id/welcome`

Devuelve un mensaje personalizado al usuario:

```javascript
{
    "ok": true,
    "message": "User found",
    "welcome": "Welcome back John Doe!"
}
```

Devuelve en caso de no existir el usuario:

```javascript
{
    "ok": false,
    "message": "Not found"
}
```

### Saludar a un usuario

`GET /users/:id/goodbye`

Devuelve un mensaje personalizado al usuario:

```javascript
{
    "ok": true,
    "message": "User found",
    "goodbye": "Bye John Doe! See you later!"
}
```

Devuelve en caso de no existir el usuario:

```javascript
{
    "ok": false,
    "message": "Not found"
}
```

### Eliminar un usuario

`DELETE /users/:id`

Elimina un usuario específico, devuelve en caso de éxito:

```javascript
{
    "ok": true,
    "message": "User deleted"
}
```

Devuelve en caso de no existir el usuario:

```javascript
{
    "ok": false,
    "message": "Not found"
}
```

## License

[MIT]
