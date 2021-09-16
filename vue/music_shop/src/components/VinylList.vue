<template>
    <div>
        <b-table
                hover v-if="vinyls.length"
                sticky-header="800px"
                :items="vinyls"
                :fields="fields"
                head-variant="light"
                @row-clicked="editVinyl">
            <template v-slot:cell(delete)="row">
                <b-button v-if="admin == false" variant="danger" @click="delete_vinyl(row.item.id)">Delete</b-button>
            </template>
        </b-table>
        <h1 v-else>No vinyls to show</h1>
    </div>
</template>

<script>
    import router from "@/router";
    import { mapState, mapActions } from 'vuex';

    export default {
        name: "VinylList",
        computed: {
            ...mapState(['vinyls','admin'])
        },
        data() {
            return {
                fields: [
                    { key: 'title' },
                    { key: 'artist' },
                    { key: 'label' }
                ]
            }
        },
        methods: {
            ...mapActions(['delete_vinyl']),

            editVinyl: function (item, index, event) {
                if(this.admin == true){
                  router.push({path: `/vinyl/${item.id}`});
                }

            }
        }
    }
</script>

<style>
    tr:hover td{
        background: mediumvioletred;
    }
</style>