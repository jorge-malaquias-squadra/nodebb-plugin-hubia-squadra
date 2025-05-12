const Translator = require.main.require('./src/translator');
const customTranslations = require('./lib/custom-translations/global');

const Plugin = {
  init: async (params) => {
    Plugin.addCustomTranslations();
  },

  addCustomTranslations: async () => {
    // console.log('---- Adicionada traduções -------', 'customTranslations', customTranslations.translations);
    Translator.addTranslation('pt-BR', 'global', customTranslations.translations);
  },
}

module.exports = Plugin;