import Link from 'next/link';

export default function Home() {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1>🍋 Lemonade.gg Replica</h1>
        <p>Build Roblox Games with AI</p>
      </header>

      <section style={styles.hero}>
        <h2>Create Games Instantly</h2>
        <p>Describe your game idea in plain English. Our AI generates the code.</p>
        <Link href="/projects">
          <button style={styles.ctaButton}>Get Started →</button>
        </Link>
      </section>

      <section style={styles.features}>
        <div style={styles.feature}>
          <h3>🤖 AI-Powered</h3>
          <p>Natural language to Luau code</p>
        </div>
        <div style={styles.feature}>
          <h3>⚡ Fast</h3>
          <p>Generate code in seconds</p>
        </div>
        <div style={styles.feature}>
          <h3>🎮 Roblox Native</h3>
          <p>Direct Studio integration</p>
        </div>
        <div style={styles.feature}>
          <h3>📁 Version Control</h3>
          <p>Track all your generations</p>
        </div>
      </section>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '20px',
  },
  header: {
    textAlign: 'center',
    marginBottom: '40px',
    paddingTop: '40px',
  },
  hero: {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white',
    padding: '60px 20px',
    borderRadius: '10px',
    textAlign: 'center',
    marginBottom: '40px',
  },
  ctaButton: {
    background: '#fff',
    color: '#667eea',
    border: 'none',
    padding: '12px 30px',
    fontSize: '16px',
    borderRadius: '5px',
    cursor: 'pointer',
    fontWeight: 'bold',
    marginTop: '20px',
  },
  features: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '20px',
  },
  feature: {
    background: '#f5f5f5',
    padding: '20px',
    borderRadius: '8px',
    textAlign: 'center',
  },
};