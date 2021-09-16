<template>

    <b-container fluid>
        <b-row>
            <b-col sm="2">
                <label for="title">Title:</label>
            </b-col>
            <b-col sm="10">
                <p id="title" style="text-align: left">{{ cd.title }}</p>
            </b-col>
        </b-row>

        <b-row class="mt-2">
            <b-col sm="2">
                <label for="artist">Artist:</label>
            </b-col>
            <b-col sm="10">
                <p id="Artist" style="text-align: left">{{ cd.artist }}</p>
            </b-col>
        </b-row>

      <b-row class="mt-2">
        <b-col sm="2">
          <label for="label">Label:</label>
        </b-col>
        <b-col sm="10">
          <p id="label" style="text-align: left">{{ cd.label }}</p>
        </b-col>
      </b-row>

    </b-container>
</template>

<script>
    export default {
        name: "ShowCD",
        props: {
            cd: Object
        }
    }
</script>