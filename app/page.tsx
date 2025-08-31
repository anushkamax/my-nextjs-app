import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-800">
      {/* Header */}
      <header className="flex justify-between items-center p-4 bg-red-700 text-white shadow-md">
        <div className="flex items-center gap-2 text-xl font-bold">
          <span className="text-white">සඳලි මංගල</span>
        </div>
        <nav className="hidden sm:flex items-center gap-4">
          <a href="#" className="hover:underline">මුල් පිටුව</a>
          <a href="#" className="hover:underline">පැතිකඩ</a>
          <a href="#" className="hover:underline">සෙවීම</a>
          <a href="#" className="hover:underline">පිවිසීම</a>
          <a href="#" className="hover:underline">ලියාපදිංචිය</a>
        </nav>
      </header>

      {/* Main Content - Search and Profiles */}
      <main className="flex-1 p-8">
        <section className="bg-white rounded-lg p-6 shadow-lg mb-8 text-center">
          <h2 className="text-xl font-semibold mb-4">ඔබේ ජීවිතයේ ආදරය සොයන්න</h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <input
              type="text"
              placeholder="නම"
              className="px-4 py-2 border rounded-full w-full sm:w-auto"
            />
            <input
              type="number"
              placeholder="වයස"
              className="px-4 py-2 border rounded-full w-full sm:w-auto"
            />
            <button className="bg-red-700 text-white rounded-full px-6 py-2 hover:bg-red-800">
              සොයන්න
            </button>
          </div>
        </section>

        <section className="text-center mb-8">
          <h2 className="text-2xl font-semibold mb-4">ප්‍රමුඛ පැතිකඩ</h2>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="w-full sm:w-1/3 md:w-1/4 lg:w-1/5 bg-white p-4 rounded-lg shadow-md">
              <div className="relative w-full h-40 mb-2 rounded-lg overflow-hidden">
                <Image
                  src="https://placehold.co/300x400/FFD1DC/FFFFFF?text=Bride"
                  alt="Bride Profile 1"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
              <p>මනාලිය</p>
            </div>
            <div className="w-full sm:w-1/3 md:w-1/4 lg:w-1/5 bg-white p-4 rounded-lg shadow-md">
              <div className="relative w-full h-40 mb-2 rounded-lg overflow-hidden">
                <Image
                  src="https://placehold.co/300x400/98C1D9/FFFFFF?text=Groom"
                  alt="Groom Profile 1"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
              <p>මනාලයා</p>
            </div>
            <div className="w-full sm:w-1/3 md:w-1/4 lg:w-1/5 bg-white p-4 rounded-lg shadow-md">
              <div className="relative w-full h-40 mb-2 rounded-lg overflow-hidden">
                <Image
                  src="https://placehold.co/300x400/FFD1DC/FFFFFF?text=Bride"
                  alt="Bride Profile 2"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
              <p>මනාලිය</p>
            </div>
          </div>
          <a
            href="#"
            className="mt-6 inline-block bg-red-700 text-white rounded-full px-8 py-3 hover:bg-red-800"
          >
            තවත් බලන්න
          </a>
        </section>

        <section className="text-center">
          <h2 className="text-2xl font-bold mb-4">අදම සඳලි මංගල හා එක්වන්න</h2>
          <p className="text-lg mb-4">ඔබේ ආදරය සොයාගැනීමට ඇති අවස්ථාව මඟ නොහරින්න.</p>
          <a
            href="#"
            className="rounded-full bg-red-700 text-white font-medium text-lg sm:text-xl px-8 py-3 transition-colors hover:bg-red-800"
          >
            ලියාපදිංචි වන්න
          </a>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-red-900 text-white py-4 text-center text-sm">
        <p>FAQs | Terms | Privacy Policy | Contact Info</p>
        <p>&copy; 2024 Sandali Mangala. සියලු හිමිකම් ඇවිරිණි.</p>
      </footer>
    </div>
  );
}
