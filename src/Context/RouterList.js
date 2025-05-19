import CreateContactWindow from "../Windows/CreateContactWindow";
import NotFoundWindow from "../Windows/NotFoundWindow";

export const ROUTERS = [
  {
    path: "/",
    element: <CreateContactWindow />,
  },
  {
    path: "*",
    element: <NotFoundWindow />,
  },
];
