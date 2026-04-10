import React from 'react';
import { ShoppingCart } from 'lucide-react';
import './Menu.css';

const Menu = () => {
  const menuItems = [
    {
      id: 1,
      name: "Spaghetti Carbonara",
      description: "Auténtica receta romana con guanciale crujiente, queso Pecorino Romano y pimienta negra sobre pasta recién hecha.",
      price: "$18.50",
      image: "/pasta_carbonara.png",
      tag: "Popular"
    },
    {
      id: 2,
      name: "Tagliatelle al Ragù",
      description: "Nuestra clásica salsa boloñesa cocida a fuego lento con carne de res y cerdo, sobre pasta de cinta." ,
      price: "$21.00",
      image: "/pasta_bolognese.png",
      tag: "Oferta Especial"
    },
    {
      id: 3,
      name: "Penne all'Arrabbiata",
      description: "Pasta corta en una salsa de tomate picante con ajo y chile rojo, terminada con perejil fresco.",
      price: "$16.00",
      image: "/hero_pasta.png",
      tag: ""
    }
  ];

  return (
    <div className="page-container menu-page">
      <div className="container animate-fade-in">
        <h1 className="section-title">Nuestro Menú</h1>
        <p className="menu-subtitle">Ofertas irresistibles y platos clásicos que te transportarán a Italia.</p>
        
        <div className="menu-grid">
          {menuItems.map(item => (
            <div key={item.id} className="menu-card glass-panel">
              <div className="menu-image-container">
                <img src={item.image} alt={item.name} className="menu-image" />
                {item.tag && <span className="menu-tag">{item.tag}</span>}
              </div>
              <div className="menu-details">
                <div className="menu-header">
                  <h3>{item.name}</h3>
                  <span className="menu-price">{item.price}</span>
                </div>
                <p className="menu-desc">{item.description}</p>
                <button className="btn btn-primary menu-btn">
                  <ShoppingCart size={16} /> Añadir al Pedido
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
