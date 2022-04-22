<script setup lang="ts">
import Article from '~/types/Article'

const { articles } = await $fetch('/api/articles')
const pages = useState('pages', () => articles[0].pages)
const heroArticles: Article[] = articles.slice(0, 4)
const hpArticles: Article[] = articles.slice(4, 13)
</script>

<template>
  <NuxtLayout name="default">
    <HeroArticles :articles="heroArticles" />
    <ArticleList :articles="hpArticles" />
  </NuxtLayout>
</template>
