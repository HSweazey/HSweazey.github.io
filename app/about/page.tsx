import dynamic from 'next/dynamic';

// Dynamically import the map so it only loads in the browser
const PlacesMap = dynamic(() => import('@/components/PlacesMap'), { 
  ssr: false,
  loading: () => <div className="h-96 w-full bg-gray-100 rounded-lg animate-pulse flex items-center justify-center">Loading map...</div>
});

export default function AboutPage() {
  return (
    <div className="animate-fadeIn">
      <section className="mb-12">
        {/* Main Header */}
        <h2 className="text-2xl font-bold text-gray-900 mb-8 border-b-2 border-blue-500 inline-block pb-2">
          About Me
        </h2>
        
        {/* Custom Intro Paragraphs */}
        <p className="text-gray-700 mb-4 leading-relaxed text-lg">
          When someone asks me "Where are you from?", I never quite know how to answer.
        </p>
        <p className="text-gray-700 mb-10 leading-relaxed text-lg">
          As a proud military brat (go Air Force!), I have lived in 9 different places and each has left a distinct mark on who I am today. I am endlessly lucky to have the experience I do at my age and can't wait to continue honing my world experience.
        </p>
        
        {/* 1. The Map sits perfectly beneath the "9 different places" mention */}
        <PlacesMap />

        {/* 2. Transition Text / Sub-header */}
        <div className="mt-16 mb-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            Life in Pictures
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Beyond the maps and coordinates, here are a few snapshots of my journey, my projects, and the things I enjoy doing.
          </p>
        </div>

        {/* 3. The Photocards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Photocard 1 */}
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:border-blue-200 hover:shadow-md transition-all">
            <img 
              src="/images/last_first.JPG" 
              alt="First image" 
              className="w-full h-48 object-cover object-center" 
            />
            <div className="p-4">
              <p className="text-gray-700 leading-relaxed">
                <strong>Last First Day:</strong> Last first day of classes with my roommates who have kept me sane for four years.
              </p>
            </div>
          </div>

          {/* Photocard 2 */}
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:border-blue-200 hover:shadow-md transition-all">
            <img 
              src="/images/da_bean.jpeg"
              alt="The Bean" 
              className="w-full h-48 object-cover object-center" 
            />
            <div className="p-4">
              <p className="text-gray-700 leading-relaxed">
                <strong>Da Bean:</strong> Back to my Chicagoean roots and visiting my favorite landmark!
              </p>
            </div>
          </div>

          {/* Photocard 3 (Placeholder to keep the 3-column grid balanced) */}
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:border-blue-200 hover:shadow-md transition-all">
            <img 
              src="/images/tribe_football.jpeg" 
              alt="First image" 
              className="w-full h-48 object-cover object-center" 
            />
            <div className="p-4">
              <p className="text-gray-700 leading-relaxed">
                <strong>Go Green and Gold!:</strong> Attended a football game this past fall. I always have a blast supporting my school and team!
              </p>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}