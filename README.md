# CV usando Ionic

Hacer un CV básico utilizando Ionic, Visual Studio Code y Android Studio

## Clonar
```bash
Git clone https://github.com/4lanPz/AM_CV-Ionic_2024A
```

## Pasos

- 1 Pre requisitos

Tener instalado Node.JS y Npm
Tener un IDE para customizar nuestro proyecto en este caso Visual Studio Code
Tener Android Studio configurado
Estos se pueden descargar desde la página web oficial de dependiendo de el OS que estes utilizando.

- 2 Empezar el proyecto

Para empezar el proyecto hay que ejecutar el siguiente comando

```bash
ionic Start nombreproyecto tabs --type=angular
```

En este nombreproyecto es el nombre que le vamos a poner a nuestro proyecto, por lo que se puede poner el
que tu quieras para tu proyecto.

En este tambien debemos elegir que módulos vamos a ocupar, en este caso vamos a ocupar "NGModules"

Al finalizar no es necesario tener una cuenta de Ionic, asi que eso podemos indicar que no y con eso nuestro
proyecto se ha creado

- 3 Navegar al directorio e instalación dependencias

Utilizando la consola CMD podemos ir a el directorio de nuestro proyecto con 
```bash
cd nombreproyecto
```

Dentro de esta carpeta tendremos que instalar los módulos necesarios para que se ejecute nuestro proyecto:

```bash
npm install
```

- 4 Customización
Ahora ya con nuestro proyecto listo para utilizarlo, abrimos la carpeta del proyecto en Visual Studio Code
entro de esta veremos que hay muchos archivos, los que nos importan son las carpetas dentro de app:

```bash
nombreproyecto/
├── node_modules/
├── src/   <----------
│   ├── app/ <----------
│   │   ├── tab1/ <----------
│   │   ├── tab2/ <----------
│   │   ├── tab3/ <----------
```

Dentro de la carpeta app encontraremos las carpetas tab1, tab2 y tab3, estos son los directorios en los cuales
están el HTML, scss y ts, estos son necesarios para poder modificar la información, funcionalidad y estilos.

Cuando entremos a cualquiera de estas podremos cambiar los datos de esta, por lo que al entrar a la primera
carpeta de tabs podemos editarla como si de un HTML se tratase pero con etiquetas de Ionic, estas se encuentran 
mejor explicadas y su funcionalidad en la página: 
```bash
https://ionicframework.com/docs/components
```
Dependiendo de lo que queramos poner en nuestro HTML también les podemos agregar estilos, los cuales se deben
agregar en el archivo con extensión .scss, que es un archivo css de estilos.

Esto se puede repetir en las demás carpetas de tabs para agregar la información en los HTML.

- 5 Ejecución
Para poder probar nuestro proyecto y ver los cambios que hemos hecho a nuestro proyecto se debe ejcutar
```bash
ionic start 
```
o 
```bash
npx ionic start 
```
ahora el programa empezará a generar nuestro proyecto para el sistema en el que estamos ejecutando, en este caso
Windows.
Para poder revisarlo en android es necesario tener un programa que pueda generar el paquete APK
En este caso Android Studio.
Para esto primero necesitaremos hacer un build para android por lo que ejecutamos:
```bash
npx ionic build android
```
Al ejecutar ese código empezará a generar los archivos necesarios para que el mismo proyecto que vimos en web se
pueda ver en Android.
Luego de tener generado el build para android se debe ejecutar el comando

```bash
npx ionic capacitor open android
```

Con esto se abrirá Android Studio y si ya tenemos un dispositivo configurado, podremos ver como se ve nuestro
proyecto en android

## Capturas
### Web
![image](https://github.com/4lanPz/AM_CV-Ionic_2024A/assets/117743495/80360dfb-3056-4dfd-8c2c-0f6c0c26620a)

![image](https://github.com/4lanPz/AM_CV-Ionic_2024A/assets/117743495/e7d8dc69-9046-4715-89f4-684a33626c11)


### Android
![image](https://github.com/4lanPz/AM_CV-Ionic_2024A/assets/117743495/fdb8a6ea-2812-456c-8910-9f9ff8a05e53)

![image](https://github.com/4lanPz/AM_CV-Ionic_2024A/assets/117743495/32b1f30d-1ba4-4666-8a1b-00e9c5f6b89f)

