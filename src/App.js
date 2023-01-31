import "./App.css";
import React from "react";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";

import { Routing } from "./Utils/Routing";
import DashBoard from "./Screens/Dashboard/dashboard";

import "./App.scss";
import LoginScreen from "./Screens/Login/loginScreen";

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routing />
    </QueryClientProvider>
    // <LoginScreen />
    // <Button variant="contained" className="button">
    //   Click me
    // </Button>
  );
}

export default App;
