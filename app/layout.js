import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata = {
  title: 'PurpleCowz Media | We Make You Stand Out',
  description: 'Creative advertising, community partnerships, digital media, print, TV advertising, branding and marketing that help local businesses stand out.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
