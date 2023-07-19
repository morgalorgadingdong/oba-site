<script>
    import { cart } from '$lib/stores/cart';
  
    function addItem(id) {
      // get the current value of the cart
      const currentCart = $cart;
  
      // find the item in the cart
      const itemIndex = currentCart.findIndex(item => item.id === id);
  
      // if the item is already in the cart, increment the quantity
      if (itemIndex !== -1) {
        currentCart[itemIndex].quantity++;
      } else {
        // otherwise, add a new item to the cart
        currentCart.push({ id, quantity: 1 });
      }
  
      // update the cart store
      cart.set(currentCart);
    }
  
    function removeItem(id) {
      // similar logic as addItem, but for removing an item
    }
  </script>
  
  <!-- display the cart items -->
  <ul>
    {#each $cart as item (item.id)}
      <li>
        {item.id}: {item.quantity}
        <button on:click={_ => removeItem(item.id)}>Remove</button>
      </li>
    {/each}
  </ul>
  
  <!-- a button to add an item to the cart -->
  <!-- <button on:click={_ => addItem('some-id')}>Add item</button> -->