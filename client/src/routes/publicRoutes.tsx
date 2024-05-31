import {
  AboutUs,
  AllCampaigns,
  CampaignDetail,
  ContactUs,
  CreateCampaign,
  ErrorPage,
  Home,
  MainPage,
  MyCampaigns,
} from "@/pages";
import { RouteObject } from "react-router-dom";

export const PublicRoutes: RouteObject[] = [
  {
    path: "/",
    element: <MainPage />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "campagin/:campaignId",
        element: <CampaignDetail />,
      },
      {
        path: "create-campagin",
        element: <CreateCampaign />,
      },
      {
        path: "contact-us",
        element: <ContactUs />,
      },
      {
        path: "about-us",
        element: <AboutUs />,
      },
      {
        path: "my-campaigns",
        element: <MyCampaigns />,
      },
      {
        path: "all-campaigns",
        element: <AllCampaigns />,
      },
    ],
  },
];
