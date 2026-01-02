import ContactFormSection from '../../components/sections/ContactFormSection';
import { ORGANIZATION, SEO_KEYWORDS, LEADERSHIP } from '@/config/siteConfig';

export const metadata = {
  title: `Contact Us | ${ORGANIZATION.name}`,
  description: `Get in touch with ${ORGANIZATION.name}. Contact us for partnerships, health camp requests, media inquiries, or general questions about our rural healthcare programs in Karnataka.`,
  keywords: [
    `${ORGANIZATION.name} contact`,
    'rural healthcare contact',
    'health camp request',
    'medical partnership inquiry',
    'Karnataka healthcare contact',
    'gastroenterology services contact',
    LEADERSHIP.chiefGastroenterologist.name,
    ORGANIZATION.fullName,
    ...SEO_KEYWORDS
  ].slice(0, 10),
};

export default function ContactPage() {
  return (
    <ContactFormSection />
  );
}