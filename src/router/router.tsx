import AboutUsPage from "@/app/about-us/page";
import ContactUsPage from "@/app/contact-us/page";
import HomePage from "@/app/home/pages";
import PrivacyPolicyPage from "@/app/privacy-policy/page";
import TermsAndConditionPage from "@/app/terms-and-condition/page";
// import TeamPage from "@/app/team/page";
import Wrapper from "@/components/wrapper/page";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Wrapper />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "about-us",
        element: <AboutUsPage />,
      },
      {
        path: "privacy-policy",
        element: <PrivacyPolicyPage />,
      }, {
        path: "terms-and-conditions",
        element: <TermsAndConditionPage />,
      },
      {
        path: "contact-us",
        element: <ContactUsPage />,
      },
    ],
  },
]);
