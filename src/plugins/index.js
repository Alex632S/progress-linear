import  { createPinia }     from 'pinia';

export function registerPlugins (app) {
  app.use(createPinia())
}
