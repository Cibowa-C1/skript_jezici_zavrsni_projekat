<template>

    <b-container fluid>
        <b-row>
            <b-col sm="2">
                <rating for="title">Title:</rating>
            </b-col>
            <b-col sm="10">
                <p id="title" style="text-align: left">{{ vinyl.title }}</p>
            </b-col>
        </b-row>

        <b-row class="mt-2">
            <b-col sm="2">
                <rating for="artist">Artist:</rating>
            </b-col>
            <b-col sm="10">
                <p id="Artist" style="text-align: left">{{ vinyl.artist }}</p>
            </b-col>
        </b-row>

      <b-row class="mt-2">
        <b-col sm="2">
          <rating for="rating">Rating:</rating>
        </b-col>
        <b-col sm="10">
          <p id="rating" style="text-align: left">{{ vinyl.rating }}</p>
        </b-col>
      </b-row>

    </b-container>
</template>

<script>
    export default {
        name: "ShowVinyl",
        props: {
            vinyl: Object
        }
    }
</script>