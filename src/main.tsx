import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./index.css";

// Pages & Layout
import App from "./App.tsx";
import ErrorPage from "./pages/ErrorPage.tsx";
import Home from "./pages/Home.tsx";
import About from "./pages/About.tsx";
import Accessibility from "./pages/Accessibility.tsx";
import Contact from "./pages/Contact.tsx";
import Gallery from "./pages/Gallery.tsx";
import Menu from "./pages/Menu.tsx";
import Reviews from "./pages/Reviews.tsx";

// 🎨 Cortez Cafe Theme
const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#0078B7", // Cortez Blue
    },
    secondary: {
      main: "#F2C800", // Sunshine Gold
    },
    background: {
      default: "#010302", // Jet Black
      paper: "#122949", // Deep Harbor
    },
    text: {
      primary: "#DADAD2",
    },
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: "/about-us", element: <About /> },
      { path: "/accessibility", element: <Accessibility /> },
      { path: "/contact-us", element: <Contact /> },
      { path: "/gallery", element: <Gallery /> },
      { path: "/menu", element: <Menu /> },
      { path: "/reviews", element: <Reviews /> },
    ],
  },
]);

const rootElement = document.getElementById("root");
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}
