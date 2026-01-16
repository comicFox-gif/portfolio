import React from 'react';
import './portfolio.css';

const Portfolio = ({ onViewWork }) => {
  return (
    <div className="web3-container">
      <nav className="navbar">
        <div className="logo">ComicFox<span className="highlight">.sol</span></div>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
        </div>
      </nav>

      <main>
        <section className="hero">
          <div className="hero-content">
            <p className="greeting">HELLO, I AM</p>
            <h1 className="title">COMICFOX.SOL</h1>
            <p className="subtitle">
              Building the decentralized web, one block at a time.
              <br />
              Full Stack Web3 Developer.
            </p>
            <div className="cta-group">
              <button className="primary-btn" onClick={onViewWork}>View Work</button>
              <button className="secondary-btn" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>Contact Me</button>
            </div>
          </div>
        </section>

        <section id="about" className="about-section">
          <h2 className="section-title">ABOUT ME</h2>
          <div className="about-text">
            <p>
              I am a passionate Full Stack Web3 Developer with a <strong>B.Sc in Computer Science from Tansian University, Nigeria</strong>.
              My journey is defined by a drive to build trustless, decentralized systems that empower users.
            </p>
            <br />
            <p>
              Specializing in the intersection of blockchain architecture and frontend experience, I create seamless dApps
              that bridge the gap between complex smart contracts and intuitive user interfaces.
            </p>
          </div>
        </section>

        <section className="skills-section">
          <h2 className="section-title">TECHNICAL ARSENAL</h2>
          <div className="skills-grid">
            <div className="skill-category">
              <h3>Web3 Development</h3>
              <div className="skill-tags">
                <span>React</span>
                <span>Next.js</span>
                <span>Ethers.js</span>
              </div>
            </div>
            <div className="skill-category">
              <h3>Community Leadership</h3>
              <div className="skill-tags">
                <span>Community Moderation</span>
                <span>Discord & Telegram</span>
                <span>Growth Strategy</span>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="projects-section">
          <h2 className="section-title">LATEST DROPS</h2>
          <div className="grid">
            {[
              { id: 1, title: "Neon NFT Market", desc: "A high-speed NFT trading platform built on Solana with low fees.", tags: ["Rust", "Next.js", "Solana"] },
              { id: 2, title: "DAO Governance", desc: "Voting mechanism for decentralized organizations with token-gated access.", tags: ["Solidity", "React", "IPFS"] },
              { id: 3, title: "DeFi Yield Vault", desc: "Smart contract protocol that optimizes staking rewards automatically.", tags: ["Hardhat", "DeFi", "ERC-4626"] },
              { id: 4, title: "EtherScale Mod", desc: "Moderated Discord & Telegram channels for a Layer 2 scaling solution, growing engagement by 40%.", tags: ["Discord", "Telegram", "Community"] },
              { id: 5, title: "PixelVerse Manager", desc: "Community Manager for a play-to-earn gaming hub on Discord and Telegram, handling announcements and safety.", tags: ["Discord", "Telegram", "Management"] }
            ].map((project) => (
              <div key={project.id} className="card">
                <div className="card-header">
                  <span>Project 0{project.id}</span>
                  <span className="status-dot"></span>
                </div>
                <div className="card-body">
                  <h3>{project.title}</h3>
                  <p>{project.desc}</p>
                </div>
                <div className="card-footer">
                  {project.tags.map((tag, i) => (
                    <span key={i}>{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="contact-section">
          <h2 className="section-title">GET IN TOUCH</h2>
          <div className="contact-content">
            <p>Ready to launch your next Web3 project? Let's connect.</p>
            <div className="contact-details">
              <a href="mailto:perrywire01@icloud.com" className="contact-link">
                perrywire01@icloud.com
              </a>
              <a href="https://x.com/perrywire_" target="_blank" rel="noopener noreferrer" className="contact-link">
                @perrywire_
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>© 2026 ComicFox.sol // All Rights Reserved</p>
        <div className="socials">
          <a href="https://x.com/perrywire_" target="_blank" rel="noopener noreferrer">X (Twitter)</a> • <span>GitHub</span> • <a href="https://discord.com" target="_blank" rel="noopener noreferrer">Discord (@comicfox.sol)</a>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;