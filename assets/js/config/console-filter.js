// Silencia el aviso informativo de Tailwind sobre CDN en consola (no afecta funcionalidad; es solo un mensaje de desarrollador)
  (function(){
    const originalWarn = console.warn;
    console.warn = function(...args){
      if(typeof args[0]==='string' && args[0].includes('cdn.tailwindcss.com')) return;
      originalWarn.apply(console, args);
    };
  })();
