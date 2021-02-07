export const RoutesConfig = [
  {
    title: '首页',
    key: 'home',
    path: '/app/hooks/:id?',
    component: () => import('@/routes/hooks'),
  },
  {
    title: '团队',
    key: 'team',
    path: '/app/class',
    component: () => import('@/routes/class'),
  },
];
