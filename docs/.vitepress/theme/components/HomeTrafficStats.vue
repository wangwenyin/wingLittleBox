<script setup lang="ts">
import { computed, onMounted, shallowRef } from 'vue'
import { useData } from 'vitepress'

interface SiteStatsPayload {
  enabled: boolean
  source: string
  fetchedAt: string
  message?: string
  stats: {
    pageviews: number
    visitors: number
    visits: number
  }
}

const { frontmatter } = useData()
const stats = shallowRef<SiteStatsPayload | null>(null)

const shouldRender = computed(() => frontmatter.value.layout === 'home')
const pageviews = computed(() => formatNumber(stats.value?.stats.pageviews ?? 0))
const visitors = computed(() => formatNumber(stats.value?.stats.visitors ?? 0))

function formatNumber(value: number) {
  return new Intl.NumberFormat('zh-CN').format(value)
}

async function loadStats() {
  if (!shouldRender.value || typeof window === 'undefined') {
    return
  }

  try {
    const response = await fetch('/data/site-stats.json', {
      headers: {
        Accept: 'application/json'
      }
    })

    if (!response.ok) {
      return
    }

    stats.value = (await response.json()) as SiteStatsPayload
  } catch {
    stats.value = null
  }
}

onMounted(() => {
  loadStats()
})
</script>

<template>
  <div v-if="shouldRender && stats?.enabled" class="home-traffic-stats" aria-label="首页访问统计">
    <span class="home-traffic-stats__item">累计访问 {{ pageviews }}</span>
    <span class="home-traffic-stats__divider">/</span>
    <span class="home-traffic-stats__item">累计访客 {{ visitors }}</span>
  </div>
</template>

<style scoped>
.home-traffic-stats {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  padding: 0 1.5rem 1.25rem;
  color: var(--vp-c-text-3);
  font-size: 0.75rem;
  line-height: 1.4;
  letter-spacing: 0.02em;
}

.home-traffic-stats__divider {
  opacity: 0.45;
}

.home-traffic-stats__item {
  font-weight: 400;
}
</style>
