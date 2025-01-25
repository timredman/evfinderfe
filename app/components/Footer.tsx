export default function Footer() {
  return (
    <footer className="w-full bg-gray-100">
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <p className="text-primary">© {new Date().getFullYear()} EVFinder. All rights reserved.</p>
          <div className="flex space-x-4">
            <a href="#" className="text-primary hover:text-secondary">Privacy Policy</a>
            <a href="#" className="text-primary hover:text-secondary">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
} 