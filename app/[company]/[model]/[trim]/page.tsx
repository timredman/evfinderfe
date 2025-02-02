import Image from 'next/image';
import Link from 'next/link';

interface PageProps {
  params: {
    company: string;
    model: string;
    trim: string;
  };
}

export default function VehicleDetailPage({ params }: PageProps) {
  const { company,model,trim } = params;
  
  return (
    <main className="container mx-auto px-4 py-8">
      {/* Back Link */}
      <Link 
        href="/" 
        className="inline-flex items-center mb-6 text-blue-600 hover:text-blue-800"
      >
        <svg 
          className="w-5 h-5 mr-2" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          />
        </svg>
        Back to Vehicles
      </Link>

      {/* Hero Image */}
      <div className="relative w-full h-96 mb-8">
        <Image
          src={`/${company.toLowerCase()}-${model.toLowerCase().replace(' ', '-')}.jpg`}
          alt={`${company} ${model}`}
          fill
          className="object-cover rounded-lg"
        />
      </div>

      {/* Vehicle Information */}
      <div className="bg-white rounded-lg shadow-md p-8">
        <div className="mb-6">
          <h1 className="text-3xl font-bold mb-2">{model}</h1>
          <p className="text-xl text-gray-600">{company}</p>
          <p className="text-lg text-gray-500">{trim} Edition</p>
        </div>

        {/* Specifications Grid */}
        <div className="grid grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl font-semibold mb-4">Specifications</h2>
            <dl className="space-y-2">
              <div>
                <dt className="text-gray-600">Range</dt>
                <dd className="font-medium">358 miles</dd>
              </div>
              <div>
                <dt className="text-gray-600">0-60 mph</dt>
                <dd className="font-medium">3.1 seconds</dd>
              </div>
              <div>
                <dt className="text-gray-600">Top Speed</dt>
                <dd className="font-medium">162 mph</dd>
              </div>
            </dl>
          </div>
          
          <div>
            <h2 className="text-xl font-semibold mb-4">Features</h2>
            <ul className="space-y-2 text-gray-700">
              <li>• All-Wheel Drive</li>
              <li>• Advanced Autopilot</li>
              <li>• Premium Interior</li>
              <li>• 19" Wheels</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
} 