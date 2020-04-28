<template>
  <Frame>
    <div>
        <p class="welcome font-welcome">Welcome</p>
    </div>
  </Frame>
</template>

<script>
import Frame from "../Frame";
export default {
  name: "Dashboard",
  components: {
    Frame
  },
  data() {
    return {};
  }
};
</script>

<style scoped>
    .welcome {
	text-transform: uppercase;
	background: linear-gradient(to right, #30CFD0 0%, #330867 100%);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
    }

    .font-welcome {
        font-size: 10vw;
        font-weight: bolder;
    }
</style>