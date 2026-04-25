/**
 * Fonte única para dados institucionais (SEO local + consistência de contato).
 * Não contém segredos. Atualizar aqui propaga para páginas que usam o objeto.
 */
window.CAIARA_SITE = {
  origin: 'https://caiara.com.br',
  brand: 'Caiara',
  legalEntity: 'Caiara Tecnologia',
  tagline: 'UX, software e IA — Brasil · Portugal · bases Rio de Janeiro e Niterói',
  email: 'roblopes2121@gmail.com',
  telE164: '+5521994961175',
  phoneDisplay: '+55 21 99496-1175',
  whatsappE164: '5521994961175',
  linkedin: 'https://linkedin.com/in/roblopes21',
  founder: 'Rob Lopes',
  cities: ['Rio de Janeiro', 'Niterói'],
  offices: [
    {
      label: 'Rio de Janeiro',
      lines: ['Parque Tecnológico da UFRJ, Av. Horácio Macedo, 950', 'Ilha do Fundão — CEP 21941-598 — RJ'],
    },
    {
      label: 'Niterói',
      lines: ['Shopping Pendotiba', 'Niterói — RJ'],
    },
  ],
  servicePaths: {
    ux: '/ux-design-rio-de-janeiro/',
    uxIntent: '/ux-para-sistemas-complexos/',
    sistemasInternos: '/sistemas-internos-e-plataformas-operacionais/',
    softwareIntent: '/software-sob-medida-para-operacoes-complexas/',
    sites: '/criacao-de-sites-e-landing-pages/',
    iaIntent: '/automacao-ia-para-equipes-e-processos/',
    software: '/desenvolvimento-software-rio-de-janeiro/',
    ia: '/automacao-ia-rio-de-janeiro/',
    gov: '/governo-digital-e-sistemas-publicos/',
    diagnostico: '/diagnostico/',
    diagnosticoLegado: '/diagnostico-de-produto-ou-operacao/',
    sitesNiteroi: '/criacao-de-sites-em-niteroi/',
    softwareRjSlug: '/desenvolvimento-de-software-rio-de-janeiro/',
    brasil: '/brasil/',
    portugal: '/portugal/',
    ireland: '/ireland/',
    contact: '/contato/',
  },
  /** Mercados e GEO (texto, sem endereço fora do Brasil salvo o declarado em offices) */
  areasServed: [
    'Rio de Janeiro',
    'Niterói',
    'Brasil',
    'Portugal',
    'Ireland',
    'Dublin',
  ],
};
