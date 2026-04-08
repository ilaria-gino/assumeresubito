import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Seo } from "./Seo";
import { CookieBanner } from "./CookieBanner";

export function Layout() {
  return (
    <div className="flex min-h-screen flex-col">
      <Seo />
      <Header />
      <main className="flex-1 pb-28 pt-[var(--nav-h)] sm:pb-24">
        <Outlet />
      </main>
      <Footer />
      <CookieBanner />
    </div>
  );
}
