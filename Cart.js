<script>
  let cart = [];

  function addToCart(productName, price) {
    const item = {
      name: productName,
      price: price,
      quantity: 1
    };

    // Check if item already in cart
    const existingItem = cart.find(i => i.name === productName);
    if (existingItem) {
      existingItem.quantity++;
    } else {
      cart.push(item);
    }

    alert(`${productName} added to cart!`);
    console.log(cart); // For testing purposes
  }
</script>
