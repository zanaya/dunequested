// Language configuration with RTL support
export const LANGUAGES = {
  en: { code: 'en', label: 'Eng', dir: 'ltr' },
  ar: { code: 'ar', label: 'Arabic', dir: 'rtl' },
  ur: { code: 'ur', label: 'Urdu', dir: 'rtl' },
  hi: { code: 'hi', label: 'Hindi', dir: 'rtl' },
  ru: { code: 'ru', label: 'Russian', dir: 'ltr' },
  zh: { code: 'zh', label: 'Chinese', dir: 'ltr' },
  it: { code: 'it', label: 'Italian', dir: 'ltr' },
  fr: { code: 'fr', label: 'French', dir: 'ltr' },
};

export const isRTL = (langCode) => {
  return LANGUAGES[langCode]?.dir === 'rtl';
};