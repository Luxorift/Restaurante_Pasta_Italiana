import React from 'react';
import { ArrowRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Landing.css';

const Landing = () => {
  return (
    <div className="landing-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content container animate-fade-in">
          <h1 className="hero-title">
            El Auténtico Sabor de <span className="text-primary">Italia</span> en tu Mesa
          </h1>
          <p className="hero-subtitle">
            Pastas artesanales hechas a mano diariamente. Ingredientes frescos, recetas familiares y una experiencia culinaria inolvidable.
          </p>
          <div className="hero-buttons">
            <Link to="/menu" className="btn btn-primary">
              Ver Ofertas y Menú <ArrowRight size={18} style={{ marginLeft: '8px', verticalAlign: 'middle' }} />
            </Link>
            <Link to="/admin/orders" className="btn btn-outline">
              Hacer Reserva
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section container">
        <div className="feature-card glass-panel">
          <Star className="feature-icon" size={40} />
          <h3>Recetas Originales</h3>
          <p>Transmitidas de generación en generación desde el corazón de la Toscana.</p>
        </div>
        <div className="feature-card glass-panel">
          <Star className="feature-icon" size={40} />
          <h3>Ingredientes Frescos</h3>
          <p>Tomates importados de San Marzano y aceite de oliva extra virgen.</p>
        </div>
        <div className="feature-card glass-panel">
          <Star className="feature-icon" size={40} />
          <h3>Ambiente Exclusivo</h3>
          <p>Una cena romántica o una reunión familiar con la mejor atención.</p>
        </div>
      </section>
    </div>
  );
};

export default Landing;
