import { createRouter, createWebHistory, RouteRecord, RouteRecordRaw } from "vue-router";

import Messages from '../pages/Messages.vue';
import Home from '../pages/Home.vue';

// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
const routes: RouteRecordRaw[] = [
  { path: '/', component: Home },
//   { path: '/about', component: About },
  { path: '/messages', component: Messages },
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHistory(),
  routes, // short for `routes: routes`
})

export default router;