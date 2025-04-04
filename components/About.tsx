import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">
          About Me
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4 order-2 md:order-1">
            <p className="text-gray-600 dark:text-gray-300">
            I'm, a passionate Software Engineer with a knack for building intuitive web applications and scalable backend systems. <br/> <br/>

            With over 3 years of professional experience in full-stack development, I thrive on solving complex engineering challenges and transforming ideas into impactful digital solutions. I specialize in modern technologies like React, Next.js, Node.js, and Python, and I've worked extensively with cloud platforms like AWS to deliver high-performance, reliable software.

    
            </p>
            
            <p className="text-gray-600 dark:text-gray-300">
            I'm always eager to learn, grow, and contribute to meaningful projects — whether it's optimizing infrastructure, designing slick user interfaces, or experimenting with side projects on the weekend.
            </p>

            <div className="pt-4">
              <h3 className="text-xl font-semibold mb-2">Quick Facts</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                <li>🎓 M.S. in Computer Science - IUB</li>
                <li>💼 3+ years of professional experience</li>
                <li>🌍 Based in Austin, Texas</li>
                <li>🚀 Love building side projects</li>
              </ul>
            </div>
          </div>

          <div className="relative group order-1 md:order-2">
            <div className="w-full h-[400px] bg-gradient-to-tr from-purple-500 to-blue-500 rounded-lg overflow-hidden">
              {/* You can add your image here */}
              <img
                src="/image.jpg" // Add your photo path here
                alt="Profile"
                className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
              />
            </div>
          </div>
        </div>
        <div className="flex gap-4 mt-8">
        <Image
            src="/aws_cp.png"
            alt="AWS Certified Solutions Architect – Associate"
            width={150}
            height={150}
          />
          <Image
            src="/aws_sa.png"
            alt="AWS Certified Solutions Architect – Associate"
            width={150}
            height={150}
          />
          
        </div>
       
      </div>
    </section>
  )
} 