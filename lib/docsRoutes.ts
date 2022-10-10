export const docsRoutes = [
  {
    label: 'Visão Geral',
    pages: [
      { title: 'Introdução', slug: 'docs/introduction' },
      { title: 'Lições Práticas', slug: 'docs/tutorials' },
      { title: 'API', slug: 'docs/api' },
      { title: 'Questões feitas com frequência', slug: 'docs/frequently-asked-questions' },
      { title: 'Pontos de Referência', slug: 'docs/benchmarks' },
      { title: 'TypeScript', slug: 'docs/typescript' },
    ],
  },

  {
    label: 'Começar',
    pages: [
      { title: 'Instalação', slug: 'docs/installation' },
      { title: 'Estilização', slug: 'docs/styling' },
      { title: 'Variantes', slug: 'docs/variants' },
      { title: 'Estilos moldáveis', slug: 'docs/responsive-styles' },
      { title: 'Sobreposição de estilos', slug: 'docs/overriding-styles' },
      { title: 'Composição de Componentes', slug: 'docs/composing-components' },
      { title: 'API de abstração agnóstica', slug: 'docs/framework-agnostic' },
    ],
  },

  {
    label: 'Configuração',
    pages: [
      { title: 'Simbólicos de tema', slug: 'docs/tokens' },
      { title: 'Criação de temas personalizados', slug: 'docs/theming' },
      { title: 'Pontos de quebra', slug: 'docs/breakpoints' },
      { title: 'Utilitários', slug: 'docs/utils' },
      { title: 'Interpretação no lado do servidor', slug: 'docs/server-side-rendering' },
    ],
  },
];

export const allDocsRoutes = docsRoutes.reduce((acc, curr) => {
  acc = [...acc, ...curr.pages];
  return acc;
}, []);
