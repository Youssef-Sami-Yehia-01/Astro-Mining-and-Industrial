import { companyStoryContent, features, globalReach, heroContent, mapPins, partners, previewIndustries, products, qualityHighlights, stats } from "@/data/siteContent";
import CompanyStorySection from "@/components/sections/CompanyStorySection";
import FeatureStrip from "@/components/sections/FeatureStrip";
import GlobalReachSection from "@/components/sections/GlobalReachSection";
import HeroSection from "@/components/sections/HeroSection";
import IndustriesSection from "@/components/sections/IndustriesSection";
import PartnersSection from "@/components/sections/PartnersSection";
import ProductsSection from "@/components/sections/ProductsSection";
import WhyAstroSection from "@/components/sections/WhyAstroSection";

export default function AstroHomepage() {
  return (
    <>
      <HeroSection content={heroContent} />
      <FeatureStrip items={features} />
      <CompanyStorySection content={companyStoryContent} />
      <ProductsSection products={products} />
      <IndustriesSection industries={previewIndustries} />
      <WhyAstroSection highlights={qualityHighlights} stats={stats} />
      <PartnersSection partners={partners} />
      <GlobalReachSection countries={globalReach} pins={mapPins} />
    </>
  );
}
