<template>
  <div :class="{ 'has-logo': showLogo }">
    <logo v-if="showLogo" :collapse="isCollapse" />
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        :default-active="activeMenu"
        :collapse="isCollapse"
        :background-color="variables.menuBg"
        :text-color="variables.menuText"
        :unique-opened="false"
        :active-text-color="variables.menuActiveText"
        :collapse-transition="false"
        mode="vertical"
      >
        <sidebar-item
          v-for="route in routes"
          :key="route.path"
          :item="route"
          :base-path="route.path"
        />
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Logo from "./Logo";
import SidebarItem from "./SidebarItem";
import variables from "@/styles/variables.scss";
import { All_STATIC_ROUTES } from "@/router/index";
export default {
  components: { SidebarItem, Logo },
  data() {
    return {
      routes: [],
    };
  },
  created() {
    this.getSideBarList();
  },
  computed: {
    ...mapGetters(["sidebar"]),
    activeMenu() {
      const route = this.$route;
      const { meta, path } = route;
      // if set path, the sidebar will highlight the path you set
      if (meta.activeMenu) {
        return meta.activeMenu;
      }
      return path;
    },
    showLogo() {
      return this.$store.state.settings.sidebarLogo || true;
    },
    variables() {
      return variables;
    },
    isCollapse() {
      return !this.sidebar.opened;
    },
  },
  methods: {
    getSideBarList() {
      // 动态获取路径
      // this.$get("permission/menuList", this.listQuery).then((resp) => {
      //   this.routes = resp.data.items;
      //   if (resp.data.sysRoleIds) {
      //     this.$store.dispatch("setRoleIds", resp.data.sysRoleIds);
      //   }
      // });
      // 加载全部路径
      this.routes = All_STATIC_ROUTES;
    },
  },
};
</script>
