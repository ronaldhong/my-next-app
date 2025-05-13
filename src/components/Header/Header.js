import Link from 'next/link';

const Header = () => {
  return (
    <header style={styles.header}>
      <h1>My Next.js App</h1>
      <nav style={styles.nav}>
        <Link href="/">Home</Link>
        <Link href="/products">Products</Link>
        <Link href="/about">About</Link>
        <Link href="/counter">Counter</Link>
        <Link href="/memo">React.memo</Link>
        <Link href="/useMemo">useMemo</Link>
        <Link href="/useCallback">useCallback</Link>

      </nav>
    </header>
  );
};

const styles = {
  header: {
    padding: '1rem',
    background: '#222',
    color: '#fff',
  },
  nav: {
    marginTop: '0.5rem',
    display: 'flex',
    gap: '1rem',
  },
};

export default Header;