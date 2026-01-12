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
      <div className="bg-gradient-to-br from-primary-500 to-primary-600 pt-32 pb-12 px-8 text-center text-white sm:pt-28 sm:pb-8 sm:px-6 max-sm:pt-24 max-sm:pb-6 max-sm:px-4">
        <div className="max-w-[1200px] mx-auto">
          <h1 className="text-5xl font-bold mb-4 xl:text-[2.5rem] lg:text-4xl md:text-[1.75rem] sm:text-2xl">
            Media & Events
          </h1>
          <p className="text-xl font-light opacity-95 lg:text-lg md:text-base">
            Stay updated with our latest news and events
          </p>
        </div>
      </div>

      {/* Events Grid */}
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-4 gap-12 p-12 xl:grid-cols-3 xl:gap-8 xl:p-8 lg:grid-cols-2 lg:gap-6 lg:p-6 sm:grid-cols-2 sm:gap-6 sm:p-6 max-sm:grid-cols-1 max-sm:gap-4 max-sm:p-4">
          {events.length > 0 ? (
            events.map(event => (
              <div
                key={event.id}
                className="bg-white shadow-[0_2px_15px_rgba(0,0,0,0.1)] rounded-lg overflow-hidden flex flex-col relative p-4 pt-0 transition-all duration-300 ease-in-out hover:-translate-y-1.5 hover:shadow-[0_5px_25px_rgba(0,0,0,0.15)] sm:p-3 sm:pt-0"
              >
                <Image
                  src={event.imageUrl}
                  alt={event.title}
                  width={1000}
                  height={1000}
                  className="w-full h-[180px] object-contain border-b-2 border-secondary-600 lg:h-40 md:h-[140px] max-sm:h-[200px]"
                />
                <div className="bg-secondary-600 text-white py-2 min-w-[50%] text-center text-base font-medium self-center -mt-4 mb-4 rounded md:text-[0.9rem] md:py-1.5 max-sm:text-[0.85rem] max-sm:py-[5px]">
                  {new Date(event.date).toLocaleDateString('en-IN', {
                    day: '2-digit',
                    month: '2-digit',
                    year: 'numeric'
                  })}
                </div>
                <h3 className="text-xl my-2.5 font-semibold text-secondary-600 leading-snug lg:text-lg md:text-base">
                  {event.title}
                </h3>
                <p className="text-base font-normal text-[#555] mb-2.5 flex-grow leading-relaxed lg:text-[0.95rem] md:text-[0.9rem]">
                  {event.description}
                </p>
                <div className="flex gap-4 items-center flex-wrap mt-auto">
                  <Link
                    href={`/media-events/${event.url || ''}`}
                    className="text-secondary-600 cursor-pointer font-medium no-underline transition-colors duration-300 hover:text-secondary-700 hover:underline max-sm:text-[0.9rem]"
                  >
                    Read More
                  </Link>
                  {event.link && (
                    <a
                      href={event.link.uri}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#555] cursor-pointer font-medium no-underline transition-colors duration-300 hover:text-secondary-600 hover:underline max-sm:text-[0.9rem]"
                    >
                      {event.link.title}
                    </a>
                  )}
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-12 text-xl text-[#666]">
              <p>No events found</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
