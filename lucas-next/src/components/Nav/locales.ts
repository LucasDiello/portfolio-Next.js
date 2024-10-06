import { i18n } from '@/config/i18n.config';

export const flag = {
  'en-US': 'Inglês 🇺🇸',
  'pt-BR': 'Brasil 🇧🇷',
};

export type FlagKey = keyof typeof flag;

export const locales = i18n.locales.map((code) => {
  return { code, ico: flag[code as FlagKey] };
});
