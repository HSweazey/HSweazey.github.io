import ProjectCard from '../components/ProjectCard';

export default function Home() {
  // This is where you curate your projects. 
  // You can easily add/remove items from this list later.
  const projects = [
    {
      title: "Android Malware Classification",
      description: "A machine learning pipeline utilizing MobSF static analysis reports to classify Android APKs as malicious or benign. Involves feature extraction from JSON reports and vectorization.",
      tags: ["Python", "Machine Learning", "Cyber Security", "MobSF"],
      link: "https://github.com/HSweazey/CCI-Lab-Group-2-GitHub" // Update this later
    },
    {
      title: "Atmospheric Spotify Playlist Generator",
      description: "An automation tool that generates music playlists tailored to specific books. Analyzes book sentiment and vibe to curate tracks that match the reading atmosphere.",
      tags: ["Python", "Spotify API", "NLP", "Automation"],
      link: "https://github.com/HSweazey/DATA-440-Book-Playlist-Generator"
    },
    {
      title: "Christmas Movie Picker",
      description: "A Python-based web application designed to randomly select a holiday movie to watch. Built to solve decision fatigue during the festive season.",
      tags: ["Python", "Web Development", "App"],
      link: "https://github.com/HSweazey/ChristmasMovie"
    },
    {
      title: "Penny's Game Simulation",
      description: "A statistical simulation of Penny's Game implemented in Python. Features performance testing of different scoring approaches and probability visualization.",
      tags: ["Python", "Statistics", "Simulation"],
      link: "https://github.com/HSweazey/Roach-Sweazey_Penneys_Game"
    },
    {
      title: "NYC Taxi Data Analysis",
      description: "Comprehensive data cleaning and analysis of NYC taxi trip records. Includes factor conversion, outlier removal, and visualization of drop-off patterns.",
      tags: ["R", "Data Cleaning", "Visualization"],
      link: "https://github.com/HSweazey/NYC-Health-DB"
    }
  ];

  return (
    <main className="min-h-screen bg-lightBlue-50">
      {/* Hero Section */}
      <section className="bg-navy-900 text-white py-20 px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-4">
            Hannah Sweazey
          </h1>
          <h2 className="text-2xl text-lightBlue-100 font-light mb-6">
            Data Science Researcher | Cyber Security Enthusiast
          </h2>
          <p className="text-lg max-w-2xl text-gray-300 leading-relaxed">
            I bridge the gap between complex data and actionable security insights. 
            Currently focused on machine learning applications in Android security 
            and building automated tools for data analysis.
          </p>
          
          <div className="mt-8 flex gap-4">
            <a href="https://github.com/HSweazey" className="bg-action hover:bg-blue-600 text-white font-bold py-2 px-6 rounded transition-colors">
              GitHub
            </a>
            <a href="/files/Sweazey_Resume.pdf" className="border border-white hover:bg-white hover:text-navy-900 text-white font-bold py-2 px-6 rounded transition-colors">
              Resume
            </a>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="max-w-6xl mx-auto px-8 py-16">
        <h2 className="text-3xl font-bold text-navy-900 mb-8 border-b-4 border-action inline-block pb-2">
          Selected Projects
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard 
              key={index}
              title={project.title}
              description={project.description}
              tags={project.tags}
              link={project.link}
            />
          ))}
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-navy-900 text-center py-8 text-gray-400">
        <p>&copy; {new Date().getFullYear()} Hannah Sweazey. Built with Next.js & Tailwind.</p>
      </footer>
    </main>
  );
}