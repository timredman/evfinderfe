import Image from 'next/image';
import Link from 'next/link';

interface VehicleCardProps {
  company: string;
  model: string;
  trim: string;
  imageUrl: string;
}

export default function VehicleCard({ model, company, trim, imageUrl }: VehicleCardProps) {
  const href = `/${company.toLowerCase()}/${model.toLowerCase().replace(' ', '-')}/${trim.toLowerCase().replace(' ', '-')}`;
  
  return (
    <Link href={href} className="block">
      <div className="col-span-1 bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
        <div className="relative w-full h-48">
          <Image
            src={imageUrl}
            alt={`${company} ${model}`}
            fill
            className="object-cover"
          />
        </div>
        <div className="p-4">
          <h2 className="text-xl font-semibold">{model}</h2>
          <p className="text-gray-600">{company}</p>
          <p className="text-sm text-gray-500">{trim}</p>
        </div>
      </div>
    </Link>
  );
} 