<script lang="ts">
    
    // Import components
    import Stats from './Stats.svelte'
    import RemoveSection from './RemoveSection.svelte';

    // Import Stores
    import { editing } from '../stores';
    import { listMode } from '../stores';
    import { currentPlayerId, viewingPlayerId } from "../services/OBRHelper";

    // Export
    export let section;

    $: editable = $currentPlayerId === $viewingPlayerId;

    $: divClass = listMode ? "list" : "cols";

</script>

<div class="cols">
    {#if editable && $editing}
    <h2 bind:innerText={section.name} contenteditable="true">{section.name}</h2>
    {:else}
    <h2>{section.name}</h2>
    {/if}
    
    <Stats bind:stats={section.stats}/>
    {#if editable && $editing}
        {#if section.notes != undefined}
        <p bind:innerText={section.notes} contenteditable="true" class="section-notes">{section.notes}</p>
        {/if}
    <RemoveSection bind:section={section} on:removeSection/>
    {:else}
    {#if section.notes != undefined}<p class="section-notes">{section.notes}</p>{/if}
    {/if}
</div>

<style lang="scss">
    div.cols {
        padding: 0 0 0 1rem;
        border-width: 1px;
        border-left: 1px solid rgba(0,0,0,0.1);  
    }
    div.list {
        
    }
    h2 {
        text-shadow: var(--shadow);
        color: rgb(var(--accent));
        font-size: 1.2rem;
        margin-top:0;
        margin-bottom:0.6rem;
    }
    p.section-notes {
        color: rgb(var(--primary));
        font-size: 0.9rem;
    }
</style>