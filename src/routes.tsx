import type { RouteRecord } from 'vite-react-ssg';
import App from './App';

export const routes: RouteRecord[] = [
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, lazy: () => import('./pages/Home') },
      { path: 'about', lazy: () => import('./pages/About') },
      { path: 'green-coffee', lazy: () => import('./pages/GreenCoffee') },
      { path: 'cross-shipment', lazy: () => import('./pages/CrossShipment') },
      { path: 'blend', lazy: () => import('./pages/Blend') },
      { path: 'cuppa-joy', lazy: () => import('./pages/CuppaJoy') },
      { path: 'contact', lazy: () => import('./pages/Contact') },
      { path: '*', lazy: () => import('./pages/NotFound') },
    ],
  },
];
