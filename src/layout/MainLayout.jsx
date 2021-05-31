import Header from "../components/Header";
import ModalCart from "../components/ModalCart";
import Footer from "../components/Footer";
import Message from "../components/Message";

export default function MainLayout({ children }) {
  return (
    <>
      <Header />
      {/* <Message /> */}
      {children}
      <Footer />
      <ModalCart />
    </>
  );
}
