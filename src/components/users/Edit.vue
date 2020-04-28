<template>
  <Frame>
    <b-card>
      <b-form-group label-cols="4" label-cols-lg="2" label="Role" label-for="input-default">
        <b-form-select value-field="id" text-field="name" v-model="selected" :options="allRoles"></b-form-select>
      </b-form-group>
      <button type="button" class="btn btn-primary" @click="handleSave()">Save</button>
    </b-card>
  </Frame>
</template>

<script>
import Frame from "../Frame";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Edituser",
  components: { Frame },
  data() {
    return {
      options: [
        { value: null, text: "Please select an option" },
        { value: "a", text: "This is First option" }
      ],
      selected: 2
    };
  },
  methods: {
    ...mapActions(["getRoles"]),
    ...mapActions(["getUserRole"]),
    ...mapActions(["updateRole"]),
    handleSave() {
      this.updateRole({
        id: this.roleUser.id,
        roleId: this.selected
      });
    }
  },
  created() {
    let id = this.$route.params.id;
    this.getRoles();
    this.getUserRole(id);

    this.$store.watch(
      () => {
        return this.$store.state.Users.isSuccess; 
      },
      newValue => {
        if (newValue && newValue.status) {
          this.$router.replace('/users')
        }
      },
      {
        deep: true
      }
    );
  },
  computed: {
    ...mapGetters(["allRoles"]),
    ...mapGetters(["roleUser"]),
    ...mapGetters(["isSuccess"])
  },
  watch: {
    "$store.state.Users.role": function() {
      console.log('is', this.roleUser)
      this.selected = this.roleUser.roleId
    }
  },
  mounted() {}
};
</script>

<style scoped>
</style>