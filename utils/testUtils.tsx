import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { renderRouter } from "expo-router/testing-library";
import { ReactElement } from "react";

const queryClient = new QueryClient();
export default function testSetup(component: ReactElement) {
  const index = () => {
    return (
      <QueryClientProvider client={queryClient}>
        {component}
      </QueryClientProvider>
    );
  };

  renderRouter(
    {
      index,
    },
    {
      initialUrl: "",
    }
  );
}
