<template>
    <div>



        <b-jumbotron header="Vinyl disks" :lead="'Currently available: ' + vinyls.length">
        </b-jumbotron>


    </div>
</template>

<script>
    import { mapState } from 'vuex';

    export default {
        name: "Header",
        computed: {
            ...mapState(['vinyls'])
        }
    }
</script>

<style scoped>

</style>