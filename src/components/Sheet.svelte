<script lang="ts">
    // Import components
    import Sections from './Sections.svelte'
    import SheetActions from './SheetActions.svelte';
    import ListToggle from "./ListToggle.svelte";
    import Notes from './Notes.svelte';
    import { currentPlayerId, viewingPlayerId } from "../services/OBRHelper";
    import type { DummySheet } from '../types/sheet.type';

    // Import stores
    import { editing } from '../stores'
    import { listMode } from '../stores'
    
    $: editable = $currentPlayerId === $viewingPlayerId; 
    let player = "";

    // Exports
    export let sheet:DummySheet;
    
    function toggleEditing(){ 
      $editing = !$editing;
    }

    function toggleMode(){
        $listMode = !$listMode;
    }

    function removeSection(section){
        sheet.sections = sheet.sections.filter(t => t.id !== section.id)
    }

</script>

<div class="box">
    <SheetActions/>
    {#if editable && $editing}
    <h1 bind:innerText={sheet.name} contenteditable="true"> </h1>
    <p bind:innerText={sheet.description} contenteditable="true"> </p>
    {:else}
    <h1>{sheet.name}</h1>
    <p>{sheet.description}</p>
    {/if}
    <ListToggle/>
    <Sections bind:sections={sheet.sections}/>
    <Notes bind:notes={sheet.notes}/>
</div>

<style lang="scss">
    div {
        width: 90%;
        margin-left: auto;
        margin-right: auto;
        padding-top: 2rem;
        padding-bottom: 2rem;
    }
    h1 {
        margin: 1rem 0 0 1rem;
        color:rgb(var(--accent));
        text-align: left;
    }
    p {
        font-size: 1.1rem;
        margin: 0.6rem 0 1.2rem 1rem;
    }
    @media only screen and (min-width: 33.75em) {
        div {
            width: 85%;
        }
    }
    @media only screen and (min-width: 60em) { /* 960px */
        div {
            width: 75%;
            max-width: 60rem;
        }
    }
</style>