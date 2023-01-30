import "./App.css";
import React from "react";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";

import { Routing } from "./Utils/Routing";

import "./App.scss";

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routing />
    </QueryClientProvider>
    // <DashBoard />
    // <Button variant="contained" className="button">
    //   Click me
    // </Button>
  );
}

export default App;
