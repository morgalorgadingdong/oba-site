<script>
    import { cart } from '$lib/stores/cart';

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
  
  <div class="col-12 d-flex justify-content-center flex-wrap py-5">
    <ul class="col-12 col-lg-8">
      {#if $cart.length === 0}
        <p class="text-center">Your cart is empty.</p>
      {/if}
      {#each $cart as item}
        <li class="col-12 d-flex justify-content-between align-items-center mb-3">
          
          <img src={item.img} alt={item.name} class="col-2"/>
          <p class="col-4 cart-item-text">{item.name}</p>
          <span class="mx-3">{item.size}</span> <span class="mx-3">${item.price}</span>  <input type="number" bind:value={item.quantity} min="1"/>
          <button class="btn-remove" on:click={ removeItem(item) }>X</button>
        </li>
      {/each}

    </ul>
    <div class="col-12 d-flex justify-content-end flex-wrap">
      <h3 class="col-12 text-right">Total: $ {total}</h3>
      <div class="col-12 d-flex justify-content-end my-3">
        <a href="/store/checkout"><button class="btn" disabled>Checkout</button></a>
      </div>
      <div class="col-12 d-flex justify-content-end">
        <button class="btn-secondary" on:click={_ => clearCart()}>Clear Cart</button>
      </div>
  </div>
</div>
  
  <!-- a button to add an item to the cart -->
  <!-- <button on:click={_ => addItem('some-id')}>Add item</button> -->

<style>

  input {
    width: 40px;
  }

  .btn-remove {
    background: none;
    border: none;
    color: black;
    font-size: 1.5rem;
    cursor: pointer;
    font-family: sans-serif;
  }

  .btn-remove:hover {
    color: var(--color-primary);
  }

  .btn-secondary {
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 0.25rem;
    cursor: pointer;
    font-family: sans-serif;
  }

</style>
