import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white p-4 pb-16 sm:p-8 sm:pb-20 font-sans text-gray-800">
      <main className="max-w-2xl mx-auto flex flex-col gap-6 sm:gap-12">
        {/* Profile Section */}
        <div className="bg-gray-50 p-6 sm:p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 text-center sm:text-left">
            Aman Labh
          </h1>
          <p className="text-sm sm:text-base text-gray-700 mb-4 text-center sm:text-left">
            I&apos;m a self-taught full stack developer; CS student, open-source enthusiast. I am currently building <strong className="text-blue-600">Kachni Bharni</strong>, a platform for artists to showcase their work.
          </p>
          <p className="text-sm sm:text-base text-gray-700 mb-4 text-center sm:text-left">
            At present, I am working as a full stack developer at <strong className="text-blue-600">Motojojo Pvt. Ltd.</strong> Also, I am assisting <strong className="text-blue-600">DU Desk</strong> as a Gen-AI Engineer as a Freelancer. I specialize in automating workflows and building intelligent systems using Agentic AI and Generative AI technologies.
          </p>
          <p className="text-sm sm:text-base text-gray-700 text-center sm:text-left">
            I&apos;m constantly building wild projects and diving deep into AI automation. Sometimes, I get caught up in writing blog posts, and I&apos;m always vibing to random music. Along the way, I also find myself exploring philosophy, trying to find peace amidst my chaotic mind.
          </p>
        </div>

        {/* Recent Articles Section */}
        <div className="bg-gray-50 p-6 sm:p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 text-center sm:text-left">
            My Recent Articles
          </h2>
          <ul className="list-disc list-inside text-sm sm:text-base text-gray-700 space-y-2">
            <li>
              <a href="https://medium.com/@hackaman4/kachni-bharni-6338254ae17b" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-500 hover:underline">
                Kachni Bharni
              </a>
            </li>
            <li>
              <a href="https://medium.com/@hackaman4/crafting-gen-ai-web-application-with-next-js-gemini-and-chatgpt-a-journey-into-ai-development-14f0d66acb98" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-500 hover:underline">
                Crafting Gen-Ai Web Application with Next.js
              </a>
            </li>
            <li>
              <a href="https://medium.com/@hackaman4/i-wonder-mind-in-black-canvas-d8becc3e0951" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-500 hover:underline">
                I Wonder Mind in Blank Canvas
              </a>
            </li>
          </ul>
        </div>

        {/* Connect with Me Section */}
        <div className="bg-gray-50 p-6 sm:p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 text-center sm:text-left">
            Connect with Me
          </h2>
          <p className="text-sm sm:text-base text-gray-700 mb-4 text-center sm:text-left">
            Feel free to stalk me at <a href="https://github.com" className="text-blue-600 hover:text-blue-500 hover:underline">GitHub</a>, <a href="https://x.com" className="text-blue-600 hover:text-blue-500 hover:underline">X (formerly Twitter)</a>, or <a href="https://linkedin.com" className="text-blue-600 hover:text-blue-500 hover:underline">LinkedIn</a>.
          </p>
          <p className="text-sm sm:text-base text-gray-700 mb-4 text-center sm:text-left">
            Help me fund my server⛁ costs and coffee ☕ addiction:
          </p>
          <div className="flex justify-center sm:justify-start">
            <a 
              href="https://buymeacoffee.com/amanlabh4x" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-medium py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-center gap-2"
            >
              <span>Buy Me a Coffee</span>
              <span>☕</span>
            </a>
          </div>
          <p className="text-sm sm:text-base text-gray-700 mt-4 text-center sm:text-left">
            Say hi at <a href="mailto:hey@amanlabh.me" className="text-blue-600 hover:text-blue-500 hover:underline">hey@amanlabh.me</a>
          </p>
        </div>
      </main>
    </div>
  );
}
