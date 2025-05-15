// pages/products/detalle/[id].js
import { useRouter } from 'next/router';
import Link from 'next/link';

function PaginaDetalleProducto({ producto }) {
    const router = useRouter();
    const { id } = router.query; // Accede al parámetro 'id' de la URL

    if (router.isFallback) {
        return <div>Cargando detalle del producto...</div>;
    }

    if (!producto) {
        return (
            <div>
                <p>Producto con ID '{id}' no encontrado.</p>
                <Link href="/productos">Volver al listado</Link>
            </div>
        );
    }

    return (
        <div>
            <h1>Detalle del Producto: {producto.nombre}</h1>
            <p>ID: {id}</p>
            <p>Precio: ${producto.precio}</p>
            <p>Descripción: {producto.descripción}</p>
            <br />
            <Link href="/productos">Volver al listado de productos</Link>
            <br />
            <Link href="/">Volver al Inicio</Link>
        </div>
    );
}

export async function getStaticPaths() {
    // Simulación: Define qué 'ids' se pre-renderizarán en el build
    // En una app real, esto vendría de una API o BD
    const paths = [
        { params: { id: '1' } },
        { params: { id: '2' } },
        { params: { id: '3' } }
    ];

    return {
        paths,
        fallback: true // Permite generar páginas no listadas aquí
    };
}

export async function getStaticProps({ params }) {
    // Simulación de carga de datos para un producto específico
    const productossimulados = {
        '1': { 
            id: 1, 
            nombre: 'Laptop Ultrabook', 
            precio: 1200, 
            descripción: 'Potente Y ligera.' 
        },
        '2': { 
            id: 2, 
            nombre: 'Teclado Inalámbrico', 
            precio: 75, 
            descripción: 'Cómodo Y silencioso.' 
        },
        '3': { 
            id: 3, 
            nombre: 'Monitor 4K', 
            precio: 450, 
            descripción: 'Imágenes nítidas Y colores vibrantes.' 
        }
    };
    
    const producto = productossimulados[params.id] || null;

    if (!producto) {
        return {
            notFound: true // Devuelve un 404 si el producto no se encuentra
        };
    }

    return {
        props: {
            producto
        },
        revalidate: 60 // Incremental Static Regeneration (ISR) cada 60 segundos
    };
}

export default PaginaDetalleProducto;