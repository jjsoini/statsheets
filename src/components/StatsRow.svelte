<script lang="ts">
    // Import stores
    import { editing } from "../stores";    import { currentPlayerId, viewingPlayerId } from "../services/OBRHelper";

    export let stats;

</script>

<dl>
    {#each stats as stat (stat.id)}
    <div>
        <dt>{stat.name}</dt>
        <dd>{stat.value}</dd>
    </div>
    {/each}
</dl>

<style lang="scss">
    div {
    padding-right: 0.8rem;
    }
    dl {
        width: 100%;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        margin: 0 0 0 0;
    }
    dt {
        margin-left: 0; margin-bottom: -0.2rem;
        opacity: 0.5;
        font-size: 0.8rem;
    }
    dd{
       margin-left: 0;
    }
</style> 