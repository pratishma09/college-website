// import Image from "next/image";

export default function HeroSection() {
    return (
        <main className="flex-1 min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-900 via-green-800 to-green-700"></div>
        <div className="absolute inset-0 opacity-10 "></div>

        {/* Meridian Lines Animation */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Vertical Meridian */}
          <div className="absolute h-full w-[1px] bg-gradient-to-b from-transparent via-yellow-400/30 to-transparent left-1/4 animate-[meridianPulse_4s_ease-in-out_infinite]"></div>
          <div
            className="absolute h-full w-[1px] bg-gradient-to-b from-transparent via-yellow-400/30 to-transparent left-1/2 animate-[meridianPulse_4s_ease-in-out_infinite]"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute h-full w-[1px] bg-gradient-to-b from-transparent via-yellow-400/30 to-transparent right-1/4 animate-[meridianPulse_4s_ease-in-out_infinite]"
            style={{ animationDelay: "2s" }}
          ></div>

          {/* Horizontal Meridian */}
          <div
            className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-yellow-400/30 to-transparent top-1/3 animate-[meridianPulse_4s_ease-in-out_infinite]"
            style={{ animationDelay: "0.5s" }}
          ></div>
          <div
            className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-yellow-400/30 to-transparent bottom-1/3 animate-[meridianPulse_4s_ease-in-out_infinite]"
            style={{ animationDelay: "1.5s" }}
          ></div>

          {/* Acupuncture Points */}
          <div className="absolute h-2 w-2 rounded-full bg-yellow-400/50 top-1/3 left-1/4 animate-[pointPulse_2s_ease-in-out_infinite]"></div>
          <div
            className="absolute h-2 w-2 rounded-full bg-yellow-400/50 top-1/3 left-1/2 animate-[pointPulse_2s_ease-in-out_infinite]"
            style={{ animationDelay: "0.7s" }}
          ></div>
          <div
            className="absolute h-2 w-2 rounded-full bg-yellow-400/50 top-1/3 right-1/4 animate-[pointPulse_2s_ease-in-out_infinite]"
            style={{ animationDelay: "1.4s" }}
          ></div>

          <div
            className="absolute h-2 w-2 rounded-full bg-yellow-400/50 bottom-1/3 left-1/4 animate-[pointPulse_2s_ease-in-out_infinite]"
            style={{ animationDelay: "0.3s" }}
          ></div>
          <div
            className="absolute h-2 w-2 rounded-full bg-yellow-400/50 bottom-1/3 left-1/2 animate-[pointPulse_2s_ease-in-out_infinite]"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute h-2 w-2 rounded-full bg-yellow-400/50 bottom-1/3 right-1/4 animate-[pointPulse_2s_ease-in-out_infinite]"
            style={{ animationDelay: "1.7s" }}
          ></div>

          {/* Acupuncture Needles */}
          <div className="absolute h-16 w-[1px] bg-gradient-to-b from-white/80 to-transparent top-[calc(33%-16px)] left-1/4 transform -rotate-12 origin-bottom animate-[needleInsert_3s_ease-out_infinite]"></div>
          <div
            className="absolute h-16 w-[1px] bg-gradient-to-b from-white/80 to-transparent top-[calc(33%-16px)] right-1/4 transform rotate-12 origin-bottom animate-[needleInsert_3s_ease-out_infinite]"
            style={{ animationDelay: "1.5s" }}
          ></div>
          <div
            className="absolute h-16 w-[1px] bg-gradient-to-b from-white/80 to-transparent bottom-[calc(33%-16px)] left-1/2 transform -rotate-12 origin-top animate-[needleInsert_3s_ease-out_infinite]"
            style={{ animationDelay: "0.75s" }}
          ></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 py-12 text-center">
          <div className="inline-block px-4 py-1 bg-yellow-500/20 text-yellow-200 rounded-full text-sm font-medium mb-6 animate-[fadeIn_1s_ease-in]">
            Nepal&apos;s First Acupuncture College
          </div>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white mb-6 animate-[fadeIn_1s_ease-in]">
            Embrace the Healing Tradition of Acupuncture
          </h1>
          <p className="text-xl font-light text-white/90 max-w-2xl mx-auto mb-10 animate-[fadeIn_1s_ease-in_0.5s_both]">
            Explore our innovative programs that blend traditional Chinese medicine with modern healthcare practices.
            Begin your journey to becoming a certified acupuncture practitioner.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-[fadeIn_1s_ease-in_1s_both]">
            
          </div>

          {/* Educational Stats */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 animate-[fadeIn_1s_ease-in_1.5s_both]">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-3xl font-bold text-yellow-300 mb-1">10+</div>
              <div className="text-white/80">Years of Excellence</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-3xl font-bold text-yellow-300 mb-1">100+</div>
              <div className="text-white/80">Certified Graduates</div>
            </div>
            
          </div>
        </div>
      </main>
    );
}
