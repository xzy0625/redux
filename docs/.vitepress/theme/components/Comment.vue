<template>
	<div class="comments">
		<Giscus
      v-if="showComment"
      :repo="giscusConfig.repo"
      :repo-id="giscusConfig.repoId"
      :category="giscusConfig.category"
      :category-id="giscusConfig.categoryId"
      :mapping="giscusConfig.mapping"
      :reactions-enabled="giscusConfig.reactionsEnabled"
      :emit-metadata="giscusConfig.emitMetadata"
      :input-position="giscusConfig.inputPosition"
      :theme="isDark ? 'dark' : 'light'"
      :lang="giscusConfig.lang"
      :loading="giscusConfig.loading"
    />
	</div>
</template>
<script setup>
import { reactive, ref, watch, nextTick } from "vue";
import { useData, useRoute } from "vitepress";
import Giscus from '@giscus/vue'

const route = useRoute();

const { isDark } = useData();

// params generate in https://giscus.app/zh-CN
const giscusConfig = reactive({
	repo: "xzy0625/redux", // data-repo属性值
	repoId: "R_kgDOLFg22w", // data-repo-id属性值
	category: "Q&A",
	categoryId: "DIC_kwDOLFg2284CcdKH", // data-category-id属性值 
	mapping: "title",
	strict: "0",
	reactionsEnabled: "1",
	emitMetadata: "0",
	inputPosition: "top",
	// theme: isDark.value ? "dark" : "light", // 需要写在页面里面才会有响应式
	lang: "zh-CN",
	loading: "lazy",
});

const showComment = ref(true);
watch(
	() => route.path,
	() => {
		showComment.value = false;
		nextTick(() => {
			showComment.value = true;
		})
	},
	{
		immediate: true,
	}
);

</script>
<style>
.comments {
	padding: 20px;
	border-radius: 10px;
}
</style>