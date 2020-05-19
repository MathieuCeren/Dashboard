// routes.js
import Login from './components/Login.vue';
import GaresMap from './components/Map/GaresMap.vue';
import StationFocus from './components/FocusStation/StationFocus.vue';
import UsersFocus from './components/FocusUsers/UsersFocus.vue';
import Performance from './components/Performance/Performance.vue';

const routes = [
    { path: '/', name: 'login' ,component: Login },
    { path: '/map', component: GaresMap },
    { path: '/stations', component: StationFocus },
    { path: '/utilisateurs', component: UsersFocus },
    { path: '/performance', component: Performance }
];

export default routes;