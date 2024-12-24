function CartWidget() {
  const itemsInCart = 0; // Este valor lo puedes cambiar para ver el número de productos

  return (
    <div style={styles.cartWidget}>
      <span role="img" aria-label="cart">🛒</span>
      {itemsInCart > 0 && <span style={styles.cartCount}>{itemsInCart}</span>}
    </div>
  );
}

const styles = {
  cartWidget: {
    display: 'flex',
    alignItems: 'center',
  },
  cartCount: {
    backgroundColor: '#f00',
    color: 'white',
    borderRadius: '50%',
    padding: '5px 10px',
    marginLeft: '5px',
  },
};

export default CartWidget;