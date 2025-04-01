import Link from 'next/link';

interface HeaderProps {
  currentPage?: 'home' | 'writing';
  pageTitle?: string;
}

export function Header({ currentPage = 'home', pageTitle }: HeaderProps) {
  return (
    <header className="layout-md flex justify-between items-start pt-8 pb-0">
      <h1 className="font-bold text-black text-2xl mb-2">
        <Link href="/">Eric Mao</Link>
        {pageTitle && (
          <span className="page-title">
            <span className="text-neutral-400 mx-2">—</span> {pageTitle}
          </span>
        )}
      </h1>
      <nav className="flex space-x-5">
        <a
          href="https://substack.com/@ericmao"
          target="_blank"
          rel="noopener noreferrer"
          className={`hover:text-black transition-colors ${currentPage === 'writing' ? 'text-black' : 'text-neutral-500'}`}
        >
          writing
        </a>
      </nav>
    </header>
  );
}
