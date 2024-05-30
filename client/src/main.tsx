import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import { PublicRoutes } from "./routes/publicRoutes";
import { MetaMaskProvider } from "@metamask/sdk-react";

const router = createBrowserRouter(PublicRoutes);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MetaMaskProvider
      sdkOptions={{
        dappMetadata: {
          name: "Crowdfunding App",
          url: window.location.href,
        },
        infuraAPIKey: process.env.INFURA_API_KEY,
      }}
    >
      <RouterProvider router={router} />
    </MetaMaskProvider>
  </React.StrictMode>,
);
