import Link from 'next/link';
// Asegúrate que la ruta al componente sea correcta según tu estructura
import ProductoCard from '../../components/productos/ProductoCard';

function PaginaListadoProductos({ productos }) {
  return (
    <div>
      <h1>Listado de Productos</h1>
      {productos.map((producto) => (
        <ProductoCard
          key={producto.id}
          nombre={producto.nombre}
          precio={producto.precio}
        />
      ))}
      <br />
      <Link href="/">Volver al Inicio</Link>
      <br />
      <Link href="/productos/detalle/1">Ver Detalle Producto 1 (Ejemplo)</Link>
    </div>
  );
}

// Simulación de carga de datos (ej. desde una API o base de datos)
export async function getStaticProps() {
  const productos = [
    { id: 1, nombre: 'Laptop Ultrabook', precio: 1200 },
    { id: 2, nombre: 'Teclado Inalámbrico', precio: 45 },
    { id: 3, nombre: 'Monitor 4K', precio: 500 },
  ];

  return {
    props: {
      productos,
    },
  };
}

export default PaginaListadoProductos;
