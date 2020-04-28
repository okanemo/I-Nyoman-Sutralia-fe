<template>
  <b-row>
    <b-col cols="12">
      <b-row>
        <b-col cols="7" class="box-login">
          <b-row class="min-height-box shadow p-3 mb-5 bg-white rounded">
            <b-col cols="3" class="welcome"></b-col>
            <b-col cols="4" class="content-center">
              <button
                type="button"
                class="btn btn-primary"
                @click="handleClickSignIn"
                :disabled="!isLoaded"
              >
                <font-awesome-icon :icon="['fab', 'google']" />SignIn With Google
              </button>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-col>
  </b-row>
</template>

 <script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Login",
  props: [],
  components: {},
  data() {
    return {
      isLoaded: false,
      access_token: null
    };
  },
  computed: {
    ...mapGetters(["token"])
  },
  methods: {
    ...mapActions(["authenticate"]),
    handleClickSignIn() {
      this.$gAuth.signIn().then(async GoogleUser => {
        await this.authenticate({
          strategy: "google",
          access_token: GoogleUser.tc.access_token
        });
        await this.$router.push("/");
      });
    }
  },
  mounted() {
    let that = this;
    let checkGauthLoad = setInterval(function() {
      that.isLoaded = that.$gAuth.isLoaded();
      if (that.isLoaded) clearInterval(checkGauthLoad);
    }, 1000);
  }
};
</script>

<style scoped>
.box-login {
  margin: auto;
  position: relative;
  top: 50%;
  transform: translateY(50%);
}

.min-height-box {
  height: 400px;
  padding: 0 !important;
}

.welcome {
  background-color: aqua;
}

.content-center {
  margin: auto;
}
</style>