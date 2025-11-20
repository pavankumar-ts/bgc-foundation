import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Fetch doctors with included image files
    const response = await fetch(
      'https://admin.bangaloregastrocentre.com/jsonapi/node/doctors?include=field_doctor_picture',
      {
        cache: 'no-store',
        headers: {
          'Content-Type': 'application/vnd.api+json',
        },
      }
    );

    if (!response.ok) {
      throw new Error('Failed to fetch doctors data');
    }

    const data = await response.json();

    // Create a map of file IDs to their URLs from the included data
    const imageMap = {};
    if (data.included && Array.isArray(data.included)) {
      data.included.forEach(item => {
        if (item.type === 'file--file' && item.attributes?.uri?.url) {
          imageMap[item.id] = `https://admin.bangaloregastrocentre.com${item.attributes.uri.url}`;
        }
      });
    }

    // Filter doctors by specific departments
    const allowedDepartments = [
      'Medical Gastroenterology',
      'Surgical Gastroenterology',
      'Radiology',
      'Nutrition & Dietetics'
    ];

    const filteredDoctors = data.data.filter(doctor => {
      const department = doctor.attributes?.field_department;
      const name = doctor.attributes?.title;

      // Exclude Dr. Kajal Prakash
      if (name && name.toLowerCase().includes('kajal prakash')) {
        return false;
      }

      return department && allowedDepartments.includes(department);
    });

    // Format the doctors data with proper image URLs
    const formattedData = {
      ...data,
      data: filteredDoctors.map(doctor => ({
        ...doctor,
        imageUrl: doctor.relationships?.field_doctor_picture?.data?.id
          ? imageMap[doctor.relationships.field_doctor_picture.data.id]
          : null,
      })),
    };

    return NextResponse.json(formattedData);
  } catch (error) {
    console.error('Error fetching doctors:', error);
    return NextResponse.json(
      { error: 'Failed to fetch doctors data' },
      { status: 500 }
    );
  }
}
