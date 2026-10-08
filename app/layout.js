import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

const SITE_URL = 'https://purplecowz.com';
const SITE_TITLE = 'PurpleCowz Media | We Make You Stand Out';
const SITE_DESCRIPTION = 'Creative advertising, community partnerships, digital media, print, TV advertising, branding and marketing that help local businesses stand out.';

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: SITE_URL,
    siteName: 'PurpleCowz Media',
    title: SITE_TITLE,
    description: SITE_DESCRIPTION
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_TITLE,
    description: SITE_DESCRIPTION
  }
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
