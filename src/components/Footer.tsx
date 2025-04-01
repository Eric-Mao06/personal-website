import Link from 'next/link';

export function Footer() {
  return (
    <footer className="layout-md mt-8 mb-10 text-lg flex flex-col">
      <div className="flex justify-between items-center py-1 border-t border-neutral-200">
        <span>Twitter</span>
        <Link
          href="https://x.com/EricMao06"
          className="link"
        >
          @EricMao06
        </Link>
      </div>
      <div className="flex justify-between items-center py-1 border-t border-neutral-200">
        <span>LinkedIn</span>
        <Link
          href="https://www.linkedin.com/in/eric-mao/"
          className="link"
        >
          @Eric-Mao
        </Link>
      </div>
      <div className="flex justify-between items-center py-1 border-t border-neutral-200">
        <span>GitHub</span>
        <Link
          href="https://github.com/Eric-Mao06"
          className="link"
        >
          @Eric-Mao06
        </Link>
      </div>
      <div className="flex justify-between items-center py-1 border-t border-neutral-200">
        <span>Email</span>
        <Link
          href="mailto:ericmao0606@gmail.com"
          className="link"
        >
          ericmao0606@gmail.com
        </Link>
      </div>
    </footer>
  );
}
