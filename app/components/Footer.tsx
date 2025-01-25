export default function Footer() {
  return (
    <footer className="w-full bg-gray-100">
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <p className="text-gray-600">© {new Date().getFullYear()} EVFinder. All rights reserved.</p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-600 hover:text-gray-800">Privacy Policy</a>
            <a href="#" className="text-gray-600 hover:text-gray-800">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
} 