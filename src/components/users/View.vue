<template>
  <Frame>
    <div class="overflow-auto">

      <b-table
        id="my-table"
        selectable
        select-mode="single"
        :items="allUser"
        :fields="fields"
        :per-page="perPage"
        :current-page="currentPage"
        @row-selected="onRowSelected"
        class="mt-3"
        outlined
      ></b-table>
      <b-pagination
        v-model="currentPage"
        :total-rows="rows"
        :per-page="perPage"
        aria-controls="my-table"
      ></b-pagination>
    </div>
  </Frame>
</template>

<script>
import Frame from "../Frame";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "ViewUser",
  components: { Frame },
  data() {
    return {
      perPage: 2,
      currentPage: 1,
      fields: [
        {
          key: "id",
          label: "Id",
          sortable: true
        },
        {
          key: "username",
          label: "Username",
          sortable: false
        },
        {
          key: "email",
          label: "Email",
          sortable: true
        },
        {
            key: "Previllage.Role.name",
            label: "Role"
        }
      ]
    };
  },
  methods: {
    ...mapActions(["getUsers"]),
    onRowSelected(item) {
        this.$router.push({
            path: `/users/edit/${item[0].id}`
        })
    }
  },
  created() {
    this.getUsers();
  },
  computed: {
    ...mapGetters(["allUser"]),
    rows() {
      return this.allUser.length;
    }
  }
};
</script>