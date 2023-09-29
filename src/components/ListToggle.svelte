<script lang="ts">
    //Import stores
    import { listMode } from '../stores'

    function toggleMode(){
        $listMode = !$listMode;
    }
</script>
<div>
    {#if $listMode}
    <button style="font-style:italic;" on:click={toggleMode}>Show Columns</button>
    {:else}
    <button on:click={toggleMode}>Show List</button>
    {/if}
</div>

<style lang="scss">
    div {
        display: block;
    }
    button {
        background: rgba(var(--accent),0);
        border: 1px solid rgb(var(--accent));
        border-radius: 0.15rem;
        color: rgb(var(--accent));
        font-size: 1rem;
        font-weight: 300;
        text-transform: uppercase;
        cursor: pointer;
        transition: background ease-in-out 150ms;
        transition: color ease-in-out 150ms;
        &:hover {
            background: rgba(var(--accent),1);
            color: rgb(var(--secondary));
        }
    }
</style>