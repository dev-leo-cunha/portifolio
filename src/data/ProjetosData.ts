import { ProjetoType } from "@/types/ProjetoType";

export const ProjetosData: ProjetoType[] = [
  {
    id: 1,
    title: "Galeria de Fotos",
    urlDeploy: "https://galeria-fotos-next.leonardocunha.dev.br/",
    urlRepo: "https://github.com/dev-leo-cunha/galeria-fotos-next",
    description: "Este é um projeto de uma galeria de fotos para treinar a utilização de componentes e suas props. Feito com o professor Bonieky Lacerda, da B7WEB.",
    img: "img/projects/galeria.jpg",
  },
  {
    id: 2,
    title: "ToDo List",
    urlDeploy: "https://todolist.leonardocunha.dev.br/",
    urlRepo: "https://github.com/dev-leo-cunha/TodoList-next",
    description: "Primeiro projeto de uma lista de tarefas feita com next",
    img: "img/projects/todo-list.jpg",
  },
  {
    id: 3,
    title: "Veiculos Star Wars",
    urlDeploy: "https://star-wars-vehicles.leonardocunha.dev.br/",
    urlRepo: "https://github.com/dev-leo-cunha/star-wars-vehicles",
    description: "Este é um projeto de um sistema que consome a api do star wars para compra de veículos.",
    img: "img/projects/veiculos.jpg",
  },
  {
    id: 4,
    title: "Sistema de Login",
    urlDeploy: "https://sistema-login.leonardocunha.dev.br/",
    urlRepo: "https://github.com/dev-leo-cunha/sistema_login_front",
    urlRepo2: "https://github.com/dev-leo-cunha/sistema_login_back",
    description: "Este é um projeto de um sistema de login. O sistema armazena os dados do novo usuário no banco de dados e também faz a autenticação do mesmo. Alem disso, o sistema tem a opção de update de dados e também a exibição de uma lista de usuários já cadastrados, com opção de ordenação.",
    img: "img/projects/sistema-login.jpg",
  },
];
