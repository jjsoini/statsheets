<script lang="ts">
    import { currentPlayerId, viewingPlayerId } from "../services/OBRHelper";


    export let notes;

    $: editable = $currentPlayerId === $viewingPlayerId; 

</script>

<div>
    <h2>Notes</h2>
    {#if editable}
    <p bind:innerText={notes} contenteditable="true"></p>
    {:else}
    <p>{notes}</p>
    {/if}
</div>

<style>
    p {
        border-radius: 0;
        color: rgba(var(--primary));
        text-shadow: var(--shadow);
        white-space: pre-wrap;
        word-wrap: normal;
        overflow-y: scroll;
        max-height: 15rem;
        scrollbar-width: thin;
        scrollbar-color: rgb(var(--accent));
    }
    div {
        margin-bottom:2rem;
        padding: 1.2rem 1rem;
        border-top: 1px solid rgba(0,0,0,0.1);
    }
    h2 {
        text-shadow: var(--shadow);
        color: rgb(var(--accent));
        margin-top:0;
        margin-bottom:0;
        font-size: 1.2rem;
    }
</style>