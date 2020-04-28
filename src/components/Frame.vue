<template>
<b-container fluid>
  <b-row>
    <b-col cols="12">
      <Navigation></Navigation>
      <b-row>
        <b-col cols="3">
          <Sidebar></Sidebar>
        </b-col>
        <b-col cols="9">
          <div class="top-down">
            <slot />
          </div>
        </b-col>
      </b-row>
    </b-col>
  </b-row>
</b-container>
</template>

<script>
import Navigation from "./Navigation";
import Sidebar from "./Sidebar";
export default {
  name: "Frame",
  components: {
    Navigation: Navigation,
    Sidebar: Sidebar
  }
};
</script>

<style scoped>
    .top-down {
        margin-top: 60px;
    }
</style>