

export default function SquareListingPanel() {
    return (
      <div className="max-w-md mx-auto mt-10 p-6 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 rounded-3xl shadow-lg transform transition-transform duration-300 hover:scale-105">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-700">Button Grid</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {Array.from({ length: 9 }).map((_, index) => (
            <button
              key={index}
              className="w-full py-2 py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-dark-100 dark:focus:ring-dark-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 font-semibold rounded-xl shadow-md transition-all duration-500 hover:opacity-90 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 animate-fadeInBottom"
            >
              Button {index + 1}
            </button>
          ))}
        </div>
      </div>
    );
  }
  
  // Add the CSS for the fadeInBottom animation
  const styles = `
  @keyframes fadeInBottom {
    0% {
      opacity: 0;
      transform: translateY(20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .animate-fadeInBottom {
    animation: fadeInBottom 0.7s ease-out;
  }
  `;
  
  // Inject styles into the document
  if (typeof document !== 'undefined') {
    const styleSheet = document.createElement('style');
    styleSheet.type = 'text/css';
    styleSheet.innerText = styles;
    document.head.appendChild(styleSheet);
  }
