import Link from 'next/link';
import Image from 'next/image';
import { Card } from '../../components/ui/Card';
import Badge from '../../components/ui/Badge';
import Button from '../../components/ui/Button';
import { campsData } from '../../data/campsData';
import PartnerCTASection from '@/components/sections/PartnerCTASection';

export default function CampsPage() {
  // Sort camps by date (latest first)
  const sortCampsByDate = (camps) => {
    return camps.sort((a, b) => {
      // Convert date strings to Date objects for proper comparison
      // Handles format: "May 29, 2024" or "October 17, 2024"
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);

      // Sort in descending order (latest first)
      return dateB - dateA;
    });
  };

  const completedCamps = sortCampsByDate(campsData.filter(camp => camp.status === 'completed'));
  const upcomingCamps = sortCampsByDate(campsData.filter(camp => camp.status === 'upcoming'));

  return (
    <>
        {/* Hero Section */}
        <section className="relative pt-44 pb-20 overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/assets/camps-hero.webp"
              alt="BGC Foundation Health Camp"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
          </div>
          
          <div className="relative main-container">
            <div className="max-w-4xl flex flex-col items-center text-center mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Our Health Camps
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
                Bringing specialized digestive health programs directly to rural communities across Karnataka through our Hospital on Wheels model.
              </p>
            </div>
          </div>
        </section>


        {/* Health Camps Section */}
        <section className="py-16">
          <div className="main-container">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
              Completed Programs
            </h2>
            <p className="text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto">
              Explore our successful health camp initiatives that have brought quality healthcare to rural communities across Karnataka.
            </p>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {completedCamps.map((camp) => (
                <Card key={camp.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="relative h-48">
                    <Image
                      src={camp.image}
                      alt={camp.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {camp.title}
                    </h3>
                    <div className="flex items-center text-gray-600 mb-2">
                      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      {camp.location}
                    </div>
                    <div className="flex items-center text-gray-600 mb-2">
                      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                      </svg>
                      {camp.date}
                    </div>
                    <div className="flex items-center text-gray-600 mb-4">
                      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {camp.participants} participants
                    </div>
                    <p className="text-gray-700 mb-4">{camp.description}</p>
                    <Link href={`/camps/${camp.id}`}>
                      <Button variant="outline" className="w-full">
                        View Details
                      </Button>
                    </Link>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Upcoming Camps Section */}
        {upcomingCamps.length > 0 && (
          <section className="py-16 bg-gray-50">
            <div className="main-container">
              <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
                Upcoming Programs
              </h2>
              <p className="text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto">
                Join us in our upcoming health camps as we continue to expand our reach to more rural communities.
              </p>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {upcomingCamps.map((camp) => (
                  <Card key={camp.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                    <div className="relative h-48 bg-gradient-to-br from-primary-100 to-secondary-100">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Badge variant="default" className="text-lg px-4 py-2">
                          Upcoming
                        </Badge>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {camp.title}
                      </h3>
                      <div className="flex items-center text-gray-600 mb-2">
                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        {camp.location}
                      </div>
                      <div className="flex items-center text-primary-600 font-semibold mb-4">
                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                        </svg>
                        {camp.date}
                      </div>
                      <p className="text-gray-700 mb-4">{camp.description}</p>
                      <Link href={`/camps/${camp.id}`}>
                        <Button variant="outline" className="w-full">
                          Learn More
                        </Button>
                      </Link>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        )}
        <PartnerCTASection />
    </>
  );
}