import ProjectCard from '../components/ProjectCard';

export default function Home() {
  const projects = [
    {
      title: "Chesapeake Bay Tableau Dashboard",
      description: "Multi-page analytics dashboard allowing users to explore water quality statistics from Chesapeake Bay monitoring sites. Features include parameter controls, dynamic filtering, and KPI tracking.",
      tags: ["Tableau", "Data Visualization"],
      demoLink: "https://public.tableau.com/views/DATA303ChesapeakeWaterQualityDashboard/Overview?:language=en-US&:sid=&showOnboarding=true&:display_count=n&:origin=viz_share_link", // Add your Tableau Public Link here
      images: ["tableau_main.png", "tableau_page2.png", "tableau_page3.png"] 
    },
    {
      title: "Schools in the Philippines Flask Analytics App",
      description: "A live web application deployed on PythonAnywhere. Visualizes school data using Python, Flask, and Plotly.",
      tags: ["Flask", "Python", "Web Dev"],
      link: "https://github.com/HSweazey/Philippines_Flask_Dashboard",
      demoLink: "https://data303hannahs.pythonanywhere.com/",
      images: ["flask_preview.png"] 
    },
    {
      title: "Android Malware Classification",
      description: "A machine learning pipeline utilizing MobSF static analysis reports to classify Android APKs as malicious or benign. Involves feature extraction from JSON reports and vectorization.",
      tags: ["Python", "Machine Learning", "Cyber Security", "LLMs"],
      images: ["cci.png"]
    },
    {
      title: "Reading Spotify Playlist Generator",
      description: "An automation tool that generates music playlists tailored to specific books. Analyzes book atmosphere to curate matching tracks equal to the estimated reading time.",
      tags: ["Python", "Spotify API", "LLMs", "Automation"],
      link: "https://github.com/HSweazey/DATA-440-Book-Playlist-Generator"
    },
    {
      title: "Christmas Movie Picker",
      description: "A Python-based web application designed to randomly select a holiday movie to watch from a set database of movies.",
      tags: ["Python", "Web Development", "App"],
      link: "https://github.com/HSweazey/ChristmasMovie",
      demoLink: "christmasmovie-whb7htwefy9tbfma6vcnh4.streamlit.app"
    },
    {
      title: "Penney's Game Simulation",
      description: "A statistical simulation of Penney's Game implemented in Python. Explores different scoring approaches and probability visualization.",
      tags: ["Python", "Statistics", "Data Visualization"],
      link: "https://github.com/HSweazey/Roach-Sweazey_Penneys_Game",
      images: ["penneys_cards.png", "penneys_tricks.png"]
    },
    {
      title: "NYC Restaurant Health Inspection Database",
      description: "Practice project involving data cleaning, filtering, and analysis of NYC restaurant health inspection records.",
      tags: ["Python", "SQLite", "Data Cleaning"],
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
            Undergraduate Data Science Senior | Computer Science Concentration
          </h2>
          <p className="text-lg max-w-2xl text-gray-300 leading-relaxed">
            Hello! I am currently a senior at the College of William and Mary. Through my research, I specialize in the use of machine learning, LLMs for coding and malware identification, and data visualization My concentration in computer science has also exposed me to developing data structures, data containers, and overall code optimization. I have collaborated with peers on many different types of technical projects while also documenting individual ones. A mixture of both can be found below.
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
          Projects Portfolio
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard 
              key={index}
              title={project.title}
              description={project.description}
              tags={project.tags}
              link={project.link}
              // These two lines below were missing in your previous version!
              demoLink={project.demoLink}
              images={project.images}
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