import { RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import AppRouter from '@/routes/AppRouter';

function App() {
    const queryClient = new QueryClient();
    return (
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={AppRouter} />
        </QueryClientProvider>
    );
}

export default App;
