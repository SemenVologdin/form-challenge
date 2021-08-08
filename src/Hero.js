import React from 'react';

export const Hero = ({ handleLogout }) => {
  return (
    <section className="hero">
      <nav>
        <h2>Welcome</h2>
        <button onClick={handleLogout}>Log Out</button>
      </nav>
    </section>
  );
};
