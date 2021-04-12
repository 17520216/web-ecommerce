import Header from "../components/Header";
import ModalCart from "../components/ModalCart";
import Footer from "../components/Footer";

export default function MainLayout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
      <ModalCart />
    </>
  );
}
