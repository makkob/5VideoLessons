<template>
  <q-page class="row items-center justify-evenly">
    <videos-component title="Example component" active />
  </q-page>
</template>

<script lang="ts">
import VideosComponent from 'src/components/VideosComponent.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'IndexPage',
  components: { VideosComponent },
});
</script>
