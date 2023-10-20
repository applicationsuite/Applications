import React from "react";
import { Header } from "./common/components/Header";
import { AppRoutes } from "./App.routes";
import { Footer } from "./common/components/Footer";

export const App = () => {
  return (
    <div className="App">
      <Header></Header>
      <AppRoutes />
      <Footer></Footer>
    </div>
  );
};
