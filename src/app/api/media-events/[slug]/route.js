import { NextResponse } from 'next/server';

export async function GET(request, { params }) {
  const { slug } = await params;

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
      throw new Error('Failed to fetch media events');
    }

    const data = await response.json();

    // Filter by slug and field_add_to_bgc_foundation
    let eventData = data.data.find(event => {
      const eventSlug = event.attributes.field_slug_media?.replace('/', '') || '';
      return eventSlug === slug && event.attributes.field_add_to_bgc_foundation === true;
    });

    if (!eventData) {
      return NextResponse.json(
        { error: 'Event not found' },
        { status: 404 }
      );
    }

    // Get the image file
    const imageFile = data.included?.find(item =>
      item.type === 'file--file' && item.id === eventData.relationships?.field_thumbnail_image?.data?.id
    );

    const processedEvent = {
      id: eventData.id,
      title: eventData.attributes.title,
      date: eventData.attributes.field_media_date,
      description: eventData.attributes.field_media_description?.value || '',
      imageUrl: imageFile ? `https://admin.bangaloregastrocentre.com${imageFile.attributes.uri.url}` : null,
      imageAlt: imageFile ? imageFile.attributes.filename : '',
      slug: eventData.attributes.field_slug_media?.replace('/', '') || '',
      link: eventData.attributes.field_link || null,
    };

    return NextResponse.json(processedEvent);
  } catch (error) {
    console.error('Error fetching media event:', error);
    return NextResponse.json(
      { error: 'Failed to fetch media event', message: error.message },
      { status: 500 }
    );
  }
}
