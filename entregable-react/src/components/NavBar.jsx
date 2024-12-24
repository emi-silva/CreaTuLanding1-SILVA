import CartWidget from './CartWidget'; // Vamos a crear este componente después

function NavBar() {
  return (
    <nav style={styles.navBar}>
      {/* Logo de la tienda */}
      <div style={styles.logo}>Mi Tienda Online</div>

      {/* Enlaces de navegación */}
      <div style={styles.navLinks}>
        <a href="#home" style={styles.link}>Home</a>
        <a href="#products" style={styles.link}>Products</a>
        <a href="#contact" style={styles.link}>Contact</a>
      </div>

      {/* Carrito de compras */}
      <CartWidget />
    </nav>
  );
}

// Estilos para el NavBar (esto es opcional, pero es una forma rápida de agregar estilos)
const styles = {
  navBar: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px 20px',
    backgroundColor: '#333',
    color: 'white',
  },
  logo: {
    fontSize: '24px',
    fontWeight: 'bold',
  },
  navLinks: {
    display: 'flex',
    gap: '20px',
  },
  link: {
    color: 'white',
    textDecoration: 'none',
    fontSize: '18px',
  },
};

export default NavBar;