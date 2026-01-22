export const sections = [
  {
    type: "hero",
    props: {
      title: "Referência em Estilo e Elegância",
      subtitle:
        "A barbearia mais moderna de João Pessoa, onde tradição, técnica e sofisticação se encontram.",
      primaryCta: {
        text: "Agende seu horário",
        link: "/agendar",
      },
      secondaryCta: {
        text: "WhatsApp",
        link: "https://wa.me/55XXXXXXXXX",
      },
      style: "elegant",
    },
  },

  {
    type: "services",
    props: {
      title: "Nossos Serviços",
      items: [
        {
          name: "Corte de Cabelo",
          price: "19€",
          description:
            "Cortes modernos e clássicos com acabamento preciso e atenção aos detalhes.",
        },
        {
          name: "Barba",
          price: "9€",
          description:
            "Modelagem profissional com técnicas tradicionais e toalha quente.",
        },
      ],
    },
  },

  {
    type: "gallery",
    props: {
      title: "Galeria",
      subtitle:
        "Ambiente sofisticado, equipamentos premium e uma experiência pensada para você.",
      images: [
        "/images/barbearia-1.jpg",
        "/images/barbearia-2.jpg",
        "/images/barbearia-3.jpg",
        "/images/barbearia-4.jpg",
        "/images/barbearia-5.jpg",
        "/images/barbearia-6.jpg",
      ],
    },
  },

  {
    type: "team",
    props: {
      title: "Nossa Equipe",
      subtitle:
        "Profissionais experientes, apaixonados pelo que fazem e focados em excelência.",
      members: [
        {
          name: "Carlos Silva",
          role: "Barbeiro Sênior",
        },
        {
          name: "Roberto Santos",
          role: "Especialista em Barba",
        },
        {
          name: "Thiago Oliveira",
          role: "Barbeiro Profissional",
        },
      ],
    },
  },

  {
    type: "testimonials",
    props: {
      title: "O Que Dizem Nossos Clientes",
      items: [
        {
          name: "João Pereira",
          text:
            "Atendimento impecável, ambiente incrível e resultado sempre perfeito.",
        },
        {
          name: "Lucas Almeida",
          text:
            "A melhor barbearia de João Pessoa. Profissionalismo do início ao fim.",
        },
        {
          name: "Marcos Ferreira",
          text:
            "Experiência premium de verdade. Recomendo sem pensar duas vezes.",
        },
      ],
    },
  },

  {
    type: "map",
    props: {
      title: "Visite-nos",
      location: "João Pessoa - PB",
    },
  },

  {
    type: "cta",
    props: {
      title: "Pronto para elevar seu estilo?",
      subtitle: "Agende agora e viva a experiência de uma barbearia premium.",
      primaryCta: {
        text: "Agendar agora",
        link: "/agendar",
      },
      secondaryCta: {
        text: "Falar no WhatsApp",
        link: "https://wa.me/55XXXXXXXXX",
      },
    },
  },
];
