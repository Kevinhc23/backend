# PRUEBA TECNICA - BACKEND

## Descripción

Api Rest de registro de usuarios visitantes, con el fin de llevar un control de los visitantes que ingresan a una empresa. La api permite crear, editar, eliminar y listar los visitantes registrados. con la posibilidad de filtrar por nombre, apellido, documento, fecha de ingreso y fecha de salida. Para el desarrollo de la api se utilizo Nodejs, Express, SQLite3, JWT, Prisma, Typescript, Cors, crypto para la encriptación de la contraseña.

## Instalación

Para la instalación del proyecto se debe clonar el repositorio, luego instalar las dependencias con el comando:

```bash
npm install
```

## Ejecución

Para ejecutar el proyecto se debe ejecutar el comando:

```bash
npm run dev
```

## Build de typescript

Para compilar el proyecto se debe ejecutar el comando:

```bash
npm run build
```

## Variables de entorno

Para el correcto funcionamiento del proyecto se debe crear un archivo .env en la raiz del proyecto con las siguientes variables de entorno:

```bash
DATABASE_URL="file:./dev.db"
SECRET_KEY="PALABRA_SECRETA"
CORS_ORIGIN="http://localhost:5000"
```

## Endpoints

### Registro de usuario

```bash
POST http://localhost:3000/users
```

### Login de usuario

```bash
POST http://localhost:3000/auth/signin
```

### Crear usuario

```bash
POST http://localhost:3000/users
```

### Editar usuario

```bash
PUT http://localhost:3000/users/:id
```

### Eliminar usuario

```bash
DELETE http://localhost:3000/users/:id
```

### Listar visitantes

```bash
GET http://localhost:3000/visits
```

### Crear visitante

```bash
POST http://localhost:3000/visits
```

### Editar visitante

```bash
PUT http://localhost:3000/visits/:id
```

### Eliminar visitante

```bash
DELETE http://localhost:3000/visits/:id
```

## Comandos adicionales para prisma

### Generar base de datos

```bash
npx prisma db push
```

### Generar modelo

```bash
npx prisma db pull
```

### Generar migración

```bash
npx prisma migrate dev --name init
```

## License

[MIT](https://choosealicense.com/licenses/mit/)

## Autor

[Kevin Hernandez Crespo](https://www.linkedin.com/in/kevinhc23/)
