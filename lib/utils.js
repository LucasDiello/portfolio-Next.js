import { AiOutlineConsoleSql } from "react-icons/ai";
import { BiLogoSpringBoot } from "react-icons/bi";
import {
  FaCss3,
  FaDocker,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaJava,
  FaNodeJs,
  FaPython,
  FaReact,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import {
  SiExpress,
  SiJest,
  SiMysql,
  SiNextdotjs,
  SiRedux,
  SiTestinglibrary,
  SiTypescript,
} from "react-icons/si";
import restaurantPerfil from "../images/restaurant.png";
import ldTechPerfil from "../images/ldTech-0fb842bf.png";
import recipesPerfil from "../images/recipes.png";
import byteBuyPerfil from "../images/bytebuy.png";
import starwarsPerfil from "../images/starwars-5289bf2b.png";
import walletPerfil from "../images/trybeWallet.png";
import triviaPerfil from "../images/trivia.png";
import ldmechanicsPerfil from "../images/ldmechanics.png";
import lmDigital from "../images/lmDigital.png";
import restaurantMobile from "../assets/restaurantProject.png";
import ldTechMobile from "../assets/ldTechProject.png";
import byteBuyMobile from "../assets/bytebuyProject.png";
import starwarsMobile from "../assets/starwarsProject.png";
import lmDigitalMobile from "../assets/lmDigitalProject.png";
import ldmechanicsMobile from "../assets/ldmechanicsProject.png";
import lucasBarbaPerfil from "../images/barber1.png";
import hostPerfil from "../images/host1.png";
import hostMobile from "../assets/host1Mobile.png";

export const skills = [
  {
    id: 1,
    name: "java",
    description:
      "Java é uma linguagem de alto nível, orientada a objetos e independente de plataforma. Java é uma das linguagens de programação mais populares do mundo e é usada em uma variedade de aplicativos.",
    descriptionEn:
      "Java is a high-level, object-oriented, platform-independent language. Java is one of the most popular programming languages in the world and is used in a variety of applications.",
    path: FaJava(),
  },
  {
    id: 2,
    name: "javascript",
    description:
      "JavaScript é uma linguagem de programação que permite a você implementar itens complexos em páginas web — toda vez que uma página da web faz mais do que apenas sentar ali e exibir informações estáticas para você.",
    descriptionEn:
      "JavaScript is a programming language that allows you to implement complex items on web pages - every time a web page does more than just sit there and display static information to you.",
    path: IoLogoJavascript(),
  },
  {
    id: 3,
    name: "python",
    description:
      "Python é uma linguagem de programação que permite trabalhar rapidamente e integrar sistemas com mais eficácia. Criado por Guido van Rossum, Python é uma linguagem relativamente fácil de aprender e é conhecida por sua clareza e legibilidade.",
    descriptionEn:
      " Python is a programming language that allows you to work quickly and integrate systems more effectively. Created by Guido van Rossum, Python is a relatively easy language to learn and is known for its clarity and readability.",
    path: FaPython(),
  },
  {
    id: 4,
    name: "nodejs",
    description:
      "Node.js é uma plataforma construída sobre o motor JavaScript do Google Chrome para facilmente construir aplicações de rede rápidas e escaláveis. Node.js usa um modelo de I/O direcionada por eventos não bloqueante que o torna leve e eficiente.",
    descriptionEn:
      " Node.js is a platform built on Google Chrome's JavaScript engine for easily building fast, scalable network applications. Node.js uses a non-blocking, event-driven I/O model that makes it lightweight and efficient.",
    path: FaNodeJs(),
  },
  {
    id: 5,
    name: "typescript",
    description:
      "TypeScript é um superconjunto de JavaScript desenvolvido pela Microsoft que adiciona tipagem estática opcional à linguagem. TypeScript foi projetado para o desenvolvimento de aplicativos em larga escala e transcompila para JavaScript.",
    descriptionEn:
      " TypeScript is a superset of JavaScript developed by Microsoft that adds optional static typing to the language. TypeScript is designed for large-scale application",
    path: SiTypescript(),
  },
  {
    id: 6,
    name: "react",
    description:
      "React é uma biblioteca JavaScript para criar interfaces de usuário. É mantido pelo Facebook e por uma comunidade de empresas e indivíduos. React pode ser usado como base no desenvolvimento de aplicações de página única ou móveis.",
    descriptionEn:
      " React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of companies and individuals. React can be used as a base in the development of single-page or mobile applications.",
    path: FaReact(),
  },
  {
    id: 7,
    name: "next",
    description:
      "Next.js é um framework de desenvolvimento web front-end que permite funcionalidades como renderização do lado do servidor e geração de sites estáticos para aplicativos da web baseados em React.",
    descriptionEn:
      " Next.js is a front-end web development framework that allows features such as server-side rendering and static site generation for React-based web applications.",
    path: SiNextdotjs(),
  },
  {
    id: 8,
    name: "html",
    description:
      "HTML é a linguagem de marcação padrão para documentos projetados para serem exibidos em um navegador da web. Pode ser ajudado por tecnologias como folhas de estilo CSS e linguagens de script como JavaScript.",
    descriptionEn:
      " HTML is the standard markup language for documents designed to be displayed in a web browser. It can be aided by technologies such as CSS style sheets and script languages such as JavaScript.",
    path: FaHtml5(),
  },
  {
    id: 9,
    name: "css",
    description:
      "CSS é uma linguagem de estilo usada para descrever a apresentação de um documento escrito em HTML ou XML, incluindo cores, layout e fontes. Ele permite a adaptação do layout para diferentes tipos de dispositivos, como impressoras ou telas.",
    descriptionEn:
      " CSS is a style language used to describe the presentation of a document written in HTML or XML, including colors, layout, and fonts. It allows the layout to be adapted for different types of devices, such as printers or screens.",
    path: FaCss3(),
  },
  {
    id: 10,
    name: "tailwind",
    description:
      "Tailwind CSS é um framework CSS que permite a criação de designs personalizados sem sair do HTML. Ele fornece classes utilitárias para ajudar a criar designs complexos de maneira rápida e fácil.",
    descriptionEn:
      " Tailwind CSS is a CSS framework that allows you to create custom designs without leaving HTML. It provides utility classes to help create complex designs quickly and easily.",
    path: RiTailwindCssFill(),
  },
  {
    id: 11,
    name: "redux",
    description:
      "Redux é uma biblioteca de gerenciamento de estado para aplicativos JavaScript. Ele ajuda a escrever aplicativos que se comportam consistentemente, executados em diferentes ambientes (cliente, servidor e nativo) e são fáceis de testar.",
    descriptionEn:
      " Redux is a state management library for JavaScript applications. It helps write applications that behave consistently, run in different environments (client, server, and native), and are easy to test.",
    path: SiRedux(),
  },
  {
    id: 12,
    name: "rtl",
    description:
      "RTL é uma biblioteca de testes para React que permite testar componentes de forma isolada, simulando interações do usuário e verificando o resultado.",
    descriptionEn:
      " RTL is a testing library for React that allows you to test components in isolation, simulating user interactions and checking the result.",
    path: SiTestinglibrary(),
  },
  {
    id: 13,
    name: "sql",
    description:
      "SQL é uma linguagem de programação usada para se comunicar com bancos de dados. Ele fornece uma maneira de manipular e consultar dados armazenados em um banco de dados relacional.",
    descriptionEn:
      " SQL is a programming language used to communicate with databases. It provides a way to manipulate and query data stored in a relational database.",
    path: AiOutlineConsoleSql(),
  },
  {
    id: 14,
    name: "express",
    description:
      "Express é um framework de aplicativo da web para Node.js. Ele é projetado para criar aplicativos da web e APIs.",
    descriptionEn:
      " Express is a web application framework for Node.js. It is designed to create web applications and APIs.",
    path: SiExpress(),
  },
  {
    id: 15,
    name: "docker",
    description:
      "Docker é uma plataforma de código aberto para desenvolver, enviar e executar aplicativos. Ele permite que você separe seus aplicativos de sua infraestrutura para que você possa entregar software rapidamente.",
    descriptionEn:
      " Docker is an open-source platform for developing, shipping, and running applications. It allows you to separate your applications from your infrastructure so you can deliver software quickly.",
    path: FaDocker(),
  },
  {
    id: 16,
    name: "jest",
    description:
      "Jest é um framework de teste de JavaScript mantido pelo Facebook. Ele é amplamente utilizado para testar aplicativos React e Node.js.",
    descriptionEn:
      " Jest is a JavaScript testing framework maintained by Facebook. It is widely used to test React and Node.js applications.",
    path: SiJest(),
  },
  {
    id: 17,
    name: "mysql",
    description:
      "MySQL é um sistema de gerenciamento de banco de dados relacional de código aberto. Ele é amplamente utilizado em aplicativos da web para armazenar e recuperar dados.",
    descriptionEn:
      " MySQL is an open-source relational database management system. It is widely used in web applications to store and retrieve data.",
    path: SiMysql(),
  },
  {
    id: 18,
    name: "git",
    description:
      "Git é um sistema de controle de versão distribuído de código aberto. Ele é amplamente utilizado para rastrear alterações no código fonte durante o desenvolvimento de software.",
    descriptionEn:
      " Git is an open-source distributed version control system. It is widely used to track changes in source code during software development.",
    path: FaGitAlt(),
  },
  {
    id: 19,
    name: "github",
    description:
      "GitHub é uma plataforma de hospedagem de código-fonte baseada em Git. Ele é amplamente utilizado para colaboração em código fonte e gerenciamento de projetos de software.",
    descriptionEn:
      " GitHub is a Git-based source code hosting platform. It is widely used for source code collaboration and software project management.",
    path: FaGithub(),
  },
  {
    id: 20,
    name: "spring",
    description:
      "Spring é um framework de aplicativo Java de código aberto. Ele é amplamente utilizado para criar aplicativos corporativos Java.",
    descriptionEn:
      " Spring is an open-source Java application framework. It is widely used to create Java enterprise applications.",
    path: BiLogoSpringBoot(),
  },
];

export const imagesProject = [
  {
    id: 1,
    name: "Projeto em Desenvolvimento",
    image: hostPerfil,
    imageMobile: hostMobile,
    description:
      "Uma aplicação para compra e exposição de imóveis, desenvolvida utilizando a stack MERN (MongoDB, Express, React e Node.js). A aplicação permite que os usuários visualizem, filtrem, conversem com o dono do imóveis.",
    descriptionEn:"The Rent now Project is an application for buying and displaying real estate, developed using the MERN stack (MongoDB, Express, React and Node.js). The application allows users to view, filter, chat with the owner of the property and negotiate as well as manage their accounts and preferences.",
      project: "https://alugueja.vercel.app/",
    github: "https://github.com/LucasDiello/full-stack-hosting",
  },
  {
    id: 2,
    name: "Restaurant Borcelle",
    image: restaurantPerfil,
    imageMobile: restaurantMobile,
    description:
      "Projeto desenvolvido em React, com o intuito de criar uma aplicação de um restaurante, com uma inteface agradável, para que o usuário possa conhecer o ambiente, o cardápio, fazer reservas, e ver informações sobre o restaurante.",
    descriptionEn:"Project developed in React, with the aim of creating a restaurant application, with a pleasant interface, so that the user can get to know the environment, the menu, make reservations, and see information about the restaurant.",
      project: "https://restaurantborcelle.netlify.app/",
    github: "https://github.com/LucasDiello/React-Restaurant",
  },
  {
    id: 3,
    name: "Mecânica",
    image: ldmechanicsPerfil,
    imageMobile: ldmechanicsMobile,
    description:
      "Projeto desenvolvido em React, com o intuito de criar um site de mecânica, para que o usuário possa ver os serviços, fazer orçamentos, e ver informações sobre a mecânica.",
    descriptionEn:" Project developed in React, with the aim of creating a mechanic site, with a pleasant and responsive interface, so that the user can see the services, make quotes, and see information about the mechanic.",
    project: "https://ldmechanics.netlify.app/",
    github: "https://github.com/LucasDiello/mechanics_landing_page",
  },
  {
    id: 4,
    name: "LD Tech",
    image: ldTechPerfil,
    imageMobile: ldTechMobile,
    description:
      "Projeto desenvolvido em Next.js, com o objetivo de criar 1 e-commerce, com sistema de login, cadastro, carrinho de compras, e sistema de pagamento. Utilizando gateway Stripe para pagamentos.",
    descriptionEn:" Project developed in Next.js, with the aim of creating an e-commerce, with login system, registration, shopping cart, and payment system. Using gateway Stripe for payments.",
      project: "https://ldtech.netlify.app/",
    github: "https://github.com/LucasDiello/Next-js-Ecommerce",
  },
  {
    id:5,
    name: "Barbearia",
    image: lucasBarbaPerfil,
    imageMobile: lucasBarbaPerfil,
    description: "Projeto desenvolvido em React, com o intuito de criar um site de barbearia, com uma interface agradável, para que o usuário possa conhecer o ambiente, os serviços, fazer agendamentos, e ver informações sobre a barbearia.",
    descriptionEn:"Project developed in React, with the aim of creating a barber shop website, with a pleasant interface, so that the user can get to know the environment, the services, make appointments, and see information about the barber shop.",
    project: "https://lucasbarba.netlify.app/",
    github: "https://github.com/LucasDiello/barber-shop",
  },
  {
    id: 6,
    name: "LM Digital",
    image: lmDigital,
    imageMobile: lmDigitalMobile,
    description:
      "Projeto desenvolvido para cliente do mercado digital, com o intuito de criar um site de vendas de infoprodutos, com textos planejados para chamar a atenção do usuário.",
    descriptionEn:" Project developed for a digital market client, with the aim of creating a site for selling infoproducts, with texts planned to catch the user's attention.",
      project: "https://lmdigital.netlify.app/",
    github: "https://github.com/LucasDiello/site-venda",
  },
  {
    id: 7,
    name: "Recipes App",
    image: recipesPerfil,
    imageMobile: recipesPerfil,
    description:
      "Este projeto foi criado em 1 conjunto de devs, com o objetivo de criar um aplicativo de receitas, onde é possível ver, filtrar e favoritar receitas, além de poder criar, editar e deletar receitas. Caso queira ver mais sobre o projeto, acesse o link do github. ou o link do projeto.",
    descriptionEn:" This project was created in a group of devs, with the aim of creating a recipe app, where you can view, filter and favorite recipes, as well as create, edit and delete recipes. If you want to see more about the project, access the github link. or the project link.",
      project: "https://recipe-app-g6.vercel.app/",
    github: "https://github.com/LucasDiello/app-recipes",
  },
  {
    id: 8,
    name: "ByteBuy",
    image: byteBuyPerfil,
    imageMobile: byteBuyMobile,
    description:
      "Uma plataforma e-commerce. Criado com uma abordagem centrada no cliente e na usabilidade, o sistema permite que os clientes comprem produtos e serviços, adicione ou remova itens do carrinho, entre outras funcionalidades.",
    descriptionEn:" An e-commerce platform. Created with a customer-centric and usability approach, the system allows customers to purchase products and services, add or remove items from the cart, among other features.",
      project: "https://bytebuy.netlify.app/",
    github: "https://github.com/LucasDiello/E-commerce",
  },
  {
    id: 9,
    name: "Star Wars",
    image: starwarsPerfil,
    imageMobile: starwarsMobile,
    description:
      "Este foi um dos meus primeiros projetos que fiz utilizando react, o objetivo era criar uma aplicação que consumisse uma API e retornasse os dados em uma tabela, além disso, deveria ser possível filtrar os dados e ordená-los.",
    descriptionEn:" This was one of my first projects that I did using react, the goal was to create an application that consumed an API and returned the data in a table, in addition, it should be possible to filter the data and sort it.",
      project: "https://starorigin.netlify.app/",
    github: "https://github.com/LucasDiello/starwars-planets-search",
  },
  {
    id: 10,
    name: "Trybe Wallet",
    image: walletPerfil,
    imageMobile: walletPerfil,
    description:
      "Projeto utilizando Redux, com o objetivo de criar uma carteira de controle de gastos, onde é possível adicionar, remover e editar gastos, além de poder ver o total de gastos e o total de gastos por categoria.",
    descriptionEn:" Project using Redux, with the aim of creating a wallet for expense control, where it is possible to add, remove and edit expenses, in addition to being able to see the total expenses and the total expenses by category",
      project: "https://walletisapp.netlify.app/",
    github: "https://github.com/LucasDiello/wallet-app",
  },
  {
    id: 11,
    name: "Trivia",
    image: triviaPerfil,
    imageMobile: triviaPerfil,
    description:
      "Projeto utilizando Redux, desenvolvido por 1 equipe de devs com o objetivo de criar um jogo de perguntas e respostas, onde o jogador deve responder 5 perguntas, cada pergunta vale 1 ponto, e o jogador deve acertar pelo menos 3 perguntas para ganhar o jogo.",
    descriptionEn:"Project using Redux, developed by a team of devs with the aim of creating a quiz game, where the player must answer 5 questions, each question is worth 1 point, and the player must answer at least 3 questions to win the game.",
      project: "https://app-trivia-game.netlify.app/",
    github: "https://github.com/LucasDiello/trivia-redux-app",
  },
];

export const projectsData = [
  {
    "title": "D&D Game",
    "tech": "POO",
    "description": "API RESTful para um jogo de RPG de mesa. Utilizando o paradigma de programação orientada a objetos, foi possível criar um sistema de personagens, itens, monstros e magias.",
    "githubLink": "https://github.com/LucasDiello/trybers-and-dragons",
    "descriptionEn":"API RESTful for a tabletop RPG game. Using the object-oriented programming paradigm, it was possible to create a system of characters, items, monsters and spells."
  },
  {
    "title": "Store Manager",
    "tech": "CRUD",
    "description": "Esta é uma API RESTful desenvolvida para gerenciar operações em um sistema de estoque e sales, utilizando o banco de dados MySQL para a gestão de dados.",
    "githubLink": "https://github.com/LucasDiello/store-manager",
    "descriptionEn":"This is a RESTful API developed to manage operations in a stock and sales system, using the MySQL database to manage data."
  },
  {
    "title": "JWT SMITH",
    "tech": "CRUD & JWT",
    "description": "Sistema de gerenciamento de pedidos e produtos, com funcionalidades como cadastro e listagem de produtos, listagem de pedidos, login de usuários, validações de produtos e até mesmo a possibilidade de cadastro de pedidos com validação de token JWT.",
    "githubLink": "https://github.com/LucasDiello/JWT-Smith",
    "descriptionEn":"System for managing orders and products, with features such as product registration and listing, order listing, user login, product validations and even the possibility of order registration with JWT token validation."
  },
  {
    "title": "Blog API",
    "tech": "CRUD",
    "description": "API RESTful para um blog, com funcionalidades como cadastro e listagem de posts, listagem de categorias, login de usuários, validação de Token JWT e até mesmo a possibilidade de cadastro de posts com validação de token JWT.",
    "githubLink": "https://github.com/LucasDiello/blogs-api",
    "descriptionEn":"API RESTful for a blog, with features such as post registration and listing, category listing, user login, JWT Token validation and even the possibility of post registration with JWT token validation."
  },
  {
    "title": "App de Futebol",
    "tech": "Full Stack",
    "description": "Aplicação Full Stack para gerenciamento de jogos de futebol, com funcionalidades como cadastro e listagem de jogos, listagem d times, login de usuários, validação de Token JWT e até mesmo a possibilidade de cadastro de jogos com validação de token JWT.",
    "githubLink": "https://github.com/LucasDiello/app-futebol-clube",
    "descriptionEn":"Full Stack application for managing football games, with features such as game registration and listing, team listing, user login, JWT Token validation and even the possibility of game registration with JWT token validation."
  },
  {
    "title": "Docker todo list",
    "tech": "Docker",
    "description": "  Aplicação Full Stack utilizando Docker para gerenciamento de tarefas, com funcionalidades como cadastro e listagem de tarefas...",
    "githubLink": "https://github.com/LucasDiello/docker-todo-list",
    "descriptionEn":"Full Stack application using Docker for task management, with features such as task registration and listing..."
  }
]