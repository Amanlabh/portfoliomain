import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 p-4 pb-16 sm:p-8 sm:pb-20 font-sans text-gray-100">
      <main className="max-w-2xl mx-auto flex flex-col gap-8 sm:gap-12">
        {/* Profile Section */}
        <div className="bg-gray-800 p-6 sm:p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-700">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4 text-center sm:text-left">
            Aman Labh
          </h1>
          <p className="text-sm sm:text-base text-gray-300 mb-4 text-center sm:text-left">
            I&apos;m a self-taught full stack developer; CS student, open-source enthusiast. I am currently building <strong className="text-blue-400">Kachni Bharni</strong>, a platform for artists to showcase their work.
          </p>
          <p className="text-sm sm:text-base text-gray-300 mb-4 text-center sm:text-left">
            At present, I am working as a full stack developer at <strong className="text-blue-400">Motojojo Pvt. Ltd.</strong> Also, I am assisting <strong className="text-blue-400">DU Desk</strong> as a Gen-AI Engineer as a Freelancer. Building my concept of targeting the right audience and solving their problems with my engineering skills.
          </p>
          <p className="text-sm sm:text-base text-gray-300 text-center sm:text-left">
            I&apos;m constantly building wild projects and diving deep into learning blockchain on the Solana Chain. Sometimes, I get caught up in writing blog posts, and I&apos;m always vibing to random music. Along the way, I also find myself exploring philosophy, trying to find peace amidst my chaotic mind.
          </p>
        </div>

        {/* Recent Articles Section */}
        <div className="bg-gray-800 p-6 sm:p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-700">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 text-center sm:text-left">
            My Recent Articles
          </h2>
          <ul className="list-disc list-inside text-sm sm:text-base text-gray-300 space-y-2">
            <li>
              <a href="https://medium.com/@hackaman4/kachni-bharni-6338254ae17b" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 hover:underline">
                Kachni Bharni
              </a>
            </li>
            <li>
              <a href="https://medium.com/@hackaman4/crafting-gen-ai-web-application-with-next-js-gemini-and-chatgpt-a-journey-into-ai-development-14f0d66acb98" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 hover:underline">
                Crafting Gen-Ai Web Application with Next.js
              </a>
            </li>
            <li>
              <a href="https://medium.com/@hackaman4/i-wonder-mind-in-black-canvas-d8becc3e0951" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 hover:underline">
                I Wonder Mind in Blank Canvas
              </a>
            </li>
          </ul>
        </div>

        {/* Connect with Me Section */}
        <div className="bg-gray-800 p-6 sm:p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-700">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 text-center sm:text-left">
            Connect with Me
          </h2>
          <p className="text-sm sm:text-base text-gray-300 mb-4 text-center sm:text-left">
            Feel free to stalk me at <a href="https://github.com" className="text-blue-400 hover:text-blue-300 hover:underline">GitHub</a>, <a href="https://x.com" className="text-blue-400 hover:text-blue-300 hover:underline">X (formerly Twitter)</a>, or <a href="https://linkedin.com" className="text-blue-400 hover:text-blue-300 hover:underline">LinkedIn</a>.
          </p>
          <p className="text-sm sm:text-base text-gray-300 mb-4 text-center sm:text-left">
            Help me fund my server⛁ costs and coffee ☕ addiction:
            <br />
            <strong className="text-blue-400">SOL:</strong> 8EnDrhdsgmiDCNZSd7Woqt5nRgqiqY6YJgSWkuweF8TM
            <br />
            <strong className="text-blue-400">UPI:</strong> amanlabh4@slc
          </p>
          <p className="text-sm sm:text-base text-gray-300 text-center sm:text-left">
            Say hi at <a href="mailto:hey@amanlabh.me" className="text-blue-400 hover:text-blue-300 hover:underline">hey@amanlabh.me</a>
          </p>
        </div>
      </main>

      {/* Footer Section */}
      <footer className="mt-12 flex flex-wrap gap-4 sm:gap-6 items-center justify-center w-full">
        <a
          className="flex items-center gap-2 text-sm sm:text-base text-gray-300 hover:text-white hover:underline hover:underline-offset-4 transition-colors duration-300"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
            className="filter invert"
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 text-sm sm:text-base text-gray-300 hover:text-white hover:underline hover:underline-offset-4 transition-colors duration-300"
          href="https://Assignmate.works"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
            className="filter invert"
          />
          Blog
        </a>
        <a
          className="flex items-center gap-2 text-sm sm:text-base text-gray-300 hover:text-white hover:underline hover:underline-offset-4 transition-colors duration-300"
          href="https://medium.com/@hackaman4"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
            className="filter invert"
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
