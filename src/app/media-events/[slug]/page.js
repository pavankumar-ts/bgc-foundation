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
      <div className="bg-gradient-to-br min-h-[250px] md:min-h-[300px] flex justify-center items-center from-primary-500 to-primary-600 pt-24 md:pt-28 lg:pt-32 pb-8 md:pb-10 lg:pb-12 px-4 md:px-6 lg:px-8 text-center text-white">
        <div className="max-w-[1200px] mx-auto">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold m-0">
            {event.title}
          </h1>
        </div>
      </div>

      {/* Content Container */}
      <div className="max-w-[1200px] mx-auto my-4 md:my-6 lg:my-8 px-4 md:px-6 lg:px-8 pb-8 md:pb-10 lg:pb-12">
        {event.imageUrl && (
          <Image
            src={event.imageUrl}
            alt={event.imageAlt || event.title}
            width={1200}
            height={600}
            className="rounded-lg w-full h-auto object-cover mb-6 md:mb-8"
            priority
          />
        )}

        <div className="max-w-[900px] mx-auto">
          <div
            className="text-sm md:text-base lg:text-lg font-normal leading-relaxed text-gray-800 mb-6 md:mb-8 [&_p]:mb-3 [&_p]:md:mb-4 [&_h1]:text-secondary-600 [&_h1]:mt-4 [&_h1]:md:mt-6 [&_h1]:mb-3 [&_h1]:md:mb-4 [&_h1]:text-xl [&_h1]:md:text-2xl [&_h1]:lg:text-3xl [&_h2]:text-secondary-600 [&_h2]:mt-4 [&_h2]:md:mt-6 [&_h2]:mb-3 [&_h2]:md:mb-4 [&_h2]:text-lg [&_h2]:md:text-xl [&_h2]:lg:text-2xl [&_h3]:text-secondary-600 [&_h3]:mt-4 [&_h3]:md:mt-6 [&_h3]:mb-3 [&_h3]:md:mb-4 [&_h3]:text-base [&_h3]:md:text-lg [&_h3]:lg:text-xl [&_ul]:ml-6 [&_ul]:md:ml-8 [&_ul]:mb-3 [&_ul]:md:mb-4 [&_ol]:ml-6 [&_ol]:md:ml-8 [&_ol]:mb-3 [&_ol]:md:mb-4 [&_a]:text-secondary-600 [&_a]:underline [&_a:hover]:text-secondary-700"
            dangerouslySetInnerHTML={{ __html: event.description }}
          />

          {event.link && (
            <a
              href={event.link.uri}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 md:mt-6 py-2 md:py-2.5 lg:py-3 px-5 md:px-6 lg:px-8 bg-secondary-600 text-white no-underline rounded-md font-semibold transition-all duration-300 hover:bg-secondary-700 hover:-translate-y-0.5 text-sm md:text-base"
            >
              {event.link.title}
            </a>
          )}
        </div>
      </div>
    </>
  );
}
