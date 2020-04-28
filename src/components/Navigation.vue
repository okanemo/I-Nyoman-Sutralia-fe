<template>
  <b-navbar toggleable="lg" type="dark" fixed="top" variant="info">
    <b-navbar-brand class="font-brand">User Mangement</b-navbar-brand>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown right offset="200" class="profile-right">
            <!-- Using 'button-content' slot -->
            <template v-slot:button-content>
              <em>{{profile.username}}</em>
            </template>
            <b-dropdown-item @click="GoProfile">Profile</b-dropdown-item>
            <b-dropdown-item @click="logout">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: "Navigation",
  methods: {
    ...mapActions(['getProfile']),
    async logout() {
      localStorage.clear()
      const response = await this.$gAuth.signOut()
      console.log('res', response)
      this.$router.push('/login')
    },
    GoProfile() {
      if (this.$router.currentRoute.path !== '/profile') this.$router.push('/profile')
    }
  },
  computed: {
    ...mapGetters(['profile'])
  },
  created() {
    this.getProfile()
  }
};
</script>


<style>
  .font-brand {
    font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;

  }

  .dropdown-menu {
    margin-top: 10px !important;
  }

  .profile-right {
    right: -15px;
  }
</style>