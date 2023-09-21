import MainPage from "./app/components/page/mainPage";
import PropertyDetailsPage from "./app/components/page/propertyDetailsPage";

const routes = () => [
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "property",
    element: "",
    children: [
      {
        path: ":id",
        element: <PropertyDetailsPage />,
      },
    ],
  },
];

export default routes;
