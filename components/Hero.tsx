export default function Hero() {
    return (
      <section className="min-h-screen flex items-center justify-center px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
              Bhaskar Praveen Naidu
            </span>
          </h1>
          <h2 className="text-2xl md:text-3xl mb-8 text-gray-700 dark:text-gray-300">
            Software Engineer
          </h2>
          <p className="text-xl mb-12 text-gray-600 dark:text-gray-400">
            Building elegant solutions to complex problems
          </p>
          <a
            href="mailto:bhaskarpraveen14@gmail.com"
            className="px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </section>
    )
  } 