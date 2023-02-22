<template>
    <div>
        <div v-if="data.length > 0">

            <div v-for="entry, index in data">

                <h4 class="text-secondary">{{index+1}}. {{ entry['acronym']}}</h4>
        
                <b>Definition:</b><br />
                {{ entry['definition']}}<br />

                <hr class="border border-primary border-3 opacity-75">
            </div>


        </div>

        <div v-else>
            No acronym found.
        </div>

    </div>
</template>

<script>

export default {
    name: "CompactFindingList",

    props: {
        data: Array
    }

}
</script>
