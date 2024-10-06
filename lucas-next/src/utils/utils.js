import restaurantPerfil from "@/images/restaurant.png";
import ldTechPerfil from "@/images/ldTech-0fb842bf.png";
import recipesPerfil from "@/images/recipes.png";
import byteBuyPerfil from "@/images/bytebuy.png";
import starwarsPerfil from "@/images/starwars-5289bf2b.png";
import walletPerfil from "@/images/trybeWallet.png";
import triviaPerfil from "@/images/trivia.png";
import ldmechanicsPerfil from "@/images/ldmechanics.png";
import lmDigital from "@/images/lmDigital.png";
import lucasBarbaPerfil from "@/images/barber1.png";
import hostPerfil from "@/images/host1.png";

export const projectsFrontEnd = [
    {
      id: 1,
      name: "Visualize já",
      image: hostPerfil,
      date: "14 fevereiro, 2024",
      description:
      "Uma aplicação para compra e exposição de imóveis, desenvolvida utilizando a stack MERN (MongoDB, Express, React e Node.js). A aplicação permite que os usuários visualizem, verifique diferença locacional sua e do imóvel, visualizem os detalhes do imóvel, filtrem, publiquem imóveis, conversem com o dono do imóveis e negociem entre si.",
      descriptionEn:"The Rent now Project is an application for buying and displaying real estate, developed using the MERN stack (MongoDB, Express, React and Node.js). The application allows users to view, filter, chat with the owner of the property and negotiate as well as manage their accounts and preferences.",
      link: "https://visualizeja.vercel.app/",
      github: "https://github.com/LucasDiello/full-stack-hosting",
    },
    {
      id: 2,
      name: "LD Tech",
      date: "02 janeiro, 2024",
      image: ldTechPerfil,
      description:
        "Projeto desenvolvido em Next.js, com o objetivo de criar 1 e-commerce, com sistema de login, cadastro, carrinho de compras, e sistema de pagamento. Utilizando Framework de desenvolvimento Next.js e gateway Stripe para pagamentos como stacks princípais.",
      descriptionEn:" Project developed in Next.js, with the aim of creating an e-commerce, with login system, registration, shopping cart, and payment system. Using gateway Stripe for payments.",
        link: "https://ldtech.netlify.app/",
      github: "https://github.com/LucasDiello/Next-js-Ecommerce",
    },
    {
      id: 3,
      name: "Restaurant Borcelle",
      date: "27 junho, 2023",
      image: restaurantPerfil,
      description:
        "Projeto desenvolvido em React, com o intuito de criar uma aplicação de um restaurante, com uma inteface agradável, para que o usuário possa conhecer o ambiente, o cardápio, fazer reservas, e ver informações sobre o restaurante.",
      descriptionEn:"Project developed in React, with the aim of creating a restaurant application, with a pleasant interface, so that the user can get to know the environment, the menu, make reservations, and see information about the restaurant.",
        link: "https://restaurantborcelle.netlify.app/",
      github: "https://github.com/LucasDiello/React-Restaurant",
    },
    {
      id: 4,
      name: "Recipes App",
      image: recipesPerfil,
      date: "12 março, 2023",
      description:
        "Esta aplicação foi desenvolvida em 1 time de devs, com o objetivo de criar um aplicativo de receitas para responsividade mobile, onde é possível ver, filtrar, comentar as receitas, criar sua receita, realizar uma receita, favoritar receitas entre várias outras opções com o sistema crud. Caso queira ver mais sobre o projeto, acesse o link do github. ou o link do projeto.",
      descriptionEn:" This project was created in a group of devs, with the aim of creating a recipe app, where you can view, filter and favorite recipes, as well as create, edit and delete recipes. If you want to see more about the project, access the github link. or the project link.",
        link: "https://recipe-app-g6.vercel.app/",
      github: "https://github.com/LucasDiello/app-recipes",
    },
    {
      id: 5,
      name: "Mecânica",
      date: "12 março, 2023",
      image: ldmechanicsPerfil,
      description:
        "Projeto desenvolvido em React para criar um site de mecânica com uma interface fácil de usar e visual atrativo. O site permite que os usuários explorem os serviços oferecidos, acessem todas as informações sobre a oficina, como localização, horário de funcionamento e equipe. O objetivo é proporcionar uma experiência rápida e prática, facilitando o contato e a resolução de dúvidas diretamente pelo site.",
      descriptionEn:" Project developed in React, with the aim of creating a mechanic site, with a pleasant and responsive interface, so that the user can see the services, make quotes, and see information about the mechanic.",
      link: "https://ldmechanics.netlify.app/",
      github: "https://github.com/LucasDiello/mechanics_landing_page",
    },
    {
      id:6,
      name: "Barbearia",
      date: "12 março, 2023",
      image: lucasBarbaPerfil,
      description: "Projeto desenvolvido em React para criar um site de barbearia com uma interface amigável e moderna. A plataforma permite que os usuários explorem o ambiente, conheçam os serviços oferecidos, façam agendamentos online de forma simples e prática, além de acessar todas as informações relevantes sobre a barbearia, como localização e horário de funcionamento.",
      descriptionEn:"Project developed in React, with the aim of creating a barber shop website, with a pleasant interface, so that the user can get to know the environment, the services, make appointments, and see information about the barber shop.",
      link: "https://lucasbarba.netlify.app/",
      github: "https://github.com/LucasDiello/barber-shop",
    },
    {
      id: 7,
      name: "LM Digital",
      date: "12 março, 2023",
      image: lmDigital,
      description:
        "Projeto desenvolvido para um cliente do mercado digital, com foco na criação de um site de vendas de infoprodutos. O site foi planejado com textos estratégicos para captar a atenção dos usuários, oferecendo uma navegação simples e intuitiva, além de destacar os produtos de forma clara e atraente.",
      descriptionEn:" Project developed for a digital market client, with the aim of creating a site for selling infoproducts, with texts planned to catch the user's attention.",
      link: "https://lmdigital.netlify.app/",
      github: "https://github.com/LucasDiello/site-venda",
    },
    {
      id: 8,
      name: "ByteBuy",
        date: "12 março, 2023",
      image: byteBuyPerfil,
      description:
        "Uma plataforma e-commerce. Criado com uma abordagem centrada no cliente e na usabilidade, o sistema permite que os clientes comprem produtos e serviços, adicione ou remova itens do carrinho, entre outras funcionalidades.",
      descriptionEn:" An e-commerce platform. Created with a customer-centric and usability approach, the system allows customers to purchase products and services, add or remove items from the cart, among other features.",
      link: "https://bytebuy.netlify.app/",
      github: "https://github.com/LucasDiello/E-commerce",
    },
    {
      id: 9,
      name: "Star Wars",
      date: "12 março, 2023",
      image: starwarsPerfil,
      description:
        "Este foi um dos meus primeiros projetos que fiz utilizando react, o objetivo era criar uma aplicação que consumisse uma API e retornasse os dados em uma tabela, além disso, deveria ser possível filtrar os dados e ordená-los.",
      descriptionEn:" This was one of my first projects that I did using react, the goal was to create an application that consumed an API and returned the data in a table, in addition, it should be possible to filter the data and sort it.",
      link: "https://starorigin.netlify.app/",
      github: "https://github.com/LucasDiello/starwars-planets-search",
    },
    {
      id: 10,
      name: "Trybe Wallet",
        date: "12 março, 2023",
      image: walletPerfil,
      description:
        "Projeto utilizando Redux, com o objetivo de criar uma carteira de controle de gastos, onde é possível adicionar, remover e editar gastos, além de poder ver o total de gastos e o total de gastos por categoria.",
      descriptionEn:" Project using Redux, with the aim of creating a wallet for expense control, where it is possible to add, remove and edit expenses, in addition to being able to see the total expenses and the total expenses by category",
      link: "https://walletisapp.netlify.app/",
      github: "https://github.com/LucasDiello/wallet-app",
    },
    {
      id: 11,
      name: "Trivia",
        date: "12 março, 2023",
      image: triviaPerfil,
      description:
        "Projeto utilizando Redux. Um dos meus primeiros projetos desenvolvido com outros desenvolvedores com o objetivo de aprender sobre redux e criar um jogo de perguntas e respostas, onde o jogador deve responder 5 perguntas, cada pergunta vale 1 ponto, e o jogador deve acertar pelo menos 3 perguntas para ganhar o jogo.",
      descriptionEn:"Project using Redux, developed by a team of devs with the aim of creating a quiz game, where the player must answer 5 questions, each question is worth 1 point, and the player must answer at least 3 questions to win the game.",
      link: "https://app-trivia-game.netlify.app/",
      github: "https://github.com/LucasDiello/trivia-redux-app",
    },
  ];