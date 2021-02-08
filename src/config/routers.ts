export const RoutesConfig = [
  {
    title: 'HOME',
    key: 'home',
    path: '/app/home/:id?',
    component: () => import('@/routes/home'),
  },
  {
    title: 'BASEJS',
    key: 'basejs',
    path: '/app/basejs',
    component: () => import('@/routes/baseJs'),
  },
  {
    title: 'REACT',
    key: 'react',
    path: '/app/react',
    component: () => import('@/routes/react'),
  },
  {
    title: 'LOGIN',
    key: 'login',
    path: '/app/login',
    component: () => import('@/routes/login'),
    exact: true,
  },
];
