<template>
    <div>
        <Header/>
        <b-container>
            <b-row>
                <b-col cm="6" >
                    <div v-if="edit">
                        <EditVinyl :title="vinyl.title" :artist="vinyl.artist" :label="vinyl.label"/>
                    </div>
                    <div v-else>
                        <ShowVinyl v-if="vinyls.length" :vinyl="vinyl"/>
                    </div>
                </b-col>
            </b-row>
            <b-row>
                <b-col cm="2" style="margin-top: 10px">
                    <b-button variant="primary" size="lg" @click="toggleEdit" v-html="edit ? 'Cancel' : 'Edit'"/>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
    import EditVinyl from "@/components/EditVinyl";
    import Header from "@/components/Header";
    import ShowVinyl from "@/components/ShowVinyl";
    import { mapState, mapActions } from 'vuex';

    export default {
        name: 'Vinyl',
        components: {
            Header,
            EditVinyl,
            ShowVinyl
        },
        data() {
            return {
                edit: false
            }
        },
        computed: {
            ...mapState(['vinyls']),

            vinyl: function () {
                for (let i = 0; i < this.vinyls.length; i++)
                    if (this.vinyls[i].id === parseInt(this.$route.params.id))
                        return this.vinyls[i];
            }
        },
        methods: {
            ...mapActions(['load_vinyls']),

            toggleEdit: function () {
                this.edit = !this.edit
            }
        }
    }
</script>

<style scoped>

</style>