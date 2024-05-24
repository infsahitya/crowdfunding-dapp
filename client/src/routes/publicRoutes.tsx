import { CampaignDetail, ContactUs, CreateCampaign, ErrorPage, Home, MainPage } from "@/pages";
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
      },
      {
        path: 'create-campagin',
        element: <CreateCampaign />,
      },
      {
        path: 'contact-us',
        element: <ContactUs />,
      }
    ]
  },
]