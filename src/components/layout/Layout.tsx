import { Outlet } from 'react-router-dom';
import Header from '../navigation/Header';
import Footer from './Footer';
import CartDrawer from '../cart/CartDrawer';
import Toasts from '../common/Toasts';
import WhatsAppFloat from '../common/WhatsAppFloat';
import ScrollManager from '../common/ScrollManager';

export default function Layout() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-[100] focus:bg-white focus:px-4 focus:py-2 focus:text-plum-800"
      >
        Skip to content
      </a>
      <ScrollManager />
      <Header />
      <main id="main" tabIndex={-1} className="focus:outline-none">
        <Outlet />
      </main>
      <Footer />
      <CartDrawer />
      <Toasts />
      <WhatsAppFloat />
    </>
  );
}
