// pages/usuarios/perfil/[username].js
import { useRouter } from 'next/router';
import Link from 'next/link';

function PaginaPerfilUsuario({ usuario }) {
  const router = useRouter();
  const { username } = router.query;

  if (router.isFallback) {
    // Necesario si getStaticPaths tiene fallback: true o 'blocking'
    return <div>Cargando perfil...</div>;
  }

  if (!usuario) {
    return (
      <div>
        <p>Usuario con username '{username}' no encontrado.</p>
        <Link href="/usuarios">Volver al listado de usuarios</Link>
      </div>
    );
  }

  return (
    <div>
      <h1>Perfil de: {usuario.nombre}</h1>
      <p>Username: {username}</p>
      <p>Email: {usuario.email}</p>
      <p>Rol: {usuario.rol}</p>
      <br />
      <Link href="/usuarios">Volver al listado de usuarios</Link>
      <br />
      <Link href="/">Volver al Inicio</Link>
    </div>
  );
}

// Versión con getStaticProps (comentada por defecto)
/*
export async function getStaticPaths() {
  // Simulación: normalmente obtendrías usernames de una API o BD
  const paths = [
    { params: { username: 'usuarioEjemplo' } },
    { params: { username: 'anaCoder' } },
  ];

  return {
    paths,
    fallback: true // o 'blocking' o false
  };
}

export async function getStaticProps({ params }) {
  const { username } = params;
  const usuariosSimulados = {
    'usuarioEjemplo': {
      id: 'u001',
      nombre: 'Usuario Ejemplo',
      email: 'ejemplo@test.com',
      rol: 'Miembro'
    },
    'anaCoder': {
      id: 'u002',
      nombre: 'Ana Coder',
      email: 'ana@test.com',
      rol: 'Admin'
    },
  };

  const usuario = usuariosSimulados[username] || null;

  if (!usuario) {
    return { notFound: true };
  }

  return {
    props: { usuario },
    revalidate: 60 // ISR: regenera la página cada 60 segundos
  };
}
*/

// Versión con getServerSideProps (activa por defecto)
export async function getServerSideProps(context) {
  const { username } = context.params;

  // Simulación de carga de datos del usuario específico
  const usuariosSimulados = {
    'usuarioEjemplo': {
      id: 'u001',
      nombre: 'Usuario Ejemplo',
      email: 'ejemplo@test.com',
      rol: 'Miembro'
    },
    'anaCoder': {
      id: 'u002',
      nombre: 'Ana Coder',
      email: 'ana@test.com',
      rol: 'Admin'
    },
  };

  const usuario = usuariosSimulados[username] || null;

  if (!usuario) {
    // Opción 1: Manejar el "no encontrado" en la página
    return { props: { usuario: null } };
    
    // Opción 2: Mostrar página 404 (más común con getStaticProps)
    // return { notFound: true };
  }

  return {
    props: { usuario }
  };
}

export default PaginaPerfilUsuario;