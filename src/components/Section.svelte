<script lang="ts">
    
    // Import components
    import Stats from './Stats.svelte'
    import RemoveSection from './RemoveSection.svelte';

    // Import Stores
    import { editing } from '../stores';
    import { currentPlayerId, viewingPlayerId } from "../services/OBRHelper";

    // Export
    export let section;

    $: editable = $currentPlayerId === $viewingPlayerId;

    //URL validator
	const isValidUrl = urlString=> {
	  	var urlPattern = new RegExp('^(https?:\\/\\/)?'+ // validate protocol
	    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // validate domain name
	    '((\\d{1,3}\\.){3}\\d{1,3}))'+ // validate OR ip (v4) address
	    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // validate port and path
	    '(\\?[;&a-z\\d%_.~+=-]*)?'+ // validate query string
	    '(\\#[-a-z\\d_]*)?$','i'); // validate fragment locator
	  return !!urlPattern.test(urlString);
	}    

</script>

<div>
    {#if editable && $editing}
    <h2 bind:innerText={section.name} contenteditable="true">{section.name}</h2>
    {:else}
    <h2>{section.name}</h2>
    {/if}

    {#if editable && $editing}
    <p class="url">Image url<span bind:innerText={section.imageUrl} contenteditable="true">{#if isValidUrl(section.imageUrl) }{section.imageUrl}{/if}</span></p>
    {:else if isValidUrl(section.imageUrl)}
    <img src ="{section.imageUrl}" alt="{section.name}" />
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
    div {
        padding: 0 0 0 1rem;
        border-width: 1px;
        border-left: 1px solid rgba(0,0,0,0.1);  
    }
    p.url {
        text-transform: uppercase;
        font-weight: bold;
        font-size: 0.7em;   
    }
    span {
        background: rgba(var(--accent), 0.07);
        text-transform: none;
        font-weight: normal;
        padding: 6px;
        border-radius: 4px;
        display: block;
        word-wrap:break-word;
        width: 260px;
        font-size: 0.8rem;
    }

    img {width: 100%}

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