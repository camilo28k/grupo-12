// components/productos/ProductoCard.js
function ProductoCard({ nombre, precio }) { // Recibe nombre y precio como props
    return (
        <div style={{ 
            border: '1px solid #ddd', 
            margin: '10px', 
            padding: '15px', 
            borderRadius: '5px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
            <h2>{nombre}</h2>
            <p>Precio: ${precio}</p>
        </div>
    );
}

export default ProductoCard;