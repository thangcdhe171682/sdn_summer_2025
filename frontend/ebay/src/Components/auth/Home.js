import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif' }}>
      {/* Thanh điều hướng */}
      <header style={{ padding: '10px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #ccc' }}>
        <div>
          <strong>Hi thang!</strong>
        </div>
        <nav style={{ display: 'flex', gap: '15px' }}>
          <span>Daily Deals</span>
          <span>Brand Outlet</span>
          <span>Gift Cards</span>
          <span>Help & Contact</span>
        </nav>
      </header>

      {/* Logo và thanh tìm kiếm */}
      <section style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '15px 20px' }}>
        <div style={{ fontSize: '24px', color: '#e53238' }}>
          <strong>e</strong><span style={{ color: '#0064d2' }}>Bay</span>
        </div>
        <input type="text" placeholder="Search for anything" style={{ flex: 1, margin: '0 15px', padding: '8px', borderRadius: '4px' }} />
        <button style={{ backgroundColor: '#3665f3', color: 'white', padding: '10px 20px', borderRadius: '5px', border: 'none' }}>Search</button>
      </section>

      {/* Menu danh mục */}
      <nav style={{ display: 'flex', gap: '15px', padding: '10px 20px', borderBottom: '1px solid #ddd' }}>
        <span>eBay Live</span>
        <span>Motors</span>
        <span>Electronics</span>
        <span>Collectibles</span>
        <span>Home & Garden</span>
        <span>Clothing</span>
        <span>Toys</span>
        <span>Sporting Goods</span>
      </nav>

      {/* Banner chính */}
      <div style={{ backgroundColor: '#f16529', padding: '30px 20px', textAlign: 'center', color: 'white' }}>
        <h2>Complete your set. Your way.</h2>
        <p>Choose how you collect non-sport cards from your fave series.</p>
        <button style={{ backgroundColor: '#111', color: '#fff', padding: '10px 20px', borderRadius: '5px', marginTop: '10px' }}>Pull your next card</button>

        <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'center', gap: '30px' }}>
          <div>
            <img src="https://i.ebayimg.com/thumbs/images/g/xyz123/s-l300.jpg" alt="Singles" style={{ width: 80, height: 100 }} />
            <p>Singles</p>
          </div>
          <div>
            <img src="https://i.ebayimg.com/thumbs/images/g/abc123/s-l300.jpg" alt="Sealed packs" style={{ width: 80, height: 100 }} />
            <p>Sealed packs</p>
          </div>
          <div>
            <img src="https://i.ebayimg.com/thumbs/images/g/def123/s-l300.jpg" alt="Sealed boxes" style={{ width: 80, height: 100 }} />
            <p>Sealed boxes</p>
          </div>
        </div>
      </div>

      {/* Section sản phẩm trực tiếp */}
      <section style={{ padding: '30px 20px' }}>
        <h3>eBay Live</h3>
        <p>Tune in and shop curated experiences</p>
        <div style={{ display: 'flex', gap: '15px', overflowX: 'auto' }}>
          <img src="https://i.ebayimg.com/thumbs/images/g/xyz456/s-l300.jpg" alt="Live1" style={{ width: 150 }} />
          <img src="https://i.ebayimg.com/thumbs/images/g/abc456/s-l300.jpg" alt="Live2" style={{ width: 150 }} />
          <img src="https://i.ebayimg.com/thumbs/images/g/def456/s-l300.jpg" alt="Live3" style={{ width: 150 }} />
        </div>
      </section>
    </div>
  );
};

export default Home;
