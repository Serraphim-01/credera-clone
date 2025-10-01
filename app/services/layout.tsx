import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services - Credera',
  description: 'Comprehensive technology services and solutions',
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-white">
      {children}
    </div>
  );
}