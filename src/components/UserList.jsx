import React, { useState, useEffect } from 'react';

export const UserList = () => {
    const [users, setUsers] = useState([]);
  
    useEffect(() => {
      const fetchUsers = async () => {
        try {
          const response = await fetch('https://jsonplaceholder.typicode.com/users');
          if (!response.ok) {
            throw new Error('Не удалось получить доступ к пользователям');
          }
          const data = await response.json();
          setUsers(data);
        } catch (error) {
          console.error('Ошибка:', error);
        }
      };
  
      fetchUsers();
    }, []);
  
    return (
      <div className="user-list-container">
        <h2>Список пользователей</h2>
        <ul className="user-list">
          {users.map(user => (
            <li key={user.id} className="user-item">
              <strong>{user.name}</strong> - {user.email}
            </li>
          ))}
        </ul>
      </div>
    );
  };
  