import Header from './header';
import Footer from './footer';

export default function Layout({ children }) {
  return (
    <html>
      <Header />
      <div>{children}</div>
      <Footer />
    </html>
  );
}
