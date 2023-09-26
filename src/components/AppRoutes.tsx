import Link from "next/link";
import Home from "../pages/Home";
import Signin from "../app/signin/page";
import PageNotFound from "../pages/PagesNotFound";
import Signup from "../app/signup/page";

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
