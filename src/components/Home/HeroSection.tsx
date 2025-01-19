import Image from "next/image";

export default function HeroSection() {
    return (
        <div className="h-screen flex items-center justify-between overflow-x-hidden bg-gradient-to-r from-green-800 via-green-700 to-green-600 bg-opacity-50">
            {/* Left-aligned Text Content */}
            <div className="px-12">
                <div className="space-y-6 text-white max-w-lg">
                    <h1 className="text-5xl font-bold leading-tight">
                        Embrace the Healing Tradition of Acupuncture
                    </h1>
                    <p className="text-lg font-light">
                        Explore our innovative programs in Nepal&apos;s first acupuncture college. Empower your journey to holistic health.
                    </p>
                    <button className="py-3 px-8 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-300 mt-4">
                        Consult with Us
                    </button>
                </div>
            </div>

            {/* Right-aligned Image */}
            <div className="">
                <Image
                    src="/assets/RHESC1.jpg"
                    alt="Hero Image"
                    className="object-cover w-full h-full pr-20 rounded-2xl"
                    height={600} // You can adjust this height as per the design
                    width={1000} // Width adjusted to maintain aspect ratio
                />
            </div>
        </div>
    );
}
