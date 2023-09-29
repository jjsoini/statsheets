<script lang="ts">
    
    // Import components
    import StatsRow from './StatsRow.svelte'
    import RemoveSection from './RemoveSection.svelte';

    // Import Stores
    import { editing } from '../stores';
    import { currentPlayerId, viewingPlayerId } from "../services/OBRHelper";

    // Export
    export let section;

    $: editable = $currentPlayerId === $viewingPlayerId;

</script>

<div>
    {#if editable && $editing}
    <h2 bind:innerText={section.name} contenteditable="true">{section.name}</h2>
    {:else}
    <h2>{section.name}</h2>
    {/if}

    <StatsRow bind:stats={section.stats}/>
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
    div {
        display:flex;
        padding: 0.6rem;
        border-width: 1px;
    }

    div:nth-child(2n){
        background: rgba(var(--accent), 0.07);
    }

    h2 {
        width: 30%;
        text-shadow: var(--shadow);
        color: rgb(var(--accent));
        font-size: 1rem;
        margin-top:0;
        margin-bottom:0.6rem;
    }
    p.section-notes {
        display: none;
        color: rgb(var(--primary));
        font-size: 0.9rem;
    }
</style>