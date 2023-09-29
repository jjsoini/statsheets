<script lang="ts">
    import { blank_object } from "svelte/internal";

    // Import components
    import Section from "./Section.svelte";
    import SectionRow from "./SectionRow.svelte";

    // Import stores
    import { listMode } from '../stores'

    // Exports
    export let sections = [];

    function removeSection(section){
        sections = sections.filter(s => s.id !== section.id)
    }
  
</script>
{#if $listMode}
<div class="list">
    {#each sections as section (section.id)}
        <SectionRow bind:section={section} on:removeSection={e => removeSection(e.detail)}/>
    {/each}
</div>
{:else}
<div class="cols">
    {#each sections as section (section.id)}
        <Section bind:section={section} on:removeSection={e => removeSection(e.detail)}/>
    {/each}
</div>
{/if}

<style lang="scss">
    
    div.cols {
         display: grid;
        grid-template-columns: repeat(1, 1fr);
        grid-template-rows: repeat(1, 1fr);
        grid-column-gap: 1.5rem;
        grid-row-gap: 2rem;
    }
    @media only screen and (min-width: 33.75em) {
        div.cols {
            grid-template-columns: repeat(2, 1fr);
        }
    }
    @media only screen and (min-width: 60em) { /* 960px */
        div.cols {
            grid-template-columns: repeat(3, 1fr);
        }
    }
    
</style>