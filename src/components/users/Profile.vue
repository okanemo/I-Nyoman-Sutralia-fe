<template>
  <Frame>
    <b-row>
      <b-col cols="4" class="card-profile-center">
        <b-card
          title
          img-src="https://picsum.photos/600/300/?image=25"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 120rem;"
          class="mb-2"
        >
          <div class="avatar-card">
            <b-avatar size="92px"></b-avatar>
          </div>

          <b-card-text class="card-profile-center">
            <b-row>
              <b-col cols="12" class="split-text">
                <b-input-group prepend="@" class="mb-2 mr-sm-2 mb-sm-0">
                  <b-input id="inline-form-input-username" placeholder="Username" v-model="profile.username"></b-input>
                </b-input-group>
              </b-col>
              <b-col cols="12" class="split-text">
                <b-input-group prepend="@" class="mb-2 mr-sm-2 mb-sm-0">
                  <b-input id="inline-form-input-email" placeholder="Username" v-model="profile.email" :readonly="true"></b-input>
                </b-input-group>
              </b-col>
              <b-col cols="12" class="split-text">
                <b-input-group prepend="@" class="mb-2 mr-sm-2 mb-sm-0">
                  <b-input id="inline-form-input-role" placeholder="Username" v-model="profile.Previllage.Role.name" :readonly="true"></b-input>
                </b-input-group>    
              </b-col>
            </b-row>
          </b-card-text>

          <b-button @click="updateMyProfile" href="#" variant="primary">Save</b-button>
        </b-card>
      </b-col>
    </b-row>
  </Frame>
</template>

<script>
import Frame from "../Frame";
import { mapGetters, mapActions } from 'vuex'
export default {
  name: "Profile",
  components: { Frame },
  methods: {
      ...mapActions(['getProfile']),
      ...mapActions(['updateProfile']),
      updateMyProfile() {
          console.log(this.profile.username)
          this.updateProfile({
              username: this.profile.username
          })
      }
  },
  created() {
      if (this.profile) this.getProfile()
  },
  computed: {
      ...mapGetters(['profile'])
  }
};
</script>

<style scoped>
.avatar-card {
  position: relative;
  top: -70px;
}
.card-profile-center {
  margin: auto;
}
.split-text {
    padding-bottom: 20px;
}
</style>