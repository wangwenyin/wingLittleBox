<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, onMounted, watch } from 'vue'
import { useData, useRoute } from 'vitepress'

const GISCUS_SESSION_KEY = 'giscus'
const GISCUS_THEME_LIGHT_PATH = '/giscus-theme-light.css'
const GISCUS_THEME_DARK_PATH = '/giscus-theme-dark.css'

const { isDark, frontmatter, lang } = useData()
const route = useRoute()

const commentsContainerId = 'giscus-comments'

const shouldRender = computed(() => {
  if (frontmatter.value.comment === false) {
    return false
  }

  return frontmatter.value.layout !== 'home'
})

const themeName = computed(() => getThemeUrl(isDark.value))

function getThemeUrl(dark: boolean) {
  if (typeof window === 'undefined') {
    return dark ? 'dark' : 'light'
  }

  const path = dark ? GISCUS_THEME_DARK_PATH : GISCUS_THEME_LIGHT_PATH

  return new URL(path, window.location.origin).toString()
}

function waitForGiscusFrame(callback: () => void, retries = 30) {
  if (typeof window === 'undefined') {
    return
  }

  const frame = document.querySelector<HTMLIFrameElement>('iframe.giscus-frame')

  if (frame) {
    callback()
    return
  }

  if (retries <= 0) {
    return
  }

  window.setTimeout(() => waitForGiscusFrame(callback, retries - 1), 200)
}

function sendMessage(message: Record<string, unknown>) {
  if (typeof window === 'undefined') {
    return
  }

  const frame = document.querySelector<HTMLIFrameElement>('iframe.giscus-frame')

  frame?.contentWindow?.postMessage({ giscus: message }, 'https://giscus.app')
}

function syncTheme() {
  waitForGiscusFrame(() => {
    sendMessage({
      setConfig: {
        theme: themeName.value
      }
    })
  })
}

function createScript() {
  if (typeof document === 'undefined') {
    return null
  }

  const script = document.createElement('script')
  script.src = 'https://giscus.app/client.js'
  script.async = true
  script.crossOrigin = 'anonymous'

  script.setAttribute('data-repo', 'wangwenyin/wingLittleBox')
  script.setAttribute('data-repo-id', 'R_kgDOR_N7Jg')
  script.setAttribute('data-category', 'Announcements')
  script.setAttribute('data-category-id', 'DIC_kwDOR_N7Js4C8a0B')
  script.setAttribute('data-mapping', 'pathname')
  script.setAttribute('data-strict', '0')
  script.setAttribute('data-reactions-enabled', '1')
  script.setAttribute('data-emit-metadata', '0')
  script.setAttribute('data-input-position', 'top')
  script.setAttribute('data-theme', themeName.value)
  script.setAttribute('data-lang', lang.value === 'zh-CN' ? 'zh-CN' : 'en')
  script.setAttribute('data-loading', 'lazy')

  return script
}

function removeExistingComments() {
  if (typeof document === 'undefined') {
    return
  }

  const container = document.getElementById(commentsContainerId)

  if (container) {
    container.innerHTML = ''
  }
}

function renderComments() {
  if (!shouldRender.value || typeof document === 'undefined') {
    removeExistingComments()
    return
  }

  const container = document.getElementById(commentsContainerId)

  if (!container) {
    return
  }

  container.innerHTML = ''

  const script = createScript()

  if (script) {
    container.appendChild(script)
  }
}

function clearStoredSession() {
  if (typeof window === 'undefined') {
    return
  }

  window.sessionStorage.removeItem(GISCUS_SESSION_KEY)
}

onMounted(() => {
  renderComments()
})

watch(
  () => route.path,
  async () => {
    clearStoredSession()
    await nextTick()
    renderComments()
  }
)

watch(themeName, () => {
  syncTheme()
})

watch(
  () => shouldRender.value,
  async () => {
    await nextTick()
    renderComments()
  }
)

onBeforeUnmount(() => {
  removeExistingComments()
})
</script>

<template>
  <section v-if="shouldRender" class="giscus-comments">
    <div :id="commentsContainerId" />
  </section>
</template>

<style scoped>
.giscus-comments {
  margin-top: 2.5rem;
  padding-top: 1.25rem;
}
</style>
