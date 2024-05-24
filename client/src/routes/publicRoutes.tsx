import { CampaignDetail, ErrorPage, Home, MainPage } from "@/pages";
import { RouteObject } from "react-router-dom";

export const PublicRoutes: RouteObject[] = [
  {
    path: "/",
    element: <MainPage />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'campagin/:campaignId',
        element: <CampaignDetail />,
      }
    ]
  },
]