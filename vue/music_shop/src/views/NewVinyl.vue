<template>
    <div class="home">
        <Header/>
        <b-container>
            <b-row>
                <b-col cm="6" >
                    <EditVinyl/>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
    import EditVinyl from "@/components/EditVinyl";
    import Header from "@/components/Header";

    export default {
        name: 'NewVinyl',
        components: {
            Header,
            EditVinyl
        }
    }
</script>

<style scoped>

</style>