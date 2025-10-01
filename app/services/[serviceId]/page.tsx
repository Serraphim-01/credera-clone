import { notFound } from 'next/navigation';
import { getServiceById } from '@/data/services';
import ServiceDetailLayout from '@/components/ServiceDetailLayout';

interface ServicePageProps {
  params: Promise<{
    serviceId: string;
  }>;
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { serviceId } = await params;
  const service = getServiceById(serviceId);
  
  if (!service) {
    notFound();
  }
  
  return <ServiceDetailLayout service={service} />;
}

// Generate static paths for all services
export async function generateStaticParams() {
  const services = [
    'network-solutions',
    'security-services', 
    'cloud-services',
    'digital-transformation',
    'data-analytics',
    'application-development',
    'consulting-advisory',
    'managed-services'
  ];
  
  return services.map((serviceId) => ({
    serviceId,
  }));
}