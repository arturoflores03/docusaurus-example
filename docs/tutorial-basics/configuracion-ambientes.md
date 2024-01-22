---
sidebar_position: 2
---

# Configuracion de ambientes

## 1 Configuración ambiente local

Antes de realizar estos pasos debes leer el `README.md` que se encuentra en la raíz del repositorio, el cual te llevará a los demás `READMEs` que son necesarios para la instalación de las diferentes herramientas.

<aside>
💡 Por lo general, los accesos al repositorio toman su tiempo en otorgarse. Por lo que te invitamos a solicitar a tu TL un .ZIP del repositorio actualizado para ir familiarizándote con el monorepo y para que puedas levantar tu ambiente en tu máquina local.

</aside>

### 0. Instalaciones

- Instalar Java 8
- Instalar NVM y NodeJS v14
- Instalar Docker

### 1. Base de datos postgresql

- `cd tools/dockers/postgresql`
- `./run.sh build`

### 2. Backend

- `cd backend-api`
- `./run.sh create_env`
- Ir a `config-local.ts` y definir `configDefault.sequelize.syncDbOnDemand = false;`
- `./run.sh install`
- `./run.sh start`

### 3. Migrations

- cd backend-migrations
- `./run.sh create_env`
- `./run.sh install`
- `./run.sh start`
- Desde otra consola, `./run.sh migrations_local up` Esto nos creará las tablas en nuestro contenedor local.

### 4. Front

- `cd frontend`
- `./run.sh create_env`
- `./run.sh install`
- `./run.sh start`

### Bonus - Errores comunes

- Si al inicializar el backend te genera un error con dynamo, haz lo siguiente:
    1. Dentro de la carpeta que estés corriendo (migración o back) crea la carpeta `.dynamodb`.
    2. Ve al `package.json` y reemplaza el comando en `dbb:install` por:

```json

"ddb:install": "curl https://s3-us-west-2.amazonaws.com/dynamodb-local/dynamodb_local_2023-02-02.tar.gz --output dynamodb.tar.gz && tar -zxf dynamodb.tar.gz --directory ./.dynamodb && rm dynamodb.tar.gz",

```

## 2 Configuración de ambiente temporal

Los ambientes temporales nos permiten contar con nuestra propia instalación en AWS, para esto debemos seguir los siguientes pasos:

1.- Crear archivos de configuracion en frontend y backend con nuestras iniciales y el prefijo dev, por ejemplo dev-lg, donde lg = Luis Gonzalez, esto en el directorio config

- backend: src/config
- frontend: src/config

2.- El contenido de los archivos de configuracion debe ser identico a config-dev, modicar las urls y cambiar donde corresponda el path asociado al ambiente, siguiendo el ejemplo deberia ser /dev-lg

3.- Modificar el archivo .env en front y back end , la key AWS_STAGE=dev-lg

4.- Para probar se debe correr ./run.sh deploy en ambos proyectos.

1. Una vez configurado tu ambiente. Debes sumar tu URL a la lista de URLs del equipo aquí: https://docs.google.com/spreadsheets/d/1kifQegNz2nd-x3V4fKob7rY2h6kaQjNTltCETCLw7yY/edit#gid=0