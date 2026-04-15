import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import SiteLayout from "@/components/SiteLayout";
import Index from "@/pages/Index";
import About from "@/pages/About";
import Founder from "@/pages/Founder";
import Services from "@/pages/Services";
import ServiceDetail from "@/pages/ServiceDetail";
import ClientsPartners from "@/pages/ClientsPartners";
import Projects from "@/pages/Projects";
import Certifications from "@/pages/Certifications";
import Careers from "@/pages/Careers";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/NotFound";

const queryClient = new QueryClient();

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route
            path="/"
            element={
              <SiteLayout>
                <Index />
              </SiteLayout>
            }
          />
          <Route
            path="/about"
            element={
              <SiteLayout>
                <About />
              </SiteLayout>
            }
          />
          <Route
            path="/about/founder"
            element={
              <SiteLayout>
                <Founder />
              </SiteLayout>
            }
          />
          <Route
            path="/services"
            element={
              <SiteLayout>
                <Services />
              </SiteLayout>
            }
          />
          <Route 
            path="/services/:serviceId" 
            element={
              <SiteLayout>
                <ServiceDetail />
              </SiteLayout>
            }
          />
          <Route 
            path="/:serviceId" 
            element={
              <SiteLayout>
                <ServiceDetail />
              </SiteLayout>
            }
          />
          <Route
            path="/clients-partners"
            element={
              <SiteLayout>
                <ClientsPartners />
              </SiteLayout>
            }
          />
          <Route
            path="/projects"
            element={
              <SiteLayout>
                <Projects />
              </SiteLayout>
            }
          />
          <Route
            path="/certifications"
            element={
              <SiteLayout>
                <Certifications />
              </SiteLayout>
            }
          />
          <Route
            path="/careers"
            element={
              <SiteLayout>
                <Careers />
              </SiteLayout>
            }
          />
          <Route
            path="/contact"
            element={
              <SiteLayout>
                <Contact />
              </SiteLayout>
            }
          />
          <Route
            path="*"
            element={
              <SiteLayout>
                <NotFound />
              </SiteLayout>
            }
          />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
