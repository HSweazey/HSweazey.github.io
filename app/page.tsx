import ProjectCard from '../components/ProjectCard';

export default function Home() {
  const projects = [
    {
      title: "Chesapeake Bay Tableau Dashboard",
      description: "Multi-page analytics dashboard allowing users to explore water quality statistics from Chesapeake Bay monitoring sites. Features include parameter controls, dynamic filtering, and KPI tracking.",
      tags: ["Tableau", "Data Visualization"],
      demoLink: "https://public.tableau.com/views/DATA303ChesapeakeWaterQualityDashboard/Overview?:language=en-US&:sid=&showOnboarding=true&:display_count=n&:origin=viz_share_link",
      images: ["tableau_page3.png", "tableau_main.png", "tableau_page2.png"] 
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
      link: "https://github.com/HSweazey/DATA-440-Book-Playlist-Generator",
      images: ["book_playlist.png", "book_playlist2.png"]
    },
    {
      title: "Art Museum Dashboard",
      description: "A statistical analysis of a local art museum, focusing on gender and racial disparities in the collection.",
      tags: ["Python", "Statistics", "Data Visualization"],
      link: "https://github.com/HSweazey/GSWS-Final",
      demoLink: "https://gsws-final-sweazey.streamlit.app/",
      images: ["guerilla1.png", "guerilla2.png", "guerilla3.png"]
    },
    {
      title: "Christmas Movie Picker",
      description: "A Python-based web application designed to randomly select a holiday movie to watch from a set database of movies.",
      tags: ["Python", "Web Development", "App"],
      link: "https://github.com/HSweazey/ChristmasMovie",
      demoLink: "https://christmasmovie-whb7htwefy9tbfma6vcnh4.streamlit.app/",
      images: ["movie_picker.png"]
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
    },
    {
      title: "Hardware Store Transaction Database",
      description: "Practice project involving data cleaning, filtering, and analysis of sample hardware store transaction records.",
      tags: ["Python", "SQLite", "Data Cleaning"],
      link: "https://github.com/HSweazey/Hardware-SQLDatabase"
    }
  ];

  return (
    <div className="animate-fadeIn">
      {/* Projects Grid */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-8 border-b-2 border-blue-500 inline-block pb-2">
          Projects Portfolio
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard 
              key={index}
              title={project.title}
              description={project.description}
              tags={project.tags}
              link={project.link}
              demoLink={project.demoLink}
              images={project.images}
            />
          ))}
        </div>
      </section>
      
      {/* Footer */}
      <footer className="text-center mt-16 pt-8 border-t border-gray-200 text-gray-400 text-sm">
        <p>&copy; {new Date().getFullYear()} Hannah Sweazey. Built with Next.js & Tailwind.</p>
      </footer>
    </div>
  );
}