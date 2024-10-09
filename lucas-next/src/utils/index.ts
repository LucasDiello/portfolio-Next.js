import restaurantPerfil from "@/images/restaurantBorcelle/restaurant.png";
import recipesPerfil from "@/images/recipes/recipes.png";
import byteBuyPerfil from "@/images/bytebuy/bytebuy.png";
import starwarsPerfil from "@/images/startWars/starwars-5289bf2b.png";
import walletPerfil from "@/images/trybewallet/trybeWallet.png";
import triviaPerfil from "@/images/trivia/trivia.png";
import ldmechanicsPerfil from "@/images/ldmechanics/ldmechanics.png";
import lmDigital from "@/images/lmDigital/lmDigital.png";
import lucasBarbaPerfil from "@/images/barber/barber1.png";
import hostPerfil from "@/images/host/host1.png";
import trilharPerfil from "@/images/futureProject1.png";
import { Project } from "@/types/index";
import {ldtech, ldtech1, ldtech2, ldtech3, ldtech4, ldtech5, ldtech6, ldtech7, ldtech8, ldtech9 } from "@/images/tech_ecommerce";
import { host1, host10, host2, host3, host4, host5, host6, host7, host8, host9 } from "@/images/host";
import { restaurant1, restaurant2, restaurant3, restaurant4, restaurant5, restaurant6, restaurant7, restaurant8, restaurant9 } from "@/images/restaurantBorcelle";
import { recipes1, recipes2, recipes3, recipes4, recipes5, recipes6, recipes7 } from "@/images/recipes";
import { ldmechanics1, ldmechanics2, ldmechanics3, ldmechanics4, ldmechanics5 } from "@/images/ldmechanics";
import { barber1, barber2, barber3, barber4, barber5, barber6 } from "@/images/barber";
import { lmDigital1, lmDigital2, lmDigital3, lmDigital4, lmDigital5, lmDigital6, lmDigital7 } from "@/images/lmDigital";
import { bytebuy1, bytebuy2, bytebuy3, bytebuy4 } from "@/images/bytebuy";
import { trivia1, trivia2, trivia3, trivia4 } from "@/images/trivia";


export const projectById = (id : string) : Project => {
  const project = projectsFrontEnd.find((project) => Number(project.id) === Number(id)); // Garantir que ambos sejam números
  return project as Project;
}

export const projectsFrontEnd : Project[] = [
  {
    id: 1,
    name: "Ecommerce",
    date: "02 janeiro, 2024",
    image: ldtech,
    images: [ldtech1,ldtech2,ldtech3,ldtech4,ldtech5,ldtech6,ldtech7,ldtech8,ldtech9],
    description:
      "Projeto desenvolvido em Next.js, com o objetivo de criar 1 e-commerce, com sistema de login, cadastro, carrinho de compras, e sistema de pagamento. Utilizando Framework de desenvolvimento Next.js e gateway Stripe para pagamentos como stacks principais.",
    descriptionEn: "Project developed in Next.js, with the aim of creating an e-commerce, with login system, registration, shopping cart, and payment system. Using Stripe as the payment gateway.",
    link: "https://ldtech.netlify.app/",
    github: "https://github.com/LucasDiello/Next-js-Ecommerce",
    technologies: [
      {
        id: 1,
        name: "Next.js",
        description: "Framework de desenvolvimento",
      },
      {
        id: 2,
        name: "Tailwind",
        description: "Framework de estilização",
      },
      {
        id: 3,
        name: "Stripe",
        description: "Gateway de pagamento",
      },
      {
        id: 4,
        name: "React",
        description: "Biblioteca de desenvolvimento",
      },
      {
        id: 5,
        name: "TypeScript",
        description: "Linguagem de programação tipada",
      },
      {
        id: 6,
        name: "Material UI",
        description: "Framework de componentes reutilizáveis",
      },
    ],
    whatILearned:
      "Neste projeto, eu tive a oportunidade de expandir significativamente minhas habilidades no desenvolvimento de aplicações web robustas e escaláveis. Uma das principais lições foi entender a fundo o funcionamento do Next.js, especialmente no que diz respeito ao roteamento dinâmico e ao carregamento de páginas estáticas e dinâmicas. Além disso, aprimorei minha compreensão sobre a integração de sistemas de pagamento ao usar o Stripe. A criação de um sistema completo de carrinho de compras, desde a adição de itens até a conclusão da compra, me permitiu explorar profundamente conceitos como estado global, manuseio de formulários complexos e manipulação de dados sensíveis, garantindo que a experiência do usuário fosse fluida e segura. Ao integrar o Stripe, entendi melhor as nuances dos fluxos de pagamento, autenticação de transações e segurança de dados de pagamento, o que foi uma adição valiosa às minhas competências. O uso do Tailwind me proporcionou uma abordagem mais ágil e escalável para estilização, enquanto o Material UI facilitou a implementação de componentes reutilizáveis e consistentes. Por fim, trabalhar com TypeScript me ajudou a garantir maior segurança no código, evitando bugs comuns e tornando o desenvolvimento mais eficiente ao longo do tempo.",
    whatILearnedEn:
      "In this project, I had the opportunity to significantly expand my skills in developing robust and scalable web applications. One of the main lessons was to deeply understand how Next.js works, especially regarding dynamic routing and loading static and dynamic pages. Additionally, I improved my knowledge about payment system integration by using Stripe. Building a complete shopping cart system, from adding items to completing the purchase, allowed me to explore key concepts like global state management, handling complex forms, and working with sensitive data to ensure a smooth and secure user experience. Integrating Stripe gave me a better understanding of payment flows, transaction authentication, and data security, which was a valuable addition to my skills. Tailwind provided a faster and more scalable approach to styling, while Material UI made it easier to implement reusable and consistent components. Lastly, working with TypeScript helped me ensure greater code safety, avoiding common bugs and making the development process more efficient over time.",
    whatIdDoDifferently:
      "Eu utilizaria o NextAuth para autenticação de usuários, o que simplificaria e tornaria o sistema de login mais seguro e flexível. Além disso, implementaria um sistema de busca de produtos para melhorar a experiência do usuário, permitindo que ele encontrasse facilmente os itens que deseja.",
    whatIdDoDifferentlyEn:
      "I would use NextAuth for user authentication, which would simplify and make the login system more secure and flexible. Additionally, I would implement a product search system to enhance user experience by allowing them to easily find the items they are looking for.",
    whatsNext:
      "Pretendo adicionar um sistema de busca de produtos para facilitar a navegação no site e um sistema de avaliação de produtos, onde os clientes poderão deixar suas opiniões e avaliar os produtos adquiridos, enriquecendo a interação dos usuários com a plataforma.",
    whatsNextEn:
      "I intend to add a product search system to make site navigation easier and a product review system where customers can leave their opinions and rate purchased products, enriching user interaction with the platform.",
  },
    {
      id: 2,
      name: "Visualize já",
      image: hostPerfil,
      images: [host2, host3, host4, host5, host6, host7, host8, host9, host10],
      date: "14 fevereiro, 2024",
      description:
      "Uma aplicação para compra e exposição de imóveis, desenvolvida utilizando a stack MERN (MongoDB, Express, React e Node.js). A aplicação permite que os usuários visualizem, verifique diferença locacional sua e do imóvel, visualizem os detalhes do imóvel, filtrem, publiquem imóveis, conversem com o dono do imóveis e negociem entre si.",
      descriptionEn:"The Rent now Project is an application for buying and displaying real estate, developed using the MERN stack (MongoDB, Express, React and Node.js). The application allows users to view, filter, chat with the owner of the property and negotiate as well as manage their accounts and preferences.",
      link: "https://visualizeja.vercel.app/",
      github: "https://github.com/LucasDiello/full-stack-hosting",
      technologies: [
        {
          id: 1,
          name: "MongoDB",
          description: "Banco de dados não relacional",
        },
        {
          id: 2,
          name: "Express",
          description: "Framework de desenvolvimento",
        },
        {
          id: 3,
          name: "React",
          description: "Biblioteca de desenvolvimento",
        },
        {
          id: 4,
          name: "Node.js",
          description: "Ambiente de execução",
        },
        {
          id: 5,
          name: "TypeScript",
          description: "Linguagem de programação tipada",
        },
        {
          id: 6,
          name: "Prisma",
          description: "ORM para Node.js e TypeScript",
        },
        {
          id: 7,
          name: "Socket.io",
          description: "Biblioteca para comunicação em tempo real",
        },
        {
          id: 8,
          name: "JWT",
          description: "Sistema de autenticação",
        },
        {
          id: 9,
          name: "NodeMailer",
          description: "Biblioteca para envio de e-mails",
        },
        {
          id: 10,
          name: "Leaflet",
          description: "Biblioteca de mapas interativos",
        },
        {
          id: 11,
          name: "Cloudinary",
          description: "Plataforma de armazenamento de imagens",
        }
      ],
      whatILearned:
        "Neste projeto, eu tive a oportunidade de aprimorar minhas habilidades no desenvolvimento full-stack, especialmente no que diz respeito à integração de sistemas complexos e à criação de aplicações robustas e escaláveis. A stack MERN me permitiu explorar o desenvolvimento de aplicações web modernas e dinâmicas, com um foco especial na experiência do usuário. A integração do MongoDB me proporcionou uma visão mais ampla sobre bancos de dados não relacionais, enquanto o Express facilitou a criação de rotas e middlewares de forma eficiente. O uso do React me permitiu criar interfaces interativas e responsivas, garantindo uma experiência de usuário fluida e agradável. O Node.js foi essencial para a criação de um ambiente de execução robusto e eficiente, permitindo a construção de um back-end escalável e de alto desempenho. O TypeScript me ajudou a garantir maior segurança e eficiência no código, evitando erros comuns e tornando o desenvolvimento mais ágil e produtivo.",
      whatILearnedEn: "In this project, I had the opportunity to enhance my full-stack development skills, especially regarding the integration of complex systems and the creation of robust and scalable applications. The MERN stack allowed me to explore the development of modern and dynamic web applications, with a special focus on user experience. Integrating MongoDB provided me with a broader view of non-relational databases, while Express made it easier to create routes and middlewares efficiently. Using React allowed me to create interactive and responsive interfaces, ensuring a smooth and pleasant user experience. Node.js was essential for creating a robust and efficient execution environment, enabling the construction of a scalable and high-performance back-end. TypeScript helped me ensure greater code safety and efficiency, avoiding common errors and making development more agile and productive.",
      whatIdDoDifferently:
        "Eu implementaria um sistema de avaliação de imóveis, onde os usuários poderiam deixar suas opiniões e avaliações sobre os imóveis, enriquecendo a interação dos usuários com a plataforma e fornecendo informações valiosas para futuros compradores.",
      whatIdDoDifferentlyEn:
        "I would implement a property review system where users could leave their opinions and ratings about the properties, enriching user interaction with the platform and providing valuable information for future buyers.",
      whatsNext: "Pretendo adicionar um sistema de busca de usuarios no componente chat para facilitar a navegação no site e um sistema de avaliação de imóveis, onde os clientes poderão deixar suas opiniões e avaliar os imóveis adquiridos, enriquecendo a interação dos usuários com a plataforma.",
      whatsNextEn: "I intend to add a property search system to make site navigation easier and a property review system where customers can leave their opinions and rate purchased properties, enriching user interaction with the platform.",
    },
    {
      id: 3,
      name: "Restaurant Borcelle",
      images: [restaurant1, restaurant2, restaurant3, restaurant4, restaurant5, restaurant6, restaurant7, restaurant8, restaurant9],
      date: "27 junho, 2023",
      image: restaurantPerfil,
      description:
        "Projeto desenvolvido em React, com o intuito de criar uma aplicação de um restaurante, com uma inteface agradável, para que o usuário possa conhecer o ambiente, o cardápio, fazer reservas, e ver informações sobre o restaurante.",
      descriptionEn:"Project developed in React, with the aim of creating a restaurant application, with a pleasant interface, so that the user can get to know the environment, the menu, make reservations, and see information about the restaurant.",
        link: "https://restaurantborcelle.netlify.app/",
      github: "https://github.com/LucasDiello/React-Restaurant",
      technologies: [
        {
          id: 1,
          name: "React",
          description: "Biblioteca de desenvolvimento",
        },
        {
          id: 2,
          name: "React hooks",
          description: "Sistema de gerenciamento de estado",
        },
        {
          id: 3,
          name: "CSS3",
          description: "Estilização",
        }
      ],
      whatILearned:
        "Neste projeto, eu tive a oportunidade de aprimorar minhas habilidades em desenvolvimento front-end, especialmente no que diz respeito à criação de interfaces atraentes e funcionais. O uso do React me permitiu criar componentes reutilizáveis e interativos, garantindo uma experiência de usuário fluida e agradável. A implementação de React hooks me proporcionou uma visão mais ampla sobre o gerenciamento de estado e a manipulação de eventos, tornando o desenvolvimento mais eficiente e produtivo. A estilização com CSS3 me permitiu criar layouts responsivos e atraentes, garantindo uma experiência visualmente agradável para o usuário.",
      whatILearnedEn: "In this project, I had the opportunity to enhance my front-end development skills, especially regarding the creation of attractive and functional interfaces. Using React allowed me to create reusable and interactive components, ensuring a smooth and pleasant user experience. Implementing React hooks provided me with a broader view of state management and event handling, making development more efficient and productive. Styling with CSS3 allowed me to create responsive and visually appealing layouts, ensuring a visually pleasant experience for the user.",
      whatIdDoDifferently:
        "Eu implementaria um sistema backend para gerenciar as reservas, permitindo que os usuários pudessem fazer reservas diretamente pelo site, facilitando o contato e a interação com o restaurante.",
      whatIdDoDifferentlyEn:
        "I would implement a backend system to manage reservations, allowing users to make reservations directly through the site, facilitating contact and interaction with the restaurant.",
    },
    {
      id: 4,
      name: "Recipes App",
      image: recipesPerfil,
      images : [recipes1, recipes2, recipes3, recipes4, recipes5, recipes6, recipes7],
      date: "12 março, 2023",
      description:
        "Esta aplicação foi desenvolvida em 1 time de devs, com o objetivo de criar um aplicativo de receitas para responsividade mobile, onde é possível ver, filtrar, comentar as receitas, criar sua receita, realizar uma receita, favoritar receitas entre várias outras opções com o sistema crud. Caso queira ver mais sobre o projeto, acesse o link do github. ou o link do projeto.",
      descriptionEn:" This project was created in a group of devs, with the aim of creating a recipe app, where you can view, filter and favorite recipes, as well as create, edit and delete recipes. If you want to see more about the project, access the github link. or the project link.",
        link: "https://recipe-app-g6.vercel.app/",
      github: "https://github.com/LucasDiello/app-recipes",
      technologies: [
        {
          id: 1,
          name: "React",
          description: "Biblioteca de desenvolvimento",
        },
        {
          id: 2,
          name: "React hooks",
          description: "Sistema de gerenciamento de estado",
        },
        {
          id: 3,
          name: "CSS3",
          description: "Estilização",
        },
        {
          id: 4,
          name: "Node.js",
          description: "Ambiente de execução",
        },
        {
          id: 5,
          name: "server json",
          description: "Servidor de dados local",
        }
      ],
      whatILearned:
        "Neste projeto, eu tive a oportunidade de aprimorar minhas habilidades em desenvolvimento front-end, especialmente no que diz respeito à criação de interfaces atraentes e funcionais. O uso do React me permitiu criar componentes reutilizáveis e interativos, garantindo uma experiência de usuário fluida e agradável. A implementação de React hooks me proporcionou uma visão mais ampla sobre o gerenciamento de estado e a manipulação de eventos, tornando o desenvolvimento mais eficiente e produtivo. A estilização com CSS3 me permitiu criar layouts responsivos e atraentes, garantindo uma experiência visualmente agradável para o usuário.",
      whatILearnedEn:
        "In this project, I had the opportunity to enhance my front-end development skills, especially regarding the creation of attractive and functional interfaces. Using React allowed me to create reusable and interactive components, ensuring a smooth and pleasant user experience. Implementing React hooks provided me with a broader view of state management and event handling, making development more efficient and productive. Styling with CSS3 allowed me to create responsive and visually appealing layouts, ensuring a visually pleasant experience for the user.",
      whatIdDoDifferently:
      "Implementaria um backend, a aplicação possui um servidor json, mas seria interessante implementar um backend para gerenciar as receitas, permitindo que os usuários pudessem criar, editar e deletar receitas, além de realizar comentários e favoritar receitas, isto já estã implementado porém existe uma instabilidade por conta do server json que a aplicação possui.",
      whatIdDoDifferentlyEn:
        "I would implement a backend, the application has a json server, but it would be interesting to implement a backend to manage the recipes, allowing users to create, edit and delete recipes, as well as make comments and favorite recipes, this is already implemented but there is an instability due to the json server that the application has.", 
    },
    {
      id: 5,
      name: "Mecânica",
      date: "12 março, 2023",
      image: ldmechanics1,
      images: [ldmechanics1, ldmechanics2, ldmechanics3, ldmechanics4, ldmechanics5],
      description:
        "Projeto desenvolvido em React para criar um site de mecânica com uma interface fácil de usar e visual atrativo. O site permite que os usuários explorem os serviços oferecidos, acessem todas as informações sobre a oficina, como localização, horário de funcionamento e equipe. O objetivo é proporcionar uma experiência rápida e prática, facilitando o contato e a resolução de dúvidas diretamente pelo site.",
      descriptionEn:" Project developed in React, with the aim of creating a mechanic site, with a pleasant and responsive interface, so that the user can see the services, make quotes, and see information about the mechanic.",
      link: "https://ldmechanics.netlify.app/",
      github: "https://github.com/LucasDiello/mechanics_landing_page",
      technologies: [
        {
          id: 1,
          name: "React",
          description: "Biblioteca de desenvolvimento",
        },
        {
          id: 2,
          name: "React hooks",
          description: "Sistema de gerenciamento de estado",
        },
        {
          id: 3,
          name: "CSS3",
          description: "Estilização",
        },
      ],
      whatILearned:
        "Neste projeto, eu tive a oportunidade de aprimorar minhas habilidades em desenvolvimento front-end, especialmente no que diz respeito à criação de interfaces atraentes e funcionais. O uso do React me permitiu criar componentes reutilizáveis e interativos, garantindo uma experiência de usuário fluida e agradável. A implementação de React hooks me proporcionou uma visão mais ampla sobre o gerenciamento de estado e a manipulação de eventos, tornando o desenvolvimento mais eficiente e produtivo. A estilização com CSS3 me permitiu criar layouts responsivos e atraentes, garantindo uma experiência visualmente agradável para o usuário.",
      whatILearnedEn:
        "In this project, I had the opportunity to enhance my front-end development skills, especially regarding the creation of attractive and functional interfaces. Using React allowed me to create reusable and interactive components, ensuring a smooth and pleasant user experience. Implementing React hooks provided me with a broader view of state management and event handling, making development more efficient and productive. Styling with CSS3 allowed me to create responsive and visually appealing layouts, ensuring a visually pleasant experience for the user.",
      whatIdDoDifferently:
        "Eu implementaria um sistema de agendamento online, permitindo que os usuários pudessem agendar serviços diretamente pelo site, facilitando o contato e a interação com a oficina.",
      whatIdDoDifferentlyEn: 
        "I would implement an online scheduling system, allowing users to schedule services directly through the site, facilitating contact and interaction with the mechanic.",
    },
    {
      id:6,
      name: "Barbearia",
      date: "12 março, 2023",
      image: barber1,
      images: [barber1, barber2, barber3, barber4, barber5, barber6],
      description: "Projeto desenvolvido em React para criar um site de barbearia com uma interface amigável e moderna. A plataforma permite que os usuários explorem o ambiente, conheçam os serviços oferecidos, façam agendamentos online de forma simples e prática, além de acessar todas as informações relevantes sobre a barbearia, como localização e horário de funcionamento.",
      descriptionEn:"Project developed in React, with the aim of creating a barber shop website, with a pleasant interface, so that the user can get to know the environment, the services, make appointments, and see information about the barber shop.",
      link: "https://lucasbarba.netlify.app/",
      github: "https://github.com/LucasDiello/barber-shop",
      technologies: [
        {
          id: 1,
          name: "React",
          description: "Biblioteca de desenvolvimento",
        },
        {
          id: 2,
          name: "React hooks",
          description: "Sistema de gerenciamento de estado",
        },
        {
          id: 3,
          name: "CSS3",
          description: "Estilização",
        },
      ],
      whatILearned:
        "Neste projeto, eu tive a oportunidade de aprimorar minhas habilidades em desenvolvimento front-end, especialmente no que diz respeito à criação de interfaces atraentes e funcionais. O uso do React me permitiu criar componentes reutilizáveis e interativos, garantindo uma experiência de usuário fluida e agradável. A implementação de React hooks me proporcionou uma visão mais ampla sobre o gerenciamento de estado e a manipulação de eventos, tornando o desenvolvimento mais eficiente e produtivo. A estilização com CSS3 me permitiu criar layouts responsivos e atraentes, garantindo uma experiência visualmente agradável para o usuário.",
      whatILearnedEn:
        "In this project, I had the opportunity to enhance my front-end development skills, especially regarding the creation of attractive and functional interfaces. Using React allowed me to create reusable and interactive components, ensuring a smooth and pleasant user experience. Implementing React hooks provided me with a broader view of state management and event handling, making development more efficient and productive. Styling with CSS3 allowed me to create responsive and visually appealing layouts, ensuring a visually pleasant experience for the user.",
      whatIdDoDifferently:
        "Eu implementaria um sistema de agendamento online, permitindo que os usuários pudessem agendar serviços diretamente pelo site, facilitando o contato e a interação com a barbearia.",
      whatIdDoDifferentlyEn:
        "I would implement an online scheduling system, allowing users to schedule services directly through the site, facilitating contact and interaction with the barber shop.",
      whatsNext: "Pretendo adicionar um sistema de agendamentos para ter uma melhor gestão dos horários e um sistema de avaliação para que os clientes possam avaliar os serviços prestados por cada barbeiro.",
      whatsNextEn: "I intend to add a scheduling system to have a better management of the schedules and a review system so that customers can evaluate the services provided by each barber.",
    },
    {
      id: 7,
      name: "LM Digital",
      date: "12 março, 2023",
      image: lmDigital1,
      images: [lmDigital1, lmDigital2, lmDigital3, lmDigital4, lmDigital5, lmDigital6, lmDigital7],
      description:
        "Projeto desenvolvido para um cliente do mercado digital, com foco na criação de um site de vendas de infoprodutos. O site foi planejado com textos estratégicos para captar a atenção dos usuários, oferecendo uma navegação simples e intuitiva, além de destacar os produtos de forma clara e atraente.",
      descriptionEn:" Project developed for a digital market client, with the aim of creating a site for selling infoproducts, with texts planned to catch the user's attention.",
      link: "https://lmdigital.netlify.app/",
      github: "https://github.com/LucasDiello/site-venda",
      technologies: [
        {
          id: 1,
          name: "React",
          description: "Biblioteca de desenvolvimento",
        },
        {
          id: 2,
          name: "React hooks",
          description: "Sistema de gerenciamento de estado",
        },
        {
          id: 3,
          name: "CSS3",
          description: "Estilização",
        },
      ],
      whatILearned:
        "Neste projeto, eu tive a oportunidade de aprimorar minhas habilidades em desenvolvimento front-end, especialmente no que diz respeito à criação de interfaces atraentes e funcionais. O uso do React me permitiu criar componentes reutilizáveis e interativos, garantindo uma experiência de usuário fluida e agradável. A implementação de React hooks me proporcionou uma visão mais ampla sobre o gerenciamento de estado e a manipulação de eventos, tornando o desenvolvimento mais eficiente e produtivo. A estilização com CSS3 me permitiu criar layouts responsivos e atraentes, garantindo uma experiência visualmente agradável para o usuário.",
      whatILearnedEn:
        "In this project, I had the opportunity to enhance my front-end development skills, especially regarding the creation of attractive and functional interfaces. Using React allowed me to create reusable and interactive components, ensuring a smooth and pleasant user experience. Implementing React hooks provided me with a broader view of state management and event handling, making development more efficient and productive. Styling with CSS3 allowed me to create responsive and visually appealing layouts, ensuring a visually pleasant experience for the user.",
      whatIdDoDifferently:
        "Eu implementaria uma interface mais objetiva e direta, com foco na conversão de vendas, utilizando técnicas de copywriting e design persuasivo para atrair e engajar os usuários.",
      whatIdDoDifferentlyEn:
        "I would implement a more objective and direct interface, focusing on sales conversion, using copywriting and persuasive design techniques to attract and engage users.",
    },
    {
      id: 8,
      name: "ByteBuy",
        date: "12 março, 2023",
      image: bytebuy3,
      images: [bytebuy1, bytebuy2, bytebuy3, bytebuy4],
      description:
        "Uma plataforma e-commerce. Criado com uma abordagem centrada no cliente e na usabilidade, o sistema permite que os clientes comprem produtos e serviços, adicione ou remova itens do carrinho, entre outras funcionalidades.",
      descriptionEn:" An e-commerce platform. Created with a customer-centric and usability approach, the system allows customers to purchase products and services, add or remove items from the cart, among other features.",
      link: "https://bytebuy.netlify.app/",
      github: "https://github.com/LucasDiello/E-commerce",
      technologies: [
        {
          id: 1,
          name: "React",
          description: "Biblioteca de desenvolvimento",
        },
        {
          id: 2,
          name: "React hooks",
          description: "Sistema de gerenciamento de estado",
        },
        {
          id: 3,
          name: "CSS3",
          description: "Estilização",
        },
      ],
      whatILearned:
        "Neste projeto, eu tive a oportunidade de aprimorar minhas habilidades em desenvolvimento front-end, especialmente no que diz respeito à criação de interfaces atraentes e funcionais. O uso do React me permitiu criar componentes reutilizáveis e interativos, garantindo uma experiência de usuário fluida e agradável. A implementação de React hooks me proporcionou uma visão mais ampla sobre o gerenciamento de estado e a manipulação de eventos, tornando o desenvolvimento mais eficiente e produtivo. A estilização com CSS3 me permitiu criar layouts responsivos e atraentes, garantindo uma experiência visualmente agradável para o usuário.",
      whatILearnedEn:
        "In this project, I had the opportunity to enhance my front-end development skills, especially regarding the creation of attractive and functional interfaces. Using React allowed me to create reusable and interactive components, ensuring a smooth and pleasant user experience. Implementing React hooks provided me with a broader view of state management and event handling, making development more efficient and productive. Styling with CSS3 allowed me to create responsive and visually appealing layouts, ensuring a visually pleasant experience for the user.",
      whatIdDoDifferently: "        Eu implementaria um sistema de busca de produtos para facilitar a navegação no site e um sistema de avaliação de produtos, onde os clientes poderiam deixar suas opiniões e avaliar os produtos adquiridos, enriquecendo a interação dos usuários com a plataforma.",
      whatIdDoDifferentlyEn: "  I would implement a product search system to make site navigation easier and a product review system where customers could leave their opinions and rate purchased products, enriching user interaction with the platform.",  
    },
    {
      id: 10,
      name: "Wallet App",
        date: "12 março, 2023",
      image: walletPerfil,
      description:
        "Projeto utilizando Redux, com o objetivo de criar uma carteira de controle de gastos, onde é possível adicionar, remover e editar gastos, além de poder ver o total de gastos e o total de gastos por categoria.",
      descriptionEn:" Project using Redux, with the aim of creating a wallet for expense control, where it is possible to add, remove and edit expenses, in addition to being able to see the total expenses and the total expenses by category",
      link: "https://walletisapp.netlify.app/",
      github: "https://github.com/LucasDiello/wallet-app",
      technologies: [
        {
          id: 1,
          name: "React",
          description: "Biblioteca de desenvolvimento",
        },
        {
          id: 2,
          name: "Redux",
          description: "Biblioteca de gerenciamento de estado",
        },
        {
          id: 3,
          name: "CSS3",
          description: "Estilização",
        },
        {
          id: 4,
          name: "React hooks",
          description: "Sistema de gerenciamento de estado",
        },
      ],
      whatILearned:
        "Eu tive a oportunidade de aprimorar minhas habilidades de desenvolvimento utilizando redux onde eu pude entender melhor o funcionamento do redux, como criar reducers, actions, store, e como conectar o redux com o react. Além disso, aprimorei minhas habilidades em desenvolvimento front-end, especialmente no que diz respeito à criação de interfaces atraentes e funcionais. O uso do React me permitiu criar componentes reutilizáveis e interativos, garantindo uma experiência de usuário fluida e agradável. A estilização com CSS3 me permitiu criar layouts responsivos e atraentes, garantindo uma experiência visualmente agradável para o usuário.",
      whatILearnedEn: 
        "I had the opportunity to enhance my development skills using redux where I was able to better understand how redux works, how to create reducers, actions, store, and how to connect redux with react. Additionally, I improved my front-end development skills, especially regarding the creation of attractive and functional interfaces. Using React allowed me to create reusable and interactive components, ensuring a smooth and pleasant user experience. Styling with CSS3 allowed me to create responsive and visually appealing layouts, ensuring a visually pleasant experience for the user.",
      whatIdDoDifferently:
        "Eu fairia um sistema de login e cadastro de usuários no backend, permitindo que cada usuário tivesse sua própria carteira de gastos, garantindo a segurança e a privacidade dos dados.",
      whatIdDoDifferentlyEn:  
        "I would create a user login and registration system in the backend, allowing each user to have their own expense wallet, ensuring data security and privacy.",
        whatsNext:
        "Pretendo melhorar a interface do aplicativo, adicionando gráficos e relatórios para visualização dos gastos, além de implementar um sistema de login e cadastro de usuários para garantir a segurança e a privacidade dos dados.",
      whatsNextEn:
        "I intend to improve the application interface by adding charts and reports for expense visualization, as well as implementing a user login and registration system to ensure data security and privacy.",
    },
    {
      id: 11,
      name: "Trivia",
      date: "12 março, 2023",
      image: triviaPerfil,
      images: [trivia1, trivia2, trivia3, trivia4],
      description:
        "Projeto utilizando Redux. Um dos meus primeiros projetos desenvolvido com outros desenvolvedores com o objetivo de aprender sobre redux e criar um jogo de perguntas e respostas, onde o jogador deve responder 5 perguntas, cada pergunta vale 1 ponto, e o jogador deve acertar pelo menos 3 perguntas para ganhar o jogo.",
      descriptionEn:"Project using Redux, developed by a team of devs with the aim of creating a quiz game, where the player must answer 5 questions, each question is worth 1 point, and the player must answer at least 3 questions to win the game.",
      link: "https://app-trivia-game.netlify.app/",
      github: "https://github.com/LucasDiello/trivia-redux-app",
      technologies: [
        {
          id: 1,
          name: "React",
          description: "Biblioteca de desenvolvimento",
        },
        {
          id: 2,
          name: "Redux",
          description: "Biblioteca de gerenciamento de estado",
        },
        {
          id: 3,
          name: "CSS3",
          description: "Estilização",
        },
        {
          id: 4,
          name: "React hooks",
          description: "Sistema de gerenciamento de estado",
        },
      ],
      whatILearned:
        "Eu tive a oportunidade de aprimorar minhas habilidades de desenvolvimento utilizando redux onde eu pude entender melhor o funcionamento do redux, como criar reducers, actions, store, e como conectar o redux com o react. Além disso, aprimorei minhas habilidades em desenvolvimento front-end, especialmente no que diz respeito à criação de interfaces atraentes e funcionais. O uso do React me permitiu criar componentes reutilizáveis e interativos, garantindo uma experiência de usuário fluida e agradável. A estilização com CSS3 me permitiu criar layouts responsivos e atraentes, garantindo uma experiência visualmente agradável para o usuário.",
      whatILearnedEn:
        "I had the opportunity to enhance my development skills using redux where I was able to better understand how redux works, how to create reducers, actions, store, and how to connect redux with react. Additionally, I improved my front-end development skills, especially regarding the creation of attractive and functional interfaces. Using React allowed me to create reusable and interactive components, ensuring a smooth and pleasant user experience. Styling with CSS3 allowed me to create responsive and visually appealing layouts, ensuring a visually pleasant experience for the user.",
      whatIdDoDifferently:
        "Eu melhoria a interface e deixaria a aplicação mais dinâmica, com animações e transições para tornar a experiência do usuário mais agradável e interativa.",
      whatIdDoDifferentlyEn:
        "I would improve the interface and make the application more dynamic, with animations and transitions to make the user experience more enjoyable and interactive.",
    },
  ];


export const futureProjects = [
    {
      id: 1,
      name: "Encontre sua Trilha",
      date: "12 dezembro, 2024",
      description:
        "Objetivo criar uma aplicação para encontrar trilhas ecológicas.",
      image: trilharPerfil,
      type: "Full Stack App",
    },
    {
      id: 1,
      name: "Encontre sua Trilha",
      date: "12 dezembro, 2024",
      description:
        "Objetivo criar uma aplicação para encontrar trilhas ecológicas.",
      image: trilharPerfil,
      type: "Full Stack App",
    },
    {
      id: 1,
      name: "Encontre sua Trilha",
      date: "12 dezembro, 2024",
      description:
        "Objetivo criar uma aplicação para encontrar trilhas ecológicas.",
      image: trilharPerfil,
      type: "Full Stack App",
    },
  ]