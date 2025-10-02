import React from 'react';
import { notFound } from 'next/navigation';
import { getPartnershipById, partnerships } from '@/data/partnerships';
import { PartnershipPageProps } from '@/types';
import PartnershipClientPage from '@/components/PartnershipClientPage';

export async function generateStaticParams() {
  return partnerships.map((partnership) => ({
    partnerId: partnership.id,
  }));
}

const PartnershipPage: React.FC<PartnershipPageProps> = async ({ params }) => {
  const { partnerId } = await params;
  const partnership = getPartnershipById(partnerId);

  if (!partnership) {
    notFound();
  }

  // The 'heroImage' property is missing in the 'Partnership' type.
  // I'll add it to the data object for now.
  const partnershipWithHero = {
    ...partnership,
    heroImage: partnership.heroImage || '/TaskImages/default-hero.jpg',
  };

  return <PartnershipClientPage partnership={partnershipWithHero} />;
};

export default PartnershipPage;