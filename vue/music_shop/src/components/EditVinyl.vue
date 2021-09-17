<template>
  <b-container fluid>
    <b-form>
      <b-row class="mt-2">
        <b-col sm="2" offset="2">
          <b-input v-model="newTitle" class="mb-2 mr-sm-2 mb-sm-0" placeholder="Title"></b-input>
        </b-col>

        <b-col sm="2" offset="2">
          <b-input v-model="newArtist" class="mb-2 mr-sm-2 mb-sm-0" placeholder="Artist"></b-input>
        </b-col>
      </b-row>

      <b-row class = "mt-2">
        <b-col sm="2" offset="2">
          <b-input v-model="newRating" class="mb-2 mr-sm-2 mb-sm-0" placeholder="Rating"></b-input>
        </b-col>
      </b-row>

      <b-row class = "mt-2">
        <b-col sm="1">
          <b-button variant="secondary" size="lg" @click="addNew">Save</b-button>
        </b-col>
      </b-row>

    </b-form>
  </b-container>
</template>

<script>
import { mapActions } from 'vuex';
import router from "@/router";

export default {
  name: "EditVinyl",
  props: {
    title: {
      type: String,
      default: ''
    },
    artist: {
      type: String,
      default: ''
    },
    rating: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      newTitle: '',
      newArtist: '',
      newRating: ''
    }
  },
  mounted: function () {
    this.newTitle = this.title;
    this.newArtist = this.artist;
    this.newRating = this.rating;
  },
  methods: {
    ...mapActions(['new_vinyl', 'change_vinyl']),

            addNew: function() {
              const Joi = require('joi');

              const sema = Joi.object().keys({
                title: Joi.string().trim().required(),
                artist: Joi.string().trim().required(),
                rating: Joi.string().trim().required(),
              });

              const link = Joi.object().keys({
                id: Joi.number().min(1).max(50).required()
              });
                const vinyl = JSON.stringify({title: this.newTitle, artist: this.newArtist, rating: this.newRating});
                let { error } = Joi.validate(vinyl, sema);

                if(error){
                    alert(error.details[0].message);
                  return;
                }

                if (!this.$route.params.id)
                    this.new_vinyl(vinyl);
                else
                    this.change_vinyl({id: this.$route.params.id, vin: vinyl});

                this.newTitle = '';
                this.newArtist = '';
                this.newRating = '';
                router.push({path: `/home`});
            }
  }
}
</script>

<style scoped>

</style>