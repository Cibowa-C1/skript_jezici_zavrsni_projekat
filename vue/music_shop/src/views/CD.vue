<template>
    <div>
        <HeaderT/>
        <b-container>
            <b-row>
                <b-col cm="6" >
                    <div v-if="edit">
                        <EditCD :title="cd.title" :artist="cd.artist" :rating="cd.rating"/>
                    </div>
                    <div v-else>
                        <ShowCD v-if="cds.length" :cd="cd"/>
                    </div>
                </b-col>
            </b-row>
            <b-row>
                <b-col cm="2" style="margin-top: 10px">
                    <b-button v-if="admin==true" variant="secondary" size="lg" @click="toggleEdit" v-html="edit ? 'Cancel' : 'Edit'"/>
                </b-col>
            </b-row>
            <b-row>
                <b-col cm="2" style="margin-top: 10px">
                    <b-button v-if="admin==true" variant="secondary" size="lg" @click="cancelAction">Home</b-button>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
    import EditCD from "@/components/EditCD";
    import HeaderT from "@/components/HeaderT";
    import ShowCD from "@/components/ShowCD";
    import { mapState, mapActions } from 'vuex';
    import router from "@/router";
    export default {
        name: 'CD',
        components: {
            HeaderT,
            EditCD,
            ShowCD
        },
        data() {
            return {
                edit: false
            }
        },
        computed: {
            ...mapState(['cds','admin']),

            cd: function () {
                for (let i = 0; i < this.cds.length; i++)
                    if (this.cds[i].id === parseInt(this.$route.params.id))
                        return this.cds[i];
            }
        },
        methods: {
            ...mapActions(['load_cds']),

            toggleEdit: function () {
                this.edit = !this.edit
            },
            cancelAction: function () {
                router.push({path: `/home`});
            } 
        }
    }
</script>

<style scoped>

</style>