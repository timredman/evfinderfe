import Link from 'next/link';
import Image from 'next/image';

// This could be moved to a separate data file or fetched from an API
const companies = [
  {
    name: 'BMW',
    logo: '/logos/bmw.jpg',
    models: ['i4', 'iX', 'i7']
  },
  {
    name: 'Ford',
    logo: '/logos/ford.jpg',
    models: ['Mustang Mach-E', 'F-150 Lightning']
  },
  {
    name: 'Hyundai',
    logo: '/logos/hyundai.jpg',
    models: ['IONIQ 5', 'IONIQ 6', 'Kona Electric']
  },
  {
    name: 'Kia',
    logo: '/logos/kia.jpg',
    models: ['EV6', 'Niro EV']
  },
  {
    name: 'Tesla',
    logo: '/logos/tesla.jpg',
    models: ['Model 3', 'Model Y', 'Model S', 'Model X']
  },
  {
    name: 'Volkswagen',
    logo: '/logos/vw.jpg',
    models: ['ID.4', 'ID.Buzz']
  }
].sort((a, b) => a.name.localeCompare(b.name));

export default function CompaniesPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Companies</h1>
      
      <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
        {companies.map((company) => (
          <Link
            key={company.name}
            href={`/${company.name.toLowerCase()}`}
            className="block bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="p-6 flex items-center space-x-6">
              <div className="relative w-24 h-24 flex-shrink-0">
                <Image
                  src={company.logo}
                  alt={`${company.name} logo`}
                  fill
                  className="object-contain"
                />
              </div>
              
              <div className="flex-grow">
                <h2 className="text-xl font-semibold mb-2">{company.name}</h2>
                <p className="text-gray-600 text-sm">
                  {company.models.length} Models Available
                </p>
                <p className="text-gray-500 text-sm mt-1">
                  {company.models.join(', ')}
                </p>
              </div>
              
              <div className="text-blue-600">
                <svg 
                  className="w-6 h-6" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
} 