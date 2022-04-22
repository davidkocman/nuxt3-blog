<script setup lang="ts">
const activePage = useState('activePage')
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <NuxtLink to="/" class="navbar-brand">Logo</NuxtLink>
      <NuxtLink v-if="activePage" :to="`/articles/${activePage}`"
        >Last active page: {{ activePage }}</NuxtLink
      >
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarTogglerDemo02"
        aria-controls="navbarTogglerDemo02"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="collapse navbar-collapse flex justify-content-end"
        id="navbarTogglerDemo02"
      >
        <ul class="nav">
          <li class="nav-item">
            <NuxtLink to="/" class="nav-link text-dark">Home</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink to="/" class="nav-link text-dark">About</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink to="/articles/1" class="nav-link text-dark"
              >Blog</NuxtLink
            >
          </li>
          <li class="nav-item">
            <NuxtLink to="#" class="nav-link text-dark">Contact</NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<style lang="sass" scoped></style>
