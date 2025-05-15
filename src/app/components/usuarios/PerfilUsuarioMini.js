// components/usuarios/PerfilUsuarioMini.js
import Link from 'next/link';

function PerfilUsuarioMini({ nombre, email, username }) {
  return (
    <div style={{ 
      border: '1px solid #ccc',
      margin: '10px',
      padding: '15px',
      backgroundColor: '#f9f9f9',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      transition: 'transform 0.2s ease',
      ':hover': {
        transform: 'translateY(-2px)'
      }
    }}>
      <h3 style={{ 
        margin: '0 0 10px 0',
        color: '#333'
      }}>
        {nombre} <span style={{ color: '#666' }}>({username})</span>
      </h3>
      <p style={{ 
        margin: '5px 0',
        color: '#555'
      }}>
        <strong>Email:</strong> {email}
      </p>
      <Link href={`/usuarios/perfil/${username}`} style={{
        display: 'inline-block',
        marginTop: '10px',
        color: '#0070f3',
        textDecoration: 'none',
        ':hover': {
          textDecoration: 'underline'
        }
      }}>
        Ver perfil completo →
      </Link>
    </div>
  );
}

export default PerfilUsuarioMini;