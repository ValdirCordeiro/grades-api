# grades-api

Projeto criado no Bootcamp FullStack da IGTI - Desafio do Modulo 04 - Persistencia de dados, versionamento de código e implatação.

Criado com node.js utilizando express e mongoose.

Descrição do Desafio: 

Objetivos
Exercitar os seguintes conceitos trabalhados no módulo:
   Exercitar os conceitos trabalhados no módulo para a criação de um modelo de
    dados com o mongoose.
   Praticar os conceitos de versionamento de código e implantação pelo Heroku.
    Enunciado

Desenvolver um modelo de dados a ser utilizado na estrutura de uma API e publicar a
aplicação pelo Heroku (Front e Back).

Atividades
Os alunos deverão desempenhar as seguintes atividades:
  1. Criar uma base de dados no MongoDB Atlas e importar os dados do arquivo
  grades.csv em anexo por linha de comando.

  2. O Fron-End da aplicação está implementado e deve ser clonado do repositório
  https://github.com/brunoaugustoteixeira/grades-app.git

  3. A API desenvolvida está disponibilizada no repositório
  https://github.com/brunoaugustoteixeira/grades-api.git, entretanto, suas rotas e
  funcionalidades estão em vários branches que devem ser mergeados com o branch master. 
  Portanto, para essa atividade deve ser realizado o clone do repositório e o
  merge do branch das melhorias feature/CriaRotas.

  4. Criar um novo branch denominado ‘feature/modeloMongoose’ e implementar neste
  novo branch um modelo de dados, utilizando o mongoose para a sua API. Nesta
  mesma implementação deverá ser implementada a lógica no controller, utilizando o
  schema criado. Ao final desta implementação, o branch deve ser mergeado para o
  master.

  5. Excluir os branches de features e manter somente o branch master.

  6. Remover o controle de versão deste repositório local (basta excluir o .git). Versionar
  novamente o repositório e commitar seu projeto na sua conta do github.

  7. Publicar o Front-End disponibilizado no Heroku.

  8. Publicar o Back-End disponibilizado após a implementação das atividades 2 e 3.

  9. Ajustar os parâmetros de comunicação do Front-End com o Back-End, bem como o
  processo de deploy automático no Heroku. Os parâmetros de comunicação entre o
  front e back podem ser encontrados em http-common.js (front) e app.js (back).

Atenção aos pontos:
  — Liberação do IP do Heroku no MongoDB Atlas.
  — Configuração do host de origem e destino entre o back e front.
  — Configuração das variáveis de processo no ambiente do Heroku.
