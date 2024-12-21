import { Heart, ChevronLeft } from 'lucide-react';

const About = () => {
    return (
        <div className="max-w-md mx-auto bg-gray-50 min-h-screen">
            {/* Header */}
            <header className="bg-black/50 text-white p-4 flex items-center">
                <ChevronLeft className="w-6 h-6"/>
                <span className="ml-2">9:09</span>
                <div className="ml-auto flex items-center gap-2">
                    <div className="w-4 h-4 bg-blue-600 rounded-full flex items-center justify-center text-xs">
                        R
                    </div>
                </div>
            </header>

            {/* Hero Section with Offers */}
            <div className="relative">
                <img
                    src="/api/placeholder/400/200"
                    alt="Tokyo cityscape"
                    className="w-full h-48 object-cover"
                />

                {/* Special Offers Card */}
                <div className="mx-4 -mt-6 relative">
                    <div className="bg-white rounded-xl p-4 shadow-lg">
                        <div className="flex items-center gap-2 mb-2">
                            <span className="text-sm text-gray-600">SK-II</span>
                        </div>
                        <h2 className="text-lg font-semibold mb-2">Get Special Offer</h2>
                        <div className="text-orange-500 font-bold mb-3">Up to 9% discount</div>
                        <button className="bg-orange-400 text-white px-4 py-2 rounded-lg">
                            View More
                        </button>
                    </div>
                </div>
            </div>

            {/* Categories */}
            <div className="p-4">
                <h3 className="text-lg font-semibold mb-4">Explore Tokyo's Best Category</h3>
                <div className="flex justify-between mb-6">
                    {['All', 'Dessert', 'Beauty', 'Retail'].map((category) => (
                        <div key={category} className="flex flex-col items-center">
                            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-2">
                                <span className="text-orange-500">{category[0]}</span>
                            </div>
                            <span className="text-sm">{category}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Store Cards Grid */}
            <div className="p-4 grid grid-cols-2 gap-4">
                {/* Parfaiteria Bei Card */}
                <div className="bg-white rounded-xl overflow-hidden shadow">
                    <div className="relative">
                        <img
                            src="/api/placeholder/200/150"
                            alt="Dessert"
                            className="w-full h-32 object-cover"
                        />
                        <Heart className="absolute top-2 right-2 text-white"/>
                        <div className="absolute bottom-2 left-2 bg-white rounded-full p-1">
                            <div
                                className="w-4 h-4 bg-blue-600 rounded-full flex items-center justify-center text-xs text-white">
                                R
                            </div>
                        </div>
                    </div>
                    <div className="p-3">
                        <h4 className="font-medium">Parfaiteria Bei</h4>
                        <div className="flex gap-2 mt-2">
              <span className="bg-orange-100 text-orange-600 text-xs px-2 py-1 rounded">
                Dessert
              </span>
                            <span className="bg-orange-100 text-orange-600 text-xs px-2 py-1 rounded">
                Exclusive
              </span>
                        </div>
                    </div>
                </div>

                {/* Muji Card */}
                <div className="bg-white rounded-xl overflow-hidden shadow">
                    <div className="relative">
                        <img
                            src="/api/placeholder/200/150"
                            alt="Muji store"
                            className="w-full h-32 object-cover"
                        />
                        <Heart className="absolute top-2 right-2 text-white"/>
                        <div className="absolute bottom-2 left-2 bg-white rounded-full p-1">
                            <div
                                className="w-4 h-4 bg-blue-600 rounded-full flex items-center justify-center text-xs text-white">
                                R
                            </div>
                        </div>
                    </div>
                    <div className="p-3">
                        <h4 className="font-medium">Muji</h4>
                        <div className="flex gap-2 mt-2">
              <span className="bg-orange-100 text-orange-600 text-xs px-2 py-1 rounded">
                Retail
              </span>
                            <span className="bg-orange-100 text-orange-600 text-xs px-2 py-1 rounded">
                Exclusive
              </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;