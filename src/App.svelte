<script lang="ts">
  // Import components
  import  Themer  from './components/Themer.svelte';
  import { onMount } from "svelte";
  import GmBinderTabs from './components/GMBinderTabs.svelte';
  import  Sheet  from './components/Sheet.svelte'
  import OBR from "@owlbear-rodeo/sdk";

  import { sheet } from './stores';
  import { ViewingSheet, currentPlayerId, viewingPlayerId } from './services/OBRHelper';
  import * as OBRHelper from './services/OBRHelper';


  const { isGM } = OBRHelper;
  $: mainSheetVisible = $currentPlayerId === $viewingPlayerId ? "display:block;" : "display:none;";
  $: viewingSheetVisible = $currentPlayerId === $viewingPlayerId ? "display:none;" : "display:block";

  onMount(() => {
    if (OBR.isAvailable) {
      OBRHelper.init();
    }
  });


</script>

<Themer>
  <main>
    {#if $isGM}
    <GmBinderTabs/>
    {/if}
    <div style="{mainSheetVisible}">
      <Sheet bind:sheet={$sheet}/>
    </div>
    <div style="{viewingSheetVisible}">
      <Sheet bind:sheet={$ViewingSheet}/>
    </div>

  </main>
  <footer>
    <a target="_blank" href="/">Github</a>
  </footer>
</Themer>

<style lang="scss">
  main {
    background: rgb(var(--secondary));
    height:100%;
  }
  footer {
    background: rgb(var(--secondary));
    clear: both;
    position: relative;
    min-height: 2rem;
    margin-top: 0;
    padding: 2rem;
    a {
      text-decoration: none;
      float: right;
      color: rgb(var(--accent));
    }
  }
</style>