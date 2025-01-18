import React, { useState, useEffect } from "react";

const PointsPage = () => {
  const [pointsHistory, setPointsHistory] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    Promise.all([
      fetch(`${process.env.REACT_APP_BACKEND_URI}/api/history`).then((response) => response.json()),
      fetch(`${process.env.REACT_APP_BACKEND_URI}/api/users`).then((response) => response.json())
    ]).then(([historyData, usersData]) => {
      setPointsHistory(historyData);
      setUsers(usersData);
    });
  }, []);

  return (
    <div style={{
      maxWidth: '800px',
      margin: '40px auto',
      padding: '20px',
      backgroundColor: '#f9f9f9',
      border: '1px solid #ddd',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)'
    }}>
      <h1 style={{
        fontSize: '24px',
        fontWeight: 'bold',
        marginBottom: '10px'
      }}>Points History</h1>
      <table style={{
        borderCollapse: 'collapse',
        width: '100%'
      }}>
        <thead>
          <tr>
            <th style={{
              backgroundColor: '#f0f0f0',
              padding: '10px',
              textAlign: 'left',
              border: '1px solid #ddd'
            }}>User Name</th>
            <th style={{
              backgroundColor: '#f0f0f0',
              padding: '10px',
              textAlign: 'left',
              border: '1px solid #ddd'
            }}>Points</th>
            <th style={{
              backgroundColor: '#f0f0f0',
              padding: '10px',
              textAlign: 'left',
              border: '1px solid #ddd'
            }}>Timestamp</th>
          </tr>
        </thead>
        <tbody>
          {pointsHistory.map((historyEntry) => (
            <tr key={historyEntry._id}>
              <td style={{
                padding: '10px',
                textAlign: 'left',
                border: '1px solid #ddd'
              }}>{users.find((user) => user._id === historyEntry.userId)?.name}</td>
              <td style={{
                padding: '10px',
                textAlign: 'left',
                border: '1px solid #ddd'
              }}>{historyEntry.points}</td>
              <td style={{
                padding: '10px',
                textAlign: 'left',
                border: '1px solid #ddd'
              }}>{new Date(historyEntry.timestamp).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PointsPage;