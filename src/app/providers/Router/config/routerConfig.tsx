import { ErrorPage } from '@/pages/ErrorPage';
import { AboutPage } from '@/pages/AboutPage';
import { MainPage } from '@/pages/MainPage';
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage/>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/about",
    element: <AboutPage/>,
    errorElement: <ErrorPage />,
  },
]);
