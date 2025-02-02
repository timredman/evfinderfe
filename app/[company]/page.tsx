import Image from 'next/image';
import Link from 'next/link';

interface CompanyDetails {
  name: string;
  logo: string;
  description: string;
  foundedYear: number;
  headquarters: string;
  website: string;
  models: {
    name: string;
    image: string;
    trim: string;
    startingPrice: string;
    range: string;
  }[];
}

// This could be moved to a data file or fetched from an API
const getCompanyDetails = (company: string): CompanyDetails => {
  // Example data for Tesla - you'd want to expand this for all companies
  const companies: Record<string, CompanyDetails> = {
    tesla: {
      name: 'Tesla',
      logo: '/logos/tesla.jpg',
      description: 'Tesla designs and manufactures electric vehicles, battery energy storage, solar panels, and related products and services.',
      foundedYear: 2003,
      headquarters: 'Austin, Texas, United States',
      website: 'https://www.tesla.com',
      models: [
        {
          name: 'Model 3',
          image: '/tesla-model-3.jpg',
          trim: 'Long Range',
          startingPrice: '$41,990',
          range: '358 miles'
        },
        {
          name: 'Model Y',
          image: '/tesla-model-y.jpg',
          trim: 'Performance',
          startingPrice: '$53,990',
          range: '303 miles'
        }
        // Add more models as needed
      ]
    }
    // Add more companies as needed
  };

  return companies[company.toLowerCase()] || companies.tesla; // Fallback to Tesla if company not found
};

export default function CompanyPage({ params }: { params: { company: string } }) {
  const companyDetails = getCompanyDetails(params.company);

  return (
    <main className="container mx-auto px-4 py-8">
      {/* Company Header */}
      <div className="flex items-center gap-6 mb-8">
        <div className="relative w-32 h-32">
          <Image
            src={companyDetails.logo}
            alt={`${companyDetails.name} logo`}
            fill
            className="object-contain"
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-2">{companyDetails.name}</h1>
          <p className="text-gray-600 max-w-2xl">{companyDetails.description}</p>
        </div>
      </div>

      {/* Company Information */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">Company Information</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <div>
            <p className="text-gray-600">Founded</p>
            <p className="font-medium">{companyDetails.foundedYear}</p>
          </div>
          <div>
            <p className="text-gray-600">Headquarters</p>
            <p className="font-medium">{companyDetails.headquarters}</p>
          </div>
          <div>
            <p className="text-gray-600">Website</p>
            <a 
              href={companyDetails.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              {companyDetails.website.replace('https://', '')}
            </a>
          </div>
        </div>
      </div>

      {/* Available Models */}
      <h2 className="text-2xl font-bold mb-6">Available Models</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {companyDetails.models.map((model) => (
          <Link
            key={model.name}
            href={`/${params.company.toLowerCase()}/${model.name.toLowerCase().replace(' ', '-')}/${model.trim.toLowerCase().replace(' ', '-')}`}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="relative h-48 w-full">
              <Image
                src={model.image}
                alt={`${model.name}`}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{model.name}</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-gray-600 text-sm">Starting at</p>
                  <p className="font-medium">{model.startingPrice}</p>
                </div>
                <div>
                  <p className="text-gray-600 text-sm">EPA Range</p>
                  <p className="font-medium">{model.range}</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
} 