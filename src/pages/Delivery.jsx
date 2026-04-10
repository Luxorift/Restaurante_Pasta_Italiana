import React, { useState } from 'react';
import { MapPin, Phone, Truck } from 'lucide-react';
import './Admin.css';

const Delivery = () => {
  const [deliveries] = useState([
    { id: 101, customer: 'Ana López', address: 'Calle Falsa 123', total: '$34.50', status: 'En Camino', time: '14:30' },
    { id: 102, customer: 'Pedro Martínez', address: 'Av. Siempre Viva 742', total: '$21.00', status: 'Pendiente', time: '14:45' },
    { id: 103, customer: 'Sofía Castro', address: 'Plaza Mayor 5', total: '$56.00', status: 'Entregado', time: '13:15' },
  ]);

  return (
    <div className="page-container">
      <div className="container animate-fade-in">
        <h1 className="section-title">Gestión de Delivery</h1>
        
        <div className="glass-panel" style={{ padding: '2rem' }}>
          <div className="admin-header">
            <h2>Pedidos para Llevar</h2>
          </div>
          
          <div className="admin-table-container">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Orden</th>
                  <th>Cliente / Dirección</th>
                  <th>Total</th>
                  <th>Hora Pedido</th>
                  <th>Estado</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {deliveries.map(delivery => (
                  <tr key={delivery.id}>
                    <td>#{delivery.id}</td>
                    <td>
                      <div><strong>{delivery.customer}</strong></div>
                      <div style={{ fontSize: '0.8rem', color: '#a0a0a0', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                        <MapPin size={12} /> {delivery.address}
                      </div>
                    </td>
                    <td>{delivery.total}</td>
                    <td>{delivery.time}</td>
                    <td>
                      <span className={`status-badge ${
                        delivery.status === 'En Camino' ? 'status-delivering' : 
                        delivery.status === 'Entregado' ? 'status-completed' : 'status-pending'
                      }`}>
                        {delivery.status}
                      </span>
                    </td>
                    <td>
                      <div className="action-btns">
                        <button className="btn-icon" title="Contactar"><Phone size={18} /></button>
                        <button className="btn-icon" title="Asignar Repartidor"><Truck size={18} /></button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Delivery;
