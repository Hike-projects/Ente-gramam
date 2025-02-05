import React from "react";
import "./Home.css"; // Ensure this CSS file contains the updated styles

const Home = () => {
  return (
    <div>
      {/* Sticky Navigation Bar */}
      <nav className="navbar">
        <div className="navbar-container">
          {/* Logo as a Rounded Square */}
          <div className="navbar-logo">
            <img src="/logo.png" alt="Logo" />
          </div>
          <h1 className="navbar-title">Ente Gramam</h1>
        </div>
      </nav>

      {/* Main Content Section */}
      <main className="content">
        <h2>Welcome to Ente Gramam</h2>
        <p>Here's what's happening in our village:</p>

        {/* Cards Section */}
        <div className="cards-container">
          <div className="card">
            <h3>Event 1</h3>
            <p>Description of the event or activity happening in the village.</p>
          </div>
          <div className="card">
            <h3>Event 2</h3>
            <p>Details about another exciting event happening soon.</p>
          </div>
          <div className="card">
            <h3>Event 3</h3>
            <p>Don't miss this upcoming event! Catch all the details here.</p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 Ente Gramam. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
