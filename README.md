🚀 Como Rodar o Projeto
1. Clone o Repositório
bash
Copiar código
git clone <URL_DO_REPOSITORIO>
cd quiz-game
2. Instale as Dependências
Certifique-se de ter o Node.js instalado. Execute:

bash
Copiar código
npm install
3. Inicie o Servidor JSON
O json-server será usado para fornecer as perguntas via API simulada. Certifique-se de que o arquivo db.json está na raiz do projeto e rode:

bash
Copiar código
json-server --watch db.json --port 3001
O servidor estará disponível em http://localhost:3001/questions.

4. Inicie o Aplicativo React
Em outra aba do terminal, execute:

bash
Copiar código
npm start
O jogo estará disponível em http://localhost:3000.

✅ Requisitos Atendidos
1. Interface Web
Utilização de HTML5 e CSS3 para a base estrutural.
Estilo responsivo utilizando Bootstrap.
2. Funcionalidade com React
Componentes React:
Quiz.js: Componente principal que gerencia o estado do jogo.
Question.js: Exibe cada pergunta e suas opções de resposta.
Scoreboard.js: Mostra o progresso e a pontuação.
Props: Dados são passados entre os componentes (Question recebe as perguntas como props).
Hooks:
useState: Para gerenciar estados como pontuação, progresso e estado finalizado do quiz.
useEffect: Para buscar perguntas via HTTP no início do jogo.
Listas: Renderização dinâmica de perguntas e respostas.
Eventos: Captura de cliques nos botões de resposta e no botão "Reiniciar Quiz".
3. Usabilidade e Heurísticas de Nielsen
Visibilidade do status do sistema: Mostra progresso e pontuação em tempo real.
Controle e liberdade do usuário: O usuário pode reiniciar o quiz ao final.
Prevenção de erros: Respostas incorretas não causam interrupção no jogo; apenas são contabilizadas.
Reconhecimento em vez de memorização: As opções de resposta são exibidas claramente.
Estética e design minimalista: Interface limpa com destaque apenas para o essencial.
4. Requisições HTTP
Uso do Axios para buscar perguntas de um mock API (json-server).
5. Configuração do Ambiente com NodeJS
O ambiente foi configurado com Node.js e npm.
Dependências gerenciadas via package.json.