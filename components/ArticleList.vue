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
  <main>
    <article v-for="article in articles">
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
          loading="lazy"
        />
      </picture>
      <h3>{{ article.rubric }}</h3>
      <h2>{{ article.title }}</h2>
      <p>{{ article.perex }}</p>
      <NuxtLink :to="`/article/${article.slug}`">Read More</NuxtLink>
    </article>
  </main>
</template>

<style lang="sass" scoped>
main
  max-width: 1200px
  margin: 0 auto
  columns: 1 200px
  column-gap: 20px
  padding: 0 10px
  @media (min-width: 50em)
    columns: 2 200px
  @media (min-width: 70em)
    columns: 3 200px
    padding: 0
img
  width: 100%
  height: auto
  object-fit: cover
  margin-bottom: 20px
article
  display: inline-block
  width: 100%
  text-align: center
  overflow: hidden
  padding-bottom: 30px
@for $i from 1 through 9
  article:nth-child(#{$i})
    img
      $h: (random(150) + 200) + px
      height: $h
h3
  text-transform: uppercase
  font-size: 16px
h2
  position: relative
  margin-bottom: 30px
  font-weight: 700
  &::after
    position: absolute
    left: 50%
    bottom: -30px
    transform: translateX(-50%)
    content: ''
    width: 100px
    height: 1px
    background-color: grey
p
  padding-top: 30px
a
  font-size: 16px
  text-decoration: none
  color: inherit
  &:hover
    text-decoration: underline
</style>
