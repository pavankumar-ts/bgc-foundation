import React from 'react';
import Image from 'next/image';
import { notFound } from 'next/navigation';

async function getEvent(slug) {
  try {
    const response = await fetch(
      'https://admin.bangaloregastrocentre.com/jsonapi/node/media_events?include=field_thumbnail_image',
      {
        cache: 'no-store',
        headers: {
          'Content-Type': 'application/vnd.api+json',
        },
      }
    );

    if (!response.ok) {
      return null;
    }

    const data = await response.json();

    // Filter by slug and field_add_to_bgc_foundation
    let eventData = data.data.find(event => {
      const eventSlug = event.attributes.field_slug_media?.replace('/', '') || '';
      return eventSlug === slug && event.attributes.field_add_to_bgc_foundation === true;
    });

    if (!eventData) {
      return null;
    }

    // Get the image file
    const imageFile = data.included?.find(item =>
      item.type === 'file--file' && item.id === eventData.relationships?.field_thumbnail_image?.data?.id
    );

    return {
      id: eventData.id,
      title: eventData.attributes.title,
      date: eventData.attributes.field_media_date,
      description: eventData.attributes.field_media_description?.value || '',
      imageUrl: imageFile ? `https://admin.bangaloregastrocentre.com${imageFile.attributes.uri.url}` : null,
      imageAlt: imageFile ? imageFile.attributes.filename : '',
      slug: eventData.attributes.field_slug_media?.replace('/', '') || '',
      link: eventData.attributes.field_link || null,
    };
  } catch (error) {
    console.error('Error fetching event:', error);
    return null;
  }
}

export default async function EventPage({ params }) {
  const { slug } = await params;
  const event = await getEvent(slug);

  if (!event) {
    notFound();
  }

  const formattedDate = new Date(event.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <>
      {/* Hero Section */}
      <div className="bg-gradient-to-br min-h-[300px] flex justify-center items-center from-primary-500 to-primary-600 pt-32 pb-12 px-8 text-center text-white sm:pt-28 sm:pb-8 sm:px-6 md:pt-24 md:pb-8">
        <div className="max-w-[1200px] mx-auto">
          <h1 className="text-5xl font-bold m-0 xl:text-[2.5rem] lg:text-4xl md:text-[1.75rem] sm:text-2xl">
            {event.title}
          </h1>
        </div>
      </div>

      {/* Content Container */}
      <div className="max-w-[1200px] mx-auto my-8 px-8 pb-12 xl:max-w-[90%] lg:max-w-[95%] lg:my-6 lg:px-6 md:my-4 md:px-4 md:pb-8 sm:my-2 sm:px-3 sm:pb-6">
        {event.imageUrl && (
          <Image
            src={event.imageUrl}
            alt={event.imageAlt || event.title}
            width={1200}
            height={600}
            className="rounded-lg w-full h-auto object-cover mb-8 md:mb-6"
            priority
          />
        )}

        <div className="max-w-[900px] mx-auto">
          <p className="text-lg text-gray-600 mb-6 font-medium lg:text-base md:text-[0.95rem] sm:text-[0.85rem]">
            {formattedDate}
          </p>

          <div
            className="text-lg font-normal leading-relaxed text-gray-800 mb-8 [&_p]:mb-4 [&_h1]:text-secondary-600 [&_h1]:mt-6 [&_h1]:mb-4 [&_h2]:text-secondary-600 [&_h2]:mt-6 [&_h2]:mb-4 [&_h3]:text-secondary-600 [&_h3]:mt-6 [&_h3]:mb-4 [&_ul]:ml-8 [&_ul]:mb-4 [&_ol]:ml-8 [&_ol]:mb-4 [&_a]:text-secondary-600 [&_a]:underline [&_a:hover]:text-secondary-700 lg:text-[1.05rem] md:text-base md:leading-normal sm:text-[0.95rem] sm:leading-normal"
            dangerouslySetInnerHTML={{ __html: event.description }}
          />

          {event.link && (
            <a
              href={event.link.uri}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6 py-3 px-8 bg-secondary-600 text-white no-underline rounded-md font-semibold transition-all duration-300 hover:bg-secondary-700 hover:-translate-y-0.5 md:py-2.5 md:px-6 md:text-[0.95rem] sm:py-2 sm:px-5 sm:text-[0.9rem]"
            >
              {event.link.title}
            </a>
          )}
        </div>
      </div>
    </>
  );
}
