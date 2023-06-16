<script>
    import { createEventDispatcher } from 'svelte';
    import { cart } from '../stores.ts';
    const dispatch = createEventDispatcher();
  
    export let isOpen = false;
    export let title = '';
    export let content = '';
  
    function close() {
      dispatch('close');
    }

    function addToCart(item) {
        cart.update((items) => items, item);
    }
  </script>
  
  {#if isOpen}
    <div class="modal  justify-content-center">
      <div class="modal-content col-12 col-md-10 col-lg-8">
        <div class="col-12 d-flex justify-content-start flex-wrap px-0">
          <span class="close" on:click={close}>&times;</span>
          <div class="d-flex align-items-center px-0 col-12 col-xl-3">
            <img src="{ content.itemData.imgURL[0] }" class="img"/>
          </div>
          
          <div class="col-12 col-xl-9 px-0">
            <h2>{title}</h2>
            <div class="tour-divider col-12 mt-1 mb-3"></div>
            <p class="col-12">{content.itemData.description}</p>
            <div class="col-12 d-flex justify-content-center">
              <a href="https://square.link/u/FM5ymk6E" target="_blank" rel="noreferrer"><button  class="btn">Purchase</button></a>
              
            </div>
            
          </div>
        </div>
      </div>
    </div>
  {/if}

  <style>
   
    img {
      /* height: 300px; */
      object-fit: contain;
    }

    span {
      z-index: 10;
      position: absolute;
      top: 0;
      left: 0;

    }

    .modal-content > span {
      width: fit-content
    }
    /* Add some style for the modal */
    .modal {
      display: flex; 
      position: fixed;
      z-index: 1;
      left: 0;
      top: 0;
      width: 100vw;
      height: 100vh;
      overflow: auto;
      background-color: rgba(0,0,0,0.4);
      padding-top: 3%;
    }
  
    .modal-content {
      background-color: #fefefe;
      padding: 20px;
      border: 1px solid #888;
      height: fit-content;
    }
  
    .close {
      color: #aaaaaa;
      /* float: right; */
      font-size: 28px;
      font-weight: bold;
      
    }
  
    .close:hover,
    .close:focus {
      color: #000;
      text-decoration: none;
      cursor: pointer;
    }

    @media (max-width: 768px) {
      .modal {
        padding-top: 0%;
      }
      
      .modal-content {
        width: 100%;
        min-height: 100%;
        overflow-y: scroll;
      }

      span {
        position: fixed;
        top: 0;
        left: 2%;
      }
    }

  </style>
  