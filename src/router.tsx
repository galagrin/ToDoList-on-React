import { createBrowserRouter } from 'react-router-dom';
import { NotFound } from './pages/404';
import { ViewList } from './pages/ViewList';
import { ToDoListPage } from './pages/ToDoListPage';
import { ViewListItem } from './pages/ViewListItem';
import { Layout } from './layouts/Layout';

export const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <Layout />,
            errorElement: <NotFound />,
            children: [
                { path: '/', element: <ToDoListPage /> },
                { path: '/list', element: <ViewList /> },
                { path: '/list/:id', element: <ViewListItem /> },
            ],
        },
        {
            path: '*',
            element: <NotFound />,
        },
    ],
    // { basename: '/app/' },
);
