<script setup lang="ts">
import Article from '~/types/Article'

const route = useRoute()
const activePage = useState('activePage', () => route.params.page)
const articles: Article[] = await $fetch(`/api/articles/${route.params.page}`)
</script>

<template>
  <NuxtLayout name="default">
    <ArticleList :articles="articles" />
    <Pagination :activePage="parseInt(route.params.page)" />
  </NuxtLayout>
</template>
