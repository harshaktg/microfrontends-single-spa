import { registerApplication, start } from 'single-spa'

registerApplication(
  'vue', 
  () => import('./components/vue/index.js'),
  () => location.pathname === "/vue" || location.pathname === "/" ? true : false 
);

registerApplication(
  'react',
  () => import('./components/react/index.js'),
  () => true
);

registerApplication(
  'vanillajs',
  () => import('./components/vanillajs/index.js'),
  () => location.pathname === "/vanillajs" || location.pathname === "/" ? true : false
);

start();