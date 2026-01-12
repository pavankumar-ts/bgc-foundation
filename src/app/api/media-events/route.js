import { NextResponse } from 'next/server';

// Function to strip HTML tags and limit to 20 words
function processDescription(html) {
  // Remove HTML tags
  const text = html.replace(/<\/?[^>]+(>|$)/g, "");
  // Split into words and limit to 8
  const words = text.split(/\s+/).slice(0, 8);
  // Join words and add ellipsis if truncated
  return words.join(" ") + (words.length === 8 ? "..." : "");
}

export async function GET() {
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
      throw new Error('Failed to fetch media events');
    }

    const data = await response.json();

    // Filter events based on field_add_to_bgc_foundation
    const filteredEvents = data.data.filter(event =>
      event.attributes.field_add_to_bgc_foundation === true
    );

    // Process events
    const events = filteredEvents.map(event => {
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

    return NextResponse.json(events);
  } catch (error) {
    console.error('Error fetching media events:', error);
    return NextResponse.json(
      { error: 'Failed to fetch media events', message: error.message },
      { status: 500 }
    );
  }
}
