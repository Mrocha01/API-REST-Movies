# API-REST-Movies

API REST com Node.js, TypeScript e MongoDB-Mongoose, simulando um repositório de filmes contendo informações diversas, como nota e atores de relevancia.

###Para testar a API:

Altere o código do arquivo default.ts, dessa forma atualizando para os dados do seu banco de teste a variavel **Db_URI**. Para o projeto, trabalhei com o MongoDb Atlas pela praticidade e pelo conforto visual do layout,
portanto basta alterar os dados preenchendo com a sua connection string. Para o teste de rotas no postman, utilize as rotas da seguinte forma:

GET - ALL - http://localhost:5000/api/movie/all
GET - ID - http://localhost:5000/api/movie/{coloque o id desejado aqui}
POST - CREATE - http://localhost:5000/api/movie.
PATCH - UPDATE - http://localhost:5000/api/movie/update/{coloque o id desejado aqui}.
DELETE - REMOVE - http://localhost:5000/api/movie/remove/{coloque o id desejado aqui}

Para testar as rotas de .POST e .PATCH use o seguinte molde de propriedades JSON:

{
"title": "velozes e furiosos",
"rating": "6",
"description": "Filme sobre carros e lutas corporais",
"director": "Rob Cohen",
"stars": ["Vin Diesel", "Paul Walker"],
"poster": "https://img.elo7.com.br/product/original/268DDE5/big-poster-velozes-e-furiosos-lo11-tamanho-90x60-cm-geek.jpg"
}

Lembrando que para preencher a propriedade "poster" você deve fornecer uma ULR válida, já que assim especifiquei nas validações de dados.
