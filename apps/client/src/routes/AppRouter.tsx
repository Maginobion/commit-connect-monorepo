import { createBrowserRouter } from 'react-router-dom';

import HomePage from '@/pages/home/Home.page';
import DefaultLayout from '@/layouts/DefaultLayout';

const router = createBrowserRouter([
    {
        path: '/',
        element: <DefaultLayout />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
        ],
    },
]);

export default router;
