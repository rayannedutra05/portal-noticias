export default function Footer() {
  return (
    <footer className="w-full bg-black text-gray-300 py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h2 className="text-white font-bold text-xl mb-2">THE KINETIC</h2>
          <p className="text-gray-400 text-sm">
            Defining the editorial landscape since 2024. Authority, velocity, and sharp perspective on the world's most critical events.
          </p>
        </div>

        <div>
          <h3 className="text-red-600 text-sm font-bold mb-2">NAVIGATION</h3>
          <ul className="space-y-1 text-gray-300 text-sm">
            <li><a href="/home" className="hover:text-white">Home</a></li>
            <li><a href="/news" className="hover:text-white">News</a></li>
            <li><a href="/faq" className="hover:text-white">FAQ</a></li>
            <li><a href="/contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-red-600 text-sm font-bold mb-2">CONNECT</h3>
          <ul className="space-y-1 text-gray-300 text-sm">
            <li><a href="#" className="hover:text-white">Twitter/X</a></li>
            <li><a href="#" className="hover:text-white">Instagram</a></li>
            <li><a href="#" className="hover:text-white">LinkedIn</a></li>
            <li><a href="#" className="hover:text-white">RSS Feed</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-red-600 text-sm font-bold mb-2">LEGAL</h3>
          <ul className="space-y-1 text-gray-300 text-sm">
            <li><a href="#" className="hover:text-white">Terms</a></li>
            <li><a href="#" className="hover:text-white">Privacy</a></li>
            <li><a href="#" className="hover:text-white">Ethics</a></li>
            <li><a href="#" className="hover:text-white">Masthead</a></li>
          </ul>
        </div>
      </div>

      <div className="mt-8 border-t border-gray-800 pt-4 text-gray-500 text-xs text-center">
        © 2024 THE KINETIC EDITORIAL. ALL RIGHTS RESERVED.
      </div>
    </footer>
  );
}
