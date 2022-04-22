<script setup lang="ts">
import Article from '~/types/Article'

const route = useRoute()
const article: Article = await $fetch(`/api/article/${route.params.slug}`)
</script>

<template>
  <NuxtLayout name="default">
    <header>
      <h1>{{ article.title }}</h1>
    </header>
    <main>
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
      <p class="perex">{{ article.perex }}</p>
      <template v-for="content in article.content">
        <template v-if="content.type === 'paragraph'">
          <p>{{ content.value }}</p>
        </template>
        <template v-if="content.type === 'image'">
          <picture>
            <img
              sizes="(max-width: 1200px) 100vw, 1200px"
              :srcset="`
            ../assets/images/${content.value}_w_320.png 320w,
            ../assets/images/${content.value}_w_847.png 847w,
            ../assets/images/${content.value}_w_1200.png 1200w
          `"
              :src="`../assets/images/${article.heroImg}_w_1200.png`"
              :alt="article.title"
              loading="lazy"
            />
          </picture>
        </template>
      </template>
    </main>
  </NuxtLayout>
</template>

<style lang="sass" scoped>
header
  background-color: #fdefe6
  padding: 40px 20px
  @media (min-width: 50em)
    padding: 60px 30px
  @media (min-width: 70em)
    padding: 80px 40px 80px 20%
main
  width: 100%
  max-width: 1000px
  margin: 0 auto
  padding: 40px 10px
  @media (min-width: 70em)
    padding: 40px 0
img
  margin-bottom: 20px
  max-width: 100%
  height: auto
h1
  font-weight: 700
p
  margin-bottom: 20px
</style>
