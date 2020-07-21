<template>
  <div class="envalute-wapper">
    <div v-if="$route.path == '/evaluate'">
      <List />
    </div>
    <router-view v-else>
      <Wexin />
    </router-view>
  </div>
</template>

<script>
import List from './modules/list';
import Wexin from './modules/wexin';
export default {
  name: '',
  components: { List, Wexin },
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>

<style></style>
