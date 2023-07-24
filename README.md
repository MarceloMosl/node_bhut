# node_bhut

Como utilizar:

Com Docker:
ao fazer o download do repositório entre na raiz do projeto e rode o seguinte comando:

docker build -t bhut_app . 

depois rode a imagem do docker:

docker run -p 4000:4000 -d bhut_app

Pronto! 

Agora basta testar a aplicação utilizando o ThundClient na rota GET http://localhost:4000/cars por exemplo.

caso não tenha o Docker, 

entre na raiz do projeto e rode os seguintes comandos:

npm i // instale todos os arquivos da node_modules

npm run build

(aguarde até que a aplicação seja transpilada) 

npm start

Pronto ja pode ultilizar a API pela URL localhost:4000

