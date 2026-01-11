'use client';

export default function YouTubeSection() {
  const videos = [
    {
      title: 'English',
      embedUrl: 'https://www.youtube.com/embed/bjNYQigS14s?si=pv4QtBNKOS1MyY_f',
      channelUrl: 'https://www.youtube.com/@BangaloreGastroCentreHospital'
    },
    {
      title: 'Kannada',
      embedUrl: 'https://www.youtube.com/embed/hb34SDVzgA0?si=f7FTXEFtb9g18jc_',
      channelUrl: 'https://www.youtube.com/@BGCHospitalsKannada'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Educational Resources
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            As a foundation, we are committed to educating people about gastroenterology and digestive health.
            Watch our educational videos in English and Kannada to learn about prevention, symptoms, and treatment of
            gastrointestinal conditions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {videos.map((video, index) => (
            <div key={index} className="space-y-4">
              <div className="aspect-video rounded-xl overflow-hidden shadow-xl border border-gray-200">
                <iframe
                  width="100%"
                  height="100%"
                  src={video.embedUrl}
                  title={`YouTube video - ${video.title}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
              <div className="text-center">
                <a
                  href={video.channelUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-red-600 hover:text-red-700 font-medium transition-colors"
                >
                  Subscribe to {video.title} Channel
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
