/**
 * Configuração central de SEO e contato (referência TypeScript).
 * O site estático usa os mesmos valores em js/site-config.js e nas meta tags de cada página.
 * Ao alterar aqui, sincronize js/site-config.js e títulos/descrições relevantes.
 */

export const siteName = 'Caiara Tecnologia';
export const siteUrl = 'https://caiara.com.br';
export const defaultTitle =
  'Caiara Tecnologia | UX, software, sites e IA para empresas';
export const defaultDescription =
  'A Caiara cria sites, sistemas sob medida, UX/UI, dashboards, MVPs e automações com IA para empresas no Rio de Janeiro, Niterói, Brasil e Portugal.';
export const whatsappNumber = '5521994961175';
export const whatsappDisplay = '+55 21 99496-1175';
export const defaultOgImage = 'https://caiara.com.br/og-image.jpg';
export const city = 'Niterói';
export const region = 'Rio de Janeiro';
export const country = 'Brasil';

export const services = [
  'UX/UI para sistemas',
  'Desenvolvimento de software sob medida',
  'Sites institucionais',
  'Landing pages',
  'Automação com IA',
  'MVP e produtos digitais',
  'Dashboards e áreas logadas',
] as const;

export const areasServed = [
  'Rio de Janeiro',
  'Niterói',
  'Brasil',
  'Portugal',
  /** Sem endereço local afirmado; presença comercial e remoto, ver /ireland/ */
  'Ireland',
  'Dublin',
] as const;

/** Página oficial LinkedIn da empresa: preencher quando existir. */
export const linkedInCompanyUrls: string[] = [];
