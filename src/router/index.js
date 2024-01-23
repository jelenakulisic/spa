import { createRouter, createWebHistory } from 'vue-router';
import ImageGallery from '@/components/ImageGallery.vue';
import NotFound from '@/components/NotFound.vue';
import AboutGallery from '@/views/AboutGallery.vue';

const routes = [
  { path: '/', component: ImageGallery },
  { path: '/about',  component: AboutGallery},
  { path: '/:catchAll(.*)', component: NotFound }, // 404
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
