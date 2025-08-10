"use client";

interface Project {
  name: string;
  description: string;
  url: string;
  tech: string;
}

const projects: Project[] = [
  {
    name: "Buzzkill",
    description: "Currently developing a Flutter application - exciting details coming soon! This project represents the latest in my mobile development journey with cutting-edge Flutter techniques.",
    url: "#",
    tech: "Flutter",
  },
  {
    name: "Meals Application (Menu)",
    description: "A Flutter app showcasing a beautifully designed menu with meal categories, detailed recipes, and smooth navigation. Features custom animations and a modern UI.",
    url: "https://github.com/OusamaJamalEddin/meals_app",
    tech: "Flutter",
  },
  {
    name: "Flutter Chat App",
    description: "A responsive, modern chat application with colorful widgets, real-time messaging, and user authentication. Built with Firebase integration.",
    url: "https://github.com/OusamaJamalEddin/chat_app",
    tech: "Flutter",
  },
  {
    name: "Favorite Places App",
    description: "A Flutter app to save and manage your favorite places using Google Maps API integration. Features location tracking and image capture.",
    url: "https://github.com/OusamaJamalEddin/native_app",
    tech: "Flutter",
  },
  {
    name: "Expense Tracker",
    description: "Track your daily expenses with this intuitive Flutter app. Features expense categorization, charts, budget tracking, and data visualization.",
    url: "https://github.com/OusamaJamalEddin/expense_tracker",
    tech: "Flutter",
  },
  {
    name: "Shopping List App",
    description: "A simple and efficient Flutter app to manage your shopping lists. Add, edit, delete items with a clean interface and offline storage.",
    url: "https://github.com/OusamaJamalEddin/shoppingList_app",
    tech: "Flutter",
  },
  {
    name: "Flappy Bird Clone",
    description: "A faithful recreation of the classic Flappy Bird game using Unity. Features custom graphics, sound effects, and smooth gameplay mechanics.",
    url: "https://github.com/OusamaJamalEddin/FlappyBird_clone",
    tech: "Unity",
  },
  {
    name: "RockPaperScissors",
    description: "A simple Python implementation of the classic Rock Paper Scissors game. Play against the computer and test your luck!",
    url: "https://github.com/OusamaJamalEddin/RockPaperScissors",
    tech: "Python",
  },
  {
    name: "CeaserCipher",
    description: "A Python project that encrypts and decrypts messages using the Caesar Cipher technique. Great for learning about basic cryptography.",
    url: "https://github.com/OusamaJamalEddin/CeaserCipher",
    tech: "Python",
  },
  {
    name: "Blackjack",
    description: "A console-based Blackjack game written in Python. Play against the dealer, manage your hand, and try to win big!",
    url: "https://github.com/OusamaJamalEddin/Blackjack",
    tech: "Python",
  },
  {
    name: "TreasureHuntGame",
    description: "A fun Python adventure game where you search for hidden treasure. Explore, make choices, and see if you can find the prize!",
    url: "https://github.com/OusamaJamalEddin/TreasureHuntGame",
    tech: "Python",
  },
  {
    name: "Hangman (Paused)",
    description: "A Python version of the classic Hangman game. Development is currently paused, but you can check out the code on GitHub.",
    url: "https://github.com/OusamaJamalEddin/Hangman-In-progress-",
    tech: "Python",
  },
];

const Projects = () => {
  return (
    <div className="grid gap-8 sm:grid-cols-2">
      {projects.map((project) => {
        const isComingSoon = project.url === "#";
        
        if (isComingSoon) {
          return (
            <div
              key={project.name}
              className="group block p-6 rounded-xl bg-gray-700/80 backdrop-blur-sm border border-gray-600 hover:bg-gray-700 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl relative"
            >
              <div className="absolute top-4 right-4">
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-purple-600 text-white">
                  In Progress
                </span>
              </div>
              <div className="flex items-start justify-between mb-4 pr-20">
                <h3 className="font-bold text-lg text-white group-hover:text-purple-400 transition-colors duration-200 leading-tight">
                  {project.name}
                </h3>
              </div>
              <p className="text-sm text-gray-400 mb-4 leading-relaxed">
                {project.description}
              </p>
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-medium bg-gray-800 text-gray-300 border border-gray-600">
                  {project.tech}
                </span>
                <span className="text-xs text-purple-400">
                  Coming Soon 🚀
                </span>
              </div>
            </div>
          );
        }
        
        return (
          <a
            key={project.url}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group block p-6 rounded-xl bg-gray-700/80 backdrop-blur-sm border border-gray-600 hover:bg-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
          >
            <div className="flex items-start justify-between mb-4">
              <h3 className="font-bold text-lg text-white group-hover:text-blue-400 transition-colors duration-200 leading-tight">
                {project.name}
              </h3>
              <svg 
                className="w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors duration-200" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </div>
            <p className="text-sm text-gray-400 mb-4 leading-relaxed">
              {project.description}
            </p>
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-medium bg-gray-800 text-gray-300 border border-gray-600">
                {project.tech}
              </span>
              <span className="text-xs text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                View Project →
              </span>
            </div>
          </a>
        );
      })}
    </div>
  );
};

export default Projects;
