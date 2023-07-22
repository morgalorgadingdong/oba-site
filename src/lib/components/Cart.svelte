<script>
    import { cart } from '$lib/stores/cart';
  
    function addItem(name) {
      // get the current value of the cart
      const currentCart = $cart;
  
      // find the item in the cart
      const itemIndex = currentCart.findIndex(name => item.name === name);
  
      // if the item is already in the cart, increment the quantity
      if (itemIndex !== -1) {
        currentCart[itemIndex].quantity++;
      } else {
        // otherwise, add a new item to the cart
        currentCart.push({ name, price, quantity: 1 });
      }
  
      // update the cart store
      cart.set(currentCart);
    }
  
    function removeItem(item) {
      // similar logic as addItem, but for removing an item
      console.log('remove', item.name, item.size)
      const currentCart = $cart;
      const itemIndex = currentCart.indexOf(item);
      currentCart.splice(itemIndex, 1);
      $cart = currentCart;
    }

    function clearCart() {
        cart.set([])
    }

    let total
    $: total = $cart.reduce((acc, item) => acc + item.price * item.quantity, 0)

  </script>
  
  <!-- display the cart items -->
  <div class="hero hero-sub col-12 d-flex flex-column justify-content-end">
    <div class="img-container">
        <div class="img-overlay"></div>
        <!-- <img class="img" src="./img/blog.jpg"/> -->
    </div>
    <div id="hero-tagline-container" class="d-flex justify-content-center flex-wrap p-3 pb-3 pb-md-5">
        <h1 class="hero-tagline col-12">Cart</h1>
    </div>
</div>
  <div class="col-12 mt-5 pt-5">
  <ul>
    {#if $cart.length === 0}
      <p>Your cart is empty.</p>
    {/if}
    {#each $cart as item}
      <li>
        <p>{item.name}:</p>
        <span>{item.size}</span> <span>{item.price}</span>  <input type="number" bind:value={item.quantity} min="1"/>
        <button on:click={ removeItem(item) }>Remove</button>
      </li>
    {/each}

  </ul>
  <h3>Total: $ {total}
    </h3>

  <button on:click={_ => clearCart()}>Clear Cart</button>
</div>
  
  <!-- a button to add an item to the cart -->
  <!-- <button on:click={_ => addItem('some-id')}>Add item</button> -->

<style>


</style>
