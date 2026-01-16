import React from 'react';
import './portfolio.css';

const ProjectSamples = ({ onBack }) => {
  const projects = [
    { id: 1, title: "Neon NFT Market", desc: "A high-speed NFT trading platform built on Solana with low fees.", tags: ["Rust", "Next.js", "Solana"] },
    { id: 2, title: "DAO Governance", desc: "Voting mechanism for decentralized organizations with token-gated access.", tags: ["Solidity", "React", "IPFS"] },
    { id: 3, title: "DeFi Yield Vault", desc: "Smart contract protocol that optimizes staking rewards automatically.", tags: ["Hardhat", "DeFi", "ERC-4626"] },
    { id: 4, title: "EtherScale Mod", desc: "Moderated Discord & Telegram channels for a Layer 2 scaling solution, growing engagement by 40%.", tags: ["Discord", "Telegram", "Community"] },
    { id: 5, title: "PixelVerse Manager", desc: "Community Manager for a play-to-earn gaming hub on Discord and Telegram, handling announcements and safety.", tags: ["Discord", "Telegram", "Management"] },
    { id: 6, title: "CryptoWallet UI", desc: "A sleek, non-custodial wallet interface supporting multiple chains.", tags: ["React Native", "Ethers.js"] },
    { id: 7, title: "Token Vesting dApp", desc: "Platform for claiming vested tokens with linear release schedules.", tags: ["Vue", "Web3.js"] }
  ];

  return (
    <div className="web3-container">
      <nav className="navbar">
        <div className="logo">ComicFox<span className="highlight">.sol</span></div>
        <button className="secondary-btn" onClick={onBack}>← Back Home</button>
      </nav>

      <main>
        <section className="projects-section">
          <h2 className="section-title">ALL PROJECTS</h2>
          <div className="grid">
            {projects.map((project) => (
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
      </main>

      <footer className="footer">
        <p>© 2026 ComicFox.sol // All Rights Reserved</p>
        <div className="socials">
          <span>Twitter</span> • <span>GitHub</span> • <a href="https://discord.com" target="_blank" rel="noopener noreferrer">Discord (@comicfox.sol)</a>
        </div>
      </footer>
    </div>
  );
};

export default ProjectSamples;