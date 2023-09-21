import Link from "next/link";
import Home from "../pages/Home";
import Signin from "../pages/signin";
import PageNotFound from "../pages/PagesNotFound";
import Signup from "../pages/signup";

function AppRoutes(): React.ReactNode {
  return (
    <html>
      <ul>
        <li>
          <Link href="/Home">Home</Link>
          <Link href="/contact">Contacto</Link>
        </li>
      </ul>
    </html>
  );
}
export default AppRoutes;
