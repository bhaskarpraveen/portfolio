import Character3D from "./Character3D";

export default function Hero() {
    return (
      <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden pt-20 sm:pt-0">
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          {/* Text Content */}
          <div className="text-center lg:text-left space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
                Bhaskar Praveen Naidu
              </span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-200">
              Software Engineer
            </h2>
            <p className="text-xl text-gray-300 max-w-lg mb-4">
              Building elegant solutions to complex problems
            </p>
            <p className="text-lg text-gray-400 max-w-lg mb-6">
              Like this character, I adapt and customize solutions to fit your unique needs. Let&apos;s craft something extraordinary together.
            </p>
            <div className="pt-4">
              <a
                href="mailto:bhaskarpraveen14@gmail.com"
                className="inline-block px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Let&apos;s build something fun
              </a>
            </div>
          </div>
          
          {/* 3D Character */}
          <div className="h-[700px] relative flex items-center justify-center">
            <div className="w-full h-full">
              <Character3D />
            </div>
          </div>
        </div>
      </section>
    )
  } 