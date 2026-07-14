import Seo from '@/components/seo/Seo';
import JsonLd from '@/components/seo/JsonLd';
import { HOME_JSON_LD } from '@/lib/seoSchema';
import HeroSection from '@/components/home/HeroSection';
import IntroSection from '@/components/home/IntroSection';
import PillarsSection from '@/components/home/PillarsSection';
import ValuesSection from '@/components/home/ValuesSection';
import OriginsSection from '@/components/home/OriginsSection';
import PartnersBand from '@/components/home/PartnersBand';
import CuppaTeaser from '@/components/home/CuppaTeaser';
import StatsBand from '@/components/home/StatsBand';
import ClosingCta from '@/components/home/ClosingCta';

export function Component() {
  return (
    <>
      <Seo pageKey="home" path="/" />
      <JsonLd data={HOME_JSON_LD} />
      <HeroSection />
      <IntroSection />
      <PillarsSection />
      <ValuesSection />
      <OriginsSection />
      <PartnersBand />
      <CuppaTeaser />
      <StatsBand />
      <ClosingCta />
    </>
  );
}
