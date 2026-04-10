import React, { useState } from 'react';
import { Edit2, Trash2, UserPlus, X } from 'lucide-react';
import './Admin.css';

const Users = () => {
  const [users, setUsers] = useState([
    { id: 1, name: 'Carlos Díaz', email: 'carlos@example.com', role: 'Admin', status: 'Activo' },
    { id: 2, name: 'María Gómez', email: 'maria@example.com', role: 'Camarero', status: 'Activo' },
    { id: 3, name: 'Juan Pérez', email: 'juan@example.com', role: 'Cliente', status: 'Inactivo' },
    { id: 4, name: 'Luisa Fernández', email: 'luisa@example.com', role: 'Repartidor', status: 'Activo' },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  // Form states
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: 'Cliente',
    status: 'Activo'
  });

  const handleOpenModal = (user = null) => {
    if (user) {
      setCurrentUser(user);
      setFormData(user);
    } else {
      setCurrentUser(null);
      setFormData({ name: '', email: '', role: 'Cliente', status: 'Activo' });
    }
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setCurrentUser(null);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentUser) {
      // Update existing user
      setUsers(users.map(u => (u.id === currentUser.id ? { ...formData, id: u.id } : u)));
    } else {
      // Create new user
      const newId = users.length > 0 ? Math.max(...users.map(u => u.id)) + 1 : 1;
      setUsers([...users, { ...formData, id: newId }]);
    }
    handleCloseModal();
  };

  const handleDelete = (id) => {
    if (window.confirm("¿Estás seguro de que deseas eliminar este usuario?")) {
      setUsers(users.filter(u => u.id !== id));
    }
  };

  return (
    <div className="page-container">
      <div className="container animate-fade-in">
        <h1 className="section-title">Gestión de Usuarios</h1>
        
        <div className="glass-panel" style={{ padding: '2rem' }}>
          <div className="admin-header">
            <h2>Lista de Usuarios</h2>
            <button className="btn btn-primary" onClick={() => handleOpenModal()} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <UserPlus size={18} /> Nuevo Usuario
            </button>
          </div>
          
          <div className="admin-table-container">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Nombre</th>
                  <th>Email</th>
                  <th>Rol</th>
                  <th>Estado</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {users.map(user => (
                  <tr key={user.id}>
                    <td>#{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.role}</td>
                    <td>
                      <span className={`status-badge ${user.status === 'Activo' ? 'status-active' : 'status-inactive'}`}>
                        {user.status}
                      </span>
                    </td>
                    <td>
                      <div className="action-btns">
                        <button className="btn-icon" onClick={() => handleOpenModal(user)} title="Editar"><Edit2 size={18} /></button>
                        <button className="btn-icon" onClick={() => handleDelete(user.id)} title="Eliminar"><Trash2 size={18} /></button>
                      </div>
                    </td>
                  </tr>
                ))}
                {users.length === 0 && (
                  <tr>
                    <td colSpan="6" style={{ textAlign: 'center' }}>No hay usuarios registrados.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* CRUD Modal */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content animate-fade-in">
            <div className="modal-header">
              <h3>{currentUser ? 'Editar Usuario' : 'Nuevo Usuario'}</h3>
              <button className="close-btn" onClick={handleCloseModal}><X size={24} /></button>
            </div>
            
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Nombre y Apellido</label>
                <input 
                  type="text" 
                  name="name" 
                  className="form-control" 
                  value={formData.name}
                  onChange={handleChange}
                  required 
                />
              </div>
              
              <div className="form-group">
                <label>Email</label>
                <input 
                  type="email" 
                  name="email" 
                  className="form-control" 
                  value={formData.email}
                  onChange={handleChange}
                  required 
                />
              </div>

              <div className="form-group">
                <label>Rol</label>
                <select name="role" className="form-control" value={formData.role} onChange={handleChange}>
                  <option value="Admin">Admin</option>
                  <option value="Camarero">Camarero</option>
                  <option value="Repartidor">Repartidor</option>
                  <option value="Cliente">Cliente</option>
                </select>
              </div>

              <div className="form-group">
                <label>Estado</label>
                <select name="status" className="form-control" value={formData.status} onChange={handleChange}>
                  <option value="Activo">Activo</option>
                  <option value="Inactivo">Inactivo</option>
                </select>
              </div>

              <div className="modal-footer">
                <button type="button" className="btn btn-outline" onClick={handleCloseModal}>Cancelar</button>
                <button type="submit" className="btn btn-primary">{currentUser ? 'Actualizar' : 'Guardar'}</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Users;
