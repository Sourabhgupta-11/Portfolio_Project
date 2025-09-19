import React from 'react';
import "../styles/footer.css";

export default function Footer() {
  return (
    <footer id="footer" className="footer py-4 border-top text-center">
      <div className="container">
        <p className="mb-1">© {new Date().getFullYear()} Sourabh Gupta</p>
        <small className="text-muted">Built with React & Bootstrap | Responsive • Interactive • Accessible</small>
      </div>
    </footer>
  );
}
