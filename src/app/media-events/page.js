import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Function to strip HTML tags and limit to 8 words
function processDescription(html) {
  const text = html.replace(/<\/?[^>]+(>|$)/g, "");
  const words = text.split(/\s+/).slice(0, 8);
  return words.join(" ") + (words.length === 8 ? "..." : "");
}

async function getEvents() {
  try {
    const response = await fetch(
      'https://admin.bangaloregastrocentre.com/jsonapi/node/media_events?include=field_thumbnail_image&sort=-field_media_date',
      {
        cache: 'no-store',
        headers: {
          'Content-Type': 'application/vnd.api+json',
        },
      }
    );

    if (!response.ok) {
      return [];
    }

    const data = await response.json();

    // Filter events based on field_add_to_bgc_foundation
    const filteredEvents = data.data.filter(event =>
      event.attributes.field_add_to_bgc_foundation === true
    );

    // Process events
    return filteredEvents.map(event => {
      const imageFile = data.included?.find(
        item => item.id === event.relationships?.field_thumbnail_image?.data?.id
      );

      const imageUrl = imageFile
        ? `https://admin.bangaloregastrocentre.com${imageFile.attributes.uri.url}`
        : null;

      return {
        id: event.id,
        title: processDescription(event.attributes.title),
        date: event.attributes.field_media_date,
        description: processDescription(event.attributes.field_media_description?.value || ''),
        imageUrl: imageUrl,
        url: event.attributes.field_slug_media?.replace('/', '') || '',
        link: event.attributes.field_link || null,
      };
    });
  } catch (error) {
    console.error('Error fetching events:', error);
    return [];
  }
}

export default async function MediaEvents() {
  const events = await getEvents();

  return (
    <>
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary-500 to-primary-600 pt-24 md:pt-28 lg:pt-32 pb-8 md:pb-10 lg:pb-12 px-4 md:px-6 lg:px-8 text-center text-white">
        <div className="max-w-[1200px] mx-auto">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">
            Media & Events
          </h1>
          <p className="text-base md:text-lg lg:text-xl font-light opacity-95">
            Stay updated with our latest news and events
          </p>
        </div>
      </div>

      {/* Events Grid */}
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 lg:gap-8 xl:gap-12 p-4 md:p-6 lg:p-8 xl:p-12">
          {events.length > 0 ? (
            events.map(event => (
              <div
                key={event.id}
                className="bg-white shadow-[0_2px_15px_rgba(0,0,0,0.1)] rounded-lg overflow-hidden flex flex-col relative p-3 md:p-4 pt-0 transition-all duration-300 ease-in-out hover:-translate-y-1.5 hover:shadow-[0_5px_25px_rgba(0,0,0,0.15)]"
              >
                <Image
                  src={event.imageUrl}
                  alt={event.title}
                  width={1000}
                  height={1000}
                  className="w-full h-[200px] sm:h-[180px] md:h-[160px] lg:h-[180px] object-contain border-b-2 border-secondary-600"
                />
                <div className="bg-secondary-600 text-white py-1.5 md:py-2 min-w-[50%] text-center text-sm md:text-base font-medium self-center -mt-3 md:-mt-4 mb-3 md:mb-4 rounded px-3">
                  {new Date(event.date).toLocaleDateString('en-IN', {
                    day: '2-digit',
                    month: '2-digit',
                    year: 'numeric'
                  })}
                </div>
                <h3 className="text-base md:text-lg lg:text-xl my-2 md:my-2.5 font-semibold text-secondary-600 leading-snug">
                  {event.title}
                </h3>
                <p className="text-sm md:text-base font-normal text-[#555] mb-2 md:mb-2.5 flex-grow leading-relaxed">
                  {event.description}
                </p>
                <div className="flex gap-3 md:gap-4 items-center flex-wrap mt-auto">
                  <Link
                    href={`/media-events/${event.url || ''}`}
                    className="text-secondary-600 cursor-pointer font-medium no-underline transition-colors duration-300 hover:text-secondary-700 hover:underline text-sm md:text-base"
                  >
                    Read More
                  </Link>
                  {event.link && (
                    <a
                      href={event.link.uri}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#555] cursor-pointer font-medium no-underline transition-colors duration-300 hover:text-secondary-600 hover:underline text-sm md:text-base"
                    >
                      {event.link.title}
                    </a>
                  )}
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-8 md:py-12 text-base md:text-lg lg:text-xl text-[#666]">
              <p>No events found</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
