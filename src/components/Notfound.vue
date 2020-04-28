<template>
  <b-row>
    <b-col cols="12">
      <Navigation />
      <b-row>
        <b-col cols="6" class="center-position">
          <b-row>
            <b-col cols="12">
              <p class="big-font">404</p>
            </b-col>
          </b-row>
          <b-row>
            <b-col cols="12">
              <font-awesome-icon :icon="['fas', 'ban']" size="8x" />
            </b-col>
          </b-row>
          <b-row>
            <b-col cols="12">
              <h6 class="medium-font">Page Not Found</h6>
               <b-button variant="outline-primary" @click="goback">Go Back</b-button>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-col>
  </b-row>
</template>

<script>
import Navigation from "./Navigation";
export default {
  name: "Notfound",
  components: { Navigation },
  methods: {
      goback () {
          this.$router.replace('/')
      }
  }
};
</script>

<style scoped>
.center-position {
  margin: auto;
  padding: 20px;
}
.big-font {
  font-size: 70px;
  font-weight: bolder;
}

.medium-font {
  font-size: 40px;
  font-weight: bolder;
  padding-top: 20px;
}
</style>

