import { Header } from './Header';
import { Footer } from './Footer';

interface PageLayoutProps {
  children: React.ReactNode;
  currentPage?: 'home';
  pageTitle?: string;
}

export function PageLayout({ children, currentPage = 'home', pageTitle }: PageLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header currentPage={currentPage} pageTitle={pageTitle} />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
}
