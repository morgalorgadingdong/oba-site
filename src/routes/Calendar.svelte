<script>
    import { browser } from '$app/environment';
    import { onMount } from 'svelte';
    import { afterUpdate } from 'svelte';
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
    let iFrameID
    

    function iframeLoaded() {
      console.log('test')
      iFrameID = document.getElementById('idIframe');
      
      if(iFrameID) {
        // iFrameID.addEventListener("load", iframeLoaded);    
        // iFrameID.contentWindow.document.body.addEventListener("click", iframeLoaded);
            console.log(iFrameID.style.height)
            iFrameID.style.height = "";
            let newheight = iFrameID.contentWindow.document.body.scrollHeight * 1.5;
            iFrameID.style.height = newheight + "px";
            console.log(iFrameID.style.height)
      }
  }



</script>

<!-- svelte-ignore a11y-missing-attribute -->
<iframe id="idIframe" src="about:blank" bind:this={frame} style="width: 100%; height: 100%; border: none;" />


<style>
    iframe {
        width: 100%;
        /* min-height: 1500px; */
        height: fit-content;
        border: none;
        overflow: hidden;
    }


</style>

