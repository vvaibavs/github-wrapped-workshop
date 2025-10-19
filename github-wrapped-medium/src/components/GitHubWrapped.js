import React, { useState } from 'react';
import axios from 'axios';
import './GitHubWrapped.css';

const GitHubWrapped = () => {
  const [username, setUsername] = useState('');
  const [token, setToken] = useState('');
  const [userData, setUserData] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const fetchGitHubData = async () => {
    if (!username.trim()) return;
    setLoading(true);
    setError('');

    try {
      const headers = {};
      if (token.trim()) {
        headers.Authorization = `token ${token}`;
        setIsAuthenticated(true);
      }

      // TODO: Fetch user data using axios and setUserData
      // TODO: Fetch repos data and setRepos accordingly
      // TODO: Set showResults(true) and currentSlide(0) when done

    } catch (err) {
      // ✅ Keep error handling
      if (err.response?.status === 401) {
        setError('Invalid token. Please check your GitHub Personal Access Token.');
      } else if (err.response?.status === 404) {
        setError('User not found. Please check the username and try again.');
      } else if (err.response?.status === 403) {
        setError('Rate limit exceeded. Please try again later.');
      } else {
        setError('An error occurred while fetching data. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  const getTopLanguages = () => {
    // TODO: Iterate through repos and count occurrences of each language
    // Return an array of top 5 languages sorted by frequency
  };

  const getTopRepos = () => {
    // TODO: Sort repos by most recently updated and stars as a tiebreaker
    // Return top 3 repos
  };

  const getMostRecentRepo = () => {
    // TODO: Return the most recently updated repo
  };

  const nextSlide = () => {
    if (currentSlide < 4) setCurrentSlide(currentSlide + 1);
  };

  const prevSlide = () => {
    if (currentSlide > 0) setCurrentSlide(currentSlide - 1);
  };

  const resetWrapped = () => {
    setShowResults(false);
    setCurrentSlide(0);
    setUserData(null);
    setRepos([]);
    setUsername('');
    setToken('');
    setIsAuthenticated(false);
  };

  if (!showResults) {
    return (
      <div className="github-wrapped">
        <div className="welcome-screen">
          <h1>🎵 GitHub Wrapped 2025 🎵</h1>
          <p>Discover your GitHub year in review</p>

          <div className="input-section">
            {/* TODO: Add input fields for GitHub username and optional token */}
            {/* TODO: Add a "Generate Wrapped" button that calls fetchGitHubData */}
          </div>

          {error && <div className="error-message">{error}</div>}
        </div>
      </div>
    );
  }

  const slides = [
    // TODO: Implement slide to display user info (avatar, name, etc.)
    // TODO: Implement slide to show overall stats
    // TODO: Implement slide for top languages
    // TODO: Implement slide for top repos
    // TODO: Implement final summary slide
  ];

  return (
    <div className="github-wrapped">
      <div className="wrapped-container">
        {slides[currentSlide]}
        
        <div className="navigation">
          {currentSlide > 0 && (
            <button onClick={prevSlide} className="nav-btn prev-btn">
              ← Previous
            </button>
          )}
          
          <div className="slide-indicators">
            {slides.map((_, index) => (
              <span 
                key={index} 
                className={`indicator ${index === currentSlide ? 'active' : ''}`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
          
          {currentSlide < slides.length - 1 && (
            <button onClick={nextSlide} className="nav-btn next-btn">
              Next →
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default GitHubWrapped;
