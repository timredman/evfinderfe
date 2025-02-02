import VehicleCard from './components/VehicleCard';

export default function Home() {
  return (
    <main className="flex-grow">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">Welcome to EV Finder</h1>
        <p className="text-center text-gray-600 max-w-copy mx-auto">
          Thinking about buying an electric vehicle, but not sure which one to choose? We&apos;ve got you covered. We&apos;ve created a tool that will help you find the best electric vehicle for your needs.
        </p>
      </div>
      <div className="container mx-auto px-4 py-8 grid grid-cols-4 gap-4">
        <VehicleCard
          company="Tesla"
          model="Model 3"
          trim="Long Range"
          imageUrl="/tesla-model-3.jpg"
        />
        <VehicleCard
          company="Ford"
          model="Mustang Mach-E"
          trim="GT"
          imageUrl="/ford-mach-e.jpg"
        />
        <VehicleCard
          company="Hyundai"
          model="IONIQ 5"
          trim="Limited"
          imageUrl="/hyundai-ioniq5.jpg"
        />
        <VehicleCard
          company="Kia"
          model="EV6"
          trim="GT-Line"
          imageUrl="/kia-ev6.jpg"
        />
      </div>
    </main>
  );
}
