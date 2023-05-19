<script>
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();
  
    export let isOpen = false;
    export let title = '';
    export let content = '';
  
    function close() {
      dispatch('close');
    }
  </script>
  
  {#if isOpen}
    <div class="modal">
      <div class="modal-content">
        <span class="close" on:click={close}>&times;</span>
        <h2>{title}</h2>
        <p>{content}</p>
      </div>
    </div>
  {/if}
  
  <style>
    /* Add some style for the modal */
    .modal {
      display: block; 
      position: fixed;
      z-index: 1;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      overflow: auto;
      background-color: rgba(0,0,0,0.4);
    }
  
    .modal-content {
      background-color: #fefefe;
      margin: 15% auto;
      padding: 20px;
      border: 1px solid #888;
      width: 80%;
    }
  
    .close {
      color: #aaaaaa;
      float: right;
      font-size: 28px;
      font-weight: bold;
    }
  
    .close:hover,
    .close:focus {
      color: #000;
      text-decoration: none;
      cursor: pointer;
    }
  </style>
  