import { createBrowserRouter } from "react-router";
import { Layout } from "./pages/Layout";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { ProductsIndexPage } from "./pages/ProductsIndexPage";
import { ProductDetailPage } from "./pages/ProductDetailPage";
import { SteamTurbinePage } from "./pages/SteamTurbinePage";
import { HydraulicTurbinePage } from "./pages/HydraulicTurbinePage";
import { ServicesPage } from "./pages/ServicesPage";
import { CapabilitiesPage } from "./pages/CapabilitiesPage";
import { CustomersPage } from "./pages/CustomersPage";
import { BlogPage } from "./pages/BlogPage";
import { ContactPage } from "./pages/ContactPage";
import { BhelRetrofitsPage } from "./pages/BhelRetrofitsPage";
import { VoithHydraulicPage } from "./pages/VoithHydraulicPage";
import { RlaStudiesPage } from "./pages/RlaStudiesPage";
import { ServiceDetailPage } from "./pages/ServiceDetailPage";
import { AdminPage } from "./pages/AdminPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: HomePage },
      { path: "about", Component: AboutPage },
      { path: "products", Component: ProductsIndexPage },

      // SPECIFIC ROUTES: Must be BEFORE the products/:slug catch-all
      { path: "products/steam-turbine-content", Component: SteamTurbinePage },
      { path: "products/hydraulic-turbine-content", Component: HydraulicTurbinePage }, // ← MATCHES Header.tsx slug exactly

      { path: "products/:slug", Component: ProductDetailPage },
      { path: "services", Component: ServicesPage },
      { path: "services/:serviceSlug", Component: ServiceDetailPage },
      { path: "infrastructure", Component: CapabilitiesPage },
      { path: "customers", Component: CustomersPage },
      { path: "blog", Component: BlogPage },
      { path: "contact", Component: ContactPage },
      { path: "expertise", Component: ServicesPage },
      { path: "capabilities", Component: CapabilitiesPage },
      { path: "bhel-steam-turbine-governor-retrofits", Component: BhelRetrofitsPage },
      { path: "voith-hydraulic-troubleshooting-spares", Component: VoithHydraulicPage },
      { path: "rla-studies-thermal-power-plants-bangalore", Component: RlaStudiesPage },
    ],
  },
  { path: "/admin", Component: AdminPage },
]);