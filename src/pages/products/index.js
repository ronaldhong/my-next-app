import React from 'react';

export default function ProductsPage({ products }) {
  return (
    <div style={styles.container}>
      <h1>Our Product List 🛒</h1>
      <div style={styles.productList}>
        {products.map((product) => (
          <div key={product.id} style={styles.productCard}>
            <img src={product.image} alt={product.title} style={styles.image} />
            <h3>{product.title}</h3>
            <p>${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps() { // getStaticProps for static generation

  // Fetch data from Fake Store API
  let res;
  try {
    res = await fetch('https://fakestoreapi.com/products');
  } catch (error) {
    console.error('Network error:', error);
    return {
      props: {
        products: [], // Return an empty array if fetch fails
      },
    };
  }
  
  const data = await res.json();

  return {
    props: {
      products: data, // Pass the fetched data as props
    },
  };
}

// Basic styles for the product listing page
const styles = {
  container: {
    padding: '2rem',
    fontFamily: 'Arial, sans-serif',
  },
  productList: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
    gap: '1rem',
  },
  productCard: {
    backgroundColor: '#f5f5f5',
    borderRadius: '8px',
    padding: '1rem',
    textAlign: 'center',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
  },
  image: {
    maxWidth: '100%',
    borderRadius: '4px',
    marginBottom: '0.5rem',
  },
};