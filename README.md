# API-Node.JS-Cars
Api desenvolvida em Node.js utilizando Mysql como banco de dados!; 
 - Listagem de carros;
 - Inserção de carros;
 - Alteração de carros;
 - Exclusão de carros;



### ⠀⭐ Api desenvolvida em Node.js utilizando Mysql como banco de dados!; 

  
### 🎯 PEGAR TODOS OS DADOS DE TODOS OS CARROS.
  
### ```GET``` 
```URL
 http://localhost:3000/api/carros
 
```
  
```JSON
{
    "error": "",
    "result": [
        {
            "codigo": 2,
            "descricao": "Honda Civic"
        },
        {
            "codigo": 3,
            "descricao": "Honda Fit"
        }
    ]
}
```
  
<br /> 

### 🎯 PEGAR TODOS OS DADOS DE UM CARRO ATRAVÉS DO ID.
  
### ```GET``` 
```URL
 http://localhost:3000/api/carro/id
 
```
  
```JSON
{
    "error": "",
    "result": {
        "id": 2,
        "modelo": "Honda Civic",
        "placa": "ELV4929"
    }
}
```
  
<br /> 

### 🎯 INSERÇÃO DOS DADOS DE UM CARRO NO BANCO DE DADOS.
  
### ```POST``` 

```URL

http://localhost:3000/api/carro

```
  
```JSON
{
    "modelo": "Honda Fit",
    "placa": "GJG3535"
}

```

<br /> 


<br/>

<a id="Dependências"></a>
## 🧪 Dependências
> Requisitos para rotar o codigo...

<br/>

## `📖 Instalação` 
  
  
 <br /> 

> Caso tenha Git basta da git clone, caso não tenha baixe o projeto completo em dowlon

```BASH
git clone https://github.com/SuzukiJhor/Node.JS-API.git
```

<br /> 

> Caso já tenha o Node em sua maquina basta instalar o projeto com npm i

```BASH
npm i 
```

<br /> 

## `📖 Scripts` 

```JSON
  "scripts": {
    "start": "nodemon ./src/server.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  }

```

<br/>

## `📖 Dependencies` 

```JSON
  "dependencies": {
    "cors": "^2.8.5",
    "dotenv": "^16.3.1",
    "express": "^4.18.2",
    "mysql2": "^3.6.3"
  }

```

<br /> 

## `📖 devDependencies` 


```JSON
 "devDependencies": {
    "nodemon": "^3.0.1"
  }

```
<br/>
