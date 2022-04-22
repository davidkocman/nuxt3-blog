<script setup lang="ts">
const props = defineProps({
  activePage: {
    required: true,
    type: Number,
  },
})
const pages = useState('pages')
const activePage = useState('activePage')
</script>

<template>
  <nav aria-label="..." class="d-flex justify-content-center">
    <ul class="pagination pagination-lg">
      <li v-for="(item, index) in pages" class="page-item">
        <NuxtLink
          :to="`/articles/${index + 1}`"
          class="page-link"
          @click="activePage = index + 1"
          >{{ item }}</NuxtLink
        >
      </li>
    </ul>
  </nav>
</template>
