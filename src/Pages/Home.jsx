//import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

function Home() {
  return (
    <>
      <Header title="Welcome to Floral Elegance" />
      <main>
        <section id="intro">
          <h2>About Us</h2>
          <p>Floral Elegance is your go-to flower shop for the freshest blooms, exquisite arrangements, and custom floral designs.</p>
          <p>We bring nature's beauty to your doorstep with flowers perfect for any occasion.</p>
          <p><em>Same-day delivery and personalized arrangements make your moments extra special.</em></p>
          <p>Delivering happiness through flowers since 2015.</p>
        </section>
        <section id="information">
          <h2>Flowers for Every Occasion</h2>
          <article><h3>Weddings</h3><p>Elegant roses, lilies, and peonies.</p></article>
          <article><h3>Birthdays</h3><p>Bright bouquets with sunflowers, gerberas, and daisies.</p></article>
          <article><h3>Anniversaries</h3><p>Red roses for love and passion.</p></article>

          <h2>Popular Collections</h2>
          <ul><li>Fresh Flower Bouquets</li><li>Seasonal Arrangements</li><li>Custom Designs</li></ul>

          <h2>Top Sellers</h2>
          <ol><li>Romantic Roses</li><li>Elegant Lilies</li><li>Vibrant Tulips</li><li>Baby’s Breath</li></ol>
        </section>
        <section id="gallery">
          <h2>Gallery</h2>
          <div className="image-grid">
            <img src="/pics/roses.jpg" alt="Roses" />
            <img src="/pics/lilies.jpg" alt="Lilies" />
            <img src="/pics/tulips.jpg" alt="Tulips" />
            <img src="/pics/baby-breath.jpg" alt="Baby Breath" />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Home;