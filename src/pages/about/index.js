export default function AboutPage() {
    return (
      <div style={styles.container}>
        <h2>How to Make Pizza at Home 🍕</h2>
        <p>Making pizza from scratch is easier than you think — and way more delicious than store-bought!</p>
  
        <h3>Ingredients:</h3>
        <ul>
          <li>2 cups of flour</li>
          <li>1 tsp of dry yeast</li>
          <li>¾ cup warm water</li>
          <li>1 tbsp olive oil</li>
          <li>Pizza sauce, cheese, toppings of your choice</li>
        </ul>
  
        <h3>Steps:</h3>
        <ol>
          <li>Mix flour, yeast, water, and oil to form dough. Let it rise for 1 hour.</li>
          <li>Preheat oven to 475°F (245°C).</li>
          <li>Roll out the dough and add sauce, cheese, and toppings.</li>
          <li>Bake for 10–15 minutes until golden and bubbly.</li>
          <li>Slice, serve, and enjoy with friends (or solo — no shame!) 😄</li>
        </ol>
  
        <p>Tip: Use a pizza stone or cast-iron skillet for a crispier crust!</p>
      </div>
    );
  }
  
  const styles = {
    container: {
      padding: '2rem',
      fontFamily: 'Arial, sans-serif',
      lineHeight: 1.6,
    },
  };