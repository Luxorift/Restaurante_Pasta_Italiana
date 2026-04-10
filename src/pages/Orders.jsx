import React, { useState } from 'react';
import { ChefHat, CheckCircle } from 'lucide-react';
import './Admin.css';

const Orders = () => {
  const [orders] = useState([
    { id: 201, table: 'Mesa 4', items: '2x Carbonara, 1x Vino Tinto', total: '$45.00', status: 'Preparando', time: '19:30' },
    { id: 202, table: 'Mesa 12', items: '1x Lasagna, 1x Tiramisu', total: '$28.00', status: 'Servido', time: '19:15' },
    { id: 203, table: 'Mesa 2', items: '3x Bolognese, 3x Agua', total: '$65.00', status: 'Pendiente', time: '19:40' },
  ]);

  return (
    <div className="page-container">
      <div className="container animate-fade-in">
        <h1 className="section-title">Pedidos en Local</h1>
        
        <div className="glass-panel" style={{ padding: '2rem' }}>
          <div className="admin-header">
            <h2>Comandas Activas</h2>
          </div>
          
          <div className="admin-table-container">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Comanda</th>
                  <th>Mesa</th>
                  <th>Detalle del Pedido</th>
                  <th>Total</th>
                  <th>Hora</th>
                  <th>Estado</th>
                  <th>Cocina</th>
                </tr>
              </thead>
              <tbody>
                {orders.map(order => (
                  <tr key={order.id}>
                    <td>#{order.id}</td>
                    <td style={{ fontWeight: 'bold', color: 'var(--secondary)' }}>{order.table}</td>
                    <td style={{ maxWidth: '250px' }}>{order.items}</td>
                    <td>{order.total}</td>
                    <td>{order.time}</td>
                    <td>
                      <span className={`status-badge ${
                        order.status === 'Preparando' ? 'status-delivering' : 
                        order.status === 'Servido' ? 'status-completed' : 'status-pending'
                      }`}>
                        {order.status}
                      </span>
                    </td>
                    <td>
                      <div className="action-btns">
                        <button className="btn-icon" title="A Cocina"><ChefHat size={18} /></button>
                        <button className="btn-icon" title="Marcar Servido"><CheckCircle size={18} /></button>
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

export default Orders;
