import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/layout";
import About from "../pages/About";
import Experience from "../pages/Experience";
import Education from "../pages/Education";
import Skill from "../pages/Skill";
import Interest from "../pages/Interest";
import Award from "../pages/Award";
import 'bootstrap/dist/css/bootstrap.css';

const routes = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <About /> },
      { path: "/experience", element: <Experience /> },
      { path: "/education", element: <Education /> },
      { path: "/skills", element: <Skill /> },
      { path: "/interests", element: <Interest /> },
      { path: "/awards", element: <Award /> },
    ],
  },
]);

export default routes;