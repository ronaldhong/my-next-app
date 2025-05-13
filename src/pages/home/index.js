// import Header from '../components/Header';
import Header from '../../components/Header/Header.js';

export default function HomePage() {
  return (
    <>
      <main style={styles.main}>
        <h2>Welcome to My Next.js App 👋</h2>
        <p>This is the home page, built using the Pages Router.</p>
        <section style={styles.section}>
          <h3>Why Next.js?</h3>
          <ul>
            <li>Fast routing</li>
            <li>Server-side rendering</li>
            <li>API support</li>
            <li>File-based routing</li>
          </ul>
        </section>
      </main>
    </>
  );
}

const styles = {
  main: {
    padding: '1.5rem',
    fontFamily: 'Arial, sans-serif',
  },
  section: {
    marginTop: '2rem',
    background: '#f0f0f0',
    padding: '1rem',
    borderRadius: '8px',
  },
};