<template>
  <div class="movie-nowplaying">
    <div v-if="movies.length" class="movie-grid">
      <a
        v-for="movie in movies"
        :key="movie.href"
        :href="movie.href"
        class="movie-card"
        target="_blank"
        rel="noreferrer"
      >
        <img :src="movie.cover" :alt="movie.title" loading="lazy" />
        <span>{{ movie.title }}</span>
      </a>
    </div>
    <p v-else class="movie-empty">最近热映数据暂时不可用。</p>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";

type MovieItem = {
  title: string;
  href: string;
  cover: string;
};

const movies = ref<MovieItem[]>([]);

onMounted(async () => {
  try {
    const response = await fetch("/data/douban-nowplaying.json");
    if (!response.ok) {
      return;
    }

    const data = (await response.json()) as { movies?: MovieItem[] };
    movies.value = Array.isArray(data.movies) ? data.movies.slice(0, 5) : [];
  } catch {
    movies.value = [];
  }
});
</script>

<style scoped>
.movie-nowplaying {
  margin-top: 8px;
}

.movie-grid {
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
}

.movie-card {
  color: inherit;
  text-decoration: none;
}

.movie-card img {
  aspect-ratio: 2 / 3;
  border-radius: 10px;
  display: block;
  object-fit: cover;
  width: 100%;
}

.movie-card span {
  color: var(--vp-c-text-1);
  display: block;
  line-height: 1.5;
  margin-top: 8px;
}

.movie-card:hover span {
  color: var(--vp-c-brand-1);
  text-decoration: underline;
}

.movie-empty {
  color: var(--vp-c-text-2);
  line-height: 1.7;
  margin: 12px 0 0;
}
</style>
