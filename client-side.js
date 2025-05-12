// const globalTranslations = require('./lib/custom-translations/global');
const customTranslations = {
  // global: globalTranslations.translations,
  global: {
    "topics": "Experimentos",
    "posts": "Comentários",
    "x-topics": "<span class=\"formatted-number\">%1</span> experimentos",
    "x-posts": "<span class=\"formatted-number\">%1</span> comentários",
    "norecentposts": "Nenhum Comentário Recente",
    "norecenttopics": "Sem Experimentos Recentes",
    "recentposts": "Experimentos Recentes",
    "posted-ago-by-guest": "postado %1 por Visitante",
    "posted-ago-by": "comentado %1 por %2",
    "posted-ago": "comentou %1",
    "posted-in": "comentado em %1",
    "posted-in-by": "comentado em %1 por %2",
    "posted-in-ago": "comentado em %1 %2",
    "posted-in-ago-by": "comentado em %1 %2 por %3",
    "user-posted-ago": "%1 comentou %2",
    "guest-posted-ago": "Visitante comentou %1"
  }
};

const PluginEvents = {
  registerNotLoggedInRedirectToLoginPage: () => {
    $(window).on('action:ajaxify.end', function (ev, data) {
      const url = new URL(data.url, window.location.origin);
      const isLoggedIn = !!document.body.classList.contains('user-loggedin');
      if (url.pathname === '/' && !isLoggedIn) {
        window.location.href = '/login';
      }
    });

    // $(window).on('action:translator.loadClient', function (ev, content) {
    //   const { language, namespace, data } = content;
    //   console.log('action:translator.loadClient ---> chegou aqui', 'namespace', namespace);

    //   if (!customTranslations[namespace]) {
    //     return;
    //   }

    //   const newData = {...data, ...customTranslations[namespace] };
    //   console.log('action:translator.loadClient', newData, 'customTranslations[namespace]', customTranslations[namespace]);

    //   return { language, namespace, data: newData };
    // });
  },
};

(() => {
  PluginEvents.registerNotLoggedInRedirectToLoginPage();
})();
