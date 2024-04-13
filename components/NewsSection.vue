<script setup lang="ts">
import { useMainStore } from "#imports";

const store = useMainStore();
const selectedLangText = computed<object>(() => store.selectedLangText);
const currentLanguage = computed<object>(() => store.currentLanguage);
// console.log(selectedLangText.value['updates_blog'][0]['title'][`title_${currentLanguage.value.toLowerCase()}`]);

</script>

<template>
  <div class="container-news">
    <div class="top-line-wrapper">
      <h3 class="h3">News <span>Updates</span> & Blog</h3>
    </div>
    <div class="news-wrapper">
      <template v-for="(item, key) in selectedLangText['updates_blog']" :key="key">
        <NewsItem v-if="item !== null" 
          :text="item['title'][`title_${currentLanguage.toLowerCase()}`]"
          :image="item['article_img']['blog_pic']"
          :size="key === selectedLangText['updates_blog'].length - 1 ? 'big' : 'middle'" />
      </template>
    </div>
  </div>
</template>
<style lang="scss">
.top-line-wrapper {
  max-width: 100%;
  width: 100%;
  text-align: center;
  padding: 20px 0;

  .h3 {
    text-align: center;
    font-family: Open Sans;
    font-size: 48px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: -0.72px;

    span {
      color: #09C;
    }
  }
}

.news-wrapper {
  display: flex;
  flex-wrap: wrap;
  column-gap: 20px;
}

@media (max-width: 756px) {
  .news-wrapper {
    flex-direction: column;
    align-items: center;
  }
}
</style>
