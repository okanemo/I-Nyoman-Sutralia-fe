<template>
  <sidebar-menu :menu="menu" class="position" />
</template>

<script>
export default {
  data() {
    return {
      menu: [
        {
          href: "/",
          title: "Dashboard",
          icon: "fa fa-user"
        },
        {
          href: "/users",
          title: "Users",
          icon: "fa fa-chart-area"
        }
      ]
    };
  }
};
</script>


<style scoped>
.position {
  margin-top: 56px;
}
</style>