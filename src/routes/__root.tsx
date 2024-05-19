import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet, createRootRoute } from "@tanstack/react-router";
import Menu from "../components/Menu/Menu";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      staleTime: Infinity,
    },
  },
});

export const Route = createRootRoute({
  component: () => (
    <QueryClientProvider client={queryClient}>
      <Menu className="mb-4" />
      <div className="container mx-auto p-4">
        <Outlet />
      </div>
    </QueryClientProvider>
  ),
  notFoundComponent: () => <p>page was not found with this url</p>,
});
