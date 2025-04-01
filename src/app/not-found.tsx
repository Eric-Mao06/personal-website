import { PageLayout } from '@/components/PageLayout';
import Link from 'next/link';

export default function NotFound() {
  return (
    <PageLayout>
      <div className="layout-md py-20 text-center">
        <h2 className="text-2xl font-bold mb-6">404 - Page Not Found</h2>
        <p className="mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link href="/" className="link">
          Go back to the homepage
        </Link>
      </div>
    </PageLayout>
  );
}
