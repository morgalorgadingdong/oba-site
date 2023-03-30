<script>
    import { browser } from '$app/environment';
    import { onMount } from 'svelte';
    /**
   * @type {any}
   */
  export let url

  /**
   * @type {HTMLIFrameElement}
   */
  let frame
    onMount(async () => {
        frame.srcdoc = `<script src='${url}.js'><${""}/script>`;
            setTimeout(() => {
            iframeLoaded()
        }
            , 1500)
    })

    // afterUpdate(() => {
    //     console.log("afterUpdate")
    //     iframeLoaded()
    // })
    
    

    function iframeLoaded() {
      let iFrameID = document.getElementById('idIframe');
      if(iFrameID) {
        // iFrameID.addEventListener("load", iframeLoaded);    
        // iFrameID.contentWindow.document.body.addEventListener("click", iframeLoaded);
            // console.log(iFrameID.style.height)
            iFrameID.style.height = "";
            let newheight = iFrameID.contentWindow.document.body.scrollHeight * 1.1;
            if (newheight > 380) {
                iFrameID.style.height = newheight + "px";
            }
            
            // console.log(iFrameID.style.height)
      }
  }



</script>

<svelte:window
	on:mouseenter={iframeLoaded}
    on:scroll={iframeLoaded}
    on:click={iframeLoaded}
    />

<!-- svelte-ignore a11y-missing-attribute -->
<iframe id="idIframe" src="about:blank" bind:this={frame}/>

<style>
    iframe {
        width: 100%;
        height: 800px;
        border: none;
        overflow: hidden;
    }


</style>

