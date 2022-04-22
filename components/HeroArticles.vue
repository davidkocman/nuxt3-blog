<script setup lang="ts">
import { PropType } from 'vue'
import Article from '~/types/Article'

const props = defineProps({
  articles: {
    required: true,
    type: Object as PropType<Article[]>,
  },
})
</script>

<template>
  <div class="container-fluid">
    <header class="row g-1">
      <article v-for="article in articles" class="col">
        <picture>
          <img
            sizes="(max-width: 1200px) 100vw, 1200px"
            :srcset="`
            ../assets/images/${article.heroImg}_w_320.png 320w,
            ../assets/images/${article.heroImg}_w_847.png 847w,
            ../assets/images/${article.heroImg}_w_1200.png 1200w
          `"
            :src="`../assets/images/${article.heroImg}_w_1200.png`"
            :alt="article.title"
          />
        </picture>
        <main>
          <h3>{{ article.rubric }}</h3>
          <h2>{{ article.title }}</h2>
          <NuxtLink :to="`/article/${article.slug}`">Read More</NuxtLink>
        </main>
      </article>
    </header>
  </div>
</template>

<style lang="sass" scoped>
header
  display: grid
  grid-template-columns: 1fr
  gap: 4px
  margin-bottom: 30px
  @media (min-width: 50em)
    grid-template-columns: 1fr 1fr
  @media (min-width: 70em)
    grid-template-columns: repeat(4, 1fr)
article
  color: #ffffff
  overflow: hidden
  height: 400px
  position: relative
  display: flex
  justify-content: center
img
  object-fit: cover
  width: 100%
  height: 400px
main
  position: absolute
  bottom: 0
  padding: 0 16px 32px
  display: flex
  justify-content: center
  flex-direction: column
  background: linear-gradient(180deg, rgba(64,64,64,0) 0%, rgba(18,18,18,1) 100%)
h2
  font-weight: 700
  text-align: center
  margin-bottom: 16px
h3
  font-size: 14px
  font-weight: 100
  text-align: center
  text-transform: uppercase
a
  border: 1px solid #ffffff
  display: inline-flex
  justify-content: center
  align-items: center
  margin: 0 auto
  padding: 4px 10px
  color: #ffffff
  text-decoration: none
</style>
