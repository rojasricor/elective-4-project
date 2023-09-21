import Navbar from "./components/Navbar";
import Footer from "./components/Footer/Footer";
import AppRoutes from "./components/AppRoutes";
import Home from "./page";

export const metadata = {
  title: "Educacion Finaciera | Home",
  description: "Educational for Finances",
  keywords: "Educacion, finanzas, enseñanzas, ahorro,",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <Navbar />

        <AppRoutes />
        {children}
      </body>
      <Footer />
    </html>
  );
}
