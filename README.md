# Development
Pasos para levantar la app en desarollo


* levantar la base de datos
```
docker compose up -d
```

2. Renombrar el .env.template a .env
3. Reemplazar las variables de entorno
4. Ejecutar npx prisma migrate dev --name <nombre>
5. npx prisma generate
6. Ejecutar el SEED para crear la base de datos


# Prisma commands
```
npx prisma init
npx prisma migrate dev
npx prisma generate
```




# Prod





# Stage