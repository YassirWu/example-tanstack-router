import Menu from "./components/Menu/Menu";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { FakeNavigationContextProvider } from "./components/FakeNavigationContext/FakeNavigationContext";
import RenderPage from "./components/RenderPage/RenderPage";

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

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <FakeNavigationContextProvider>
        <Menu className="mb-4" />
        <div className="container mx-auto p-4">
          <RenderPage />
        </div>
      </FakeNavigationContextProvider>
    </QueryClientProvider>
  );
}

export default App;
