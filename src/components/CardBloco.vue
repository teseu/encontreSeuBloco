<script setup lang="ts">
defineProps({
	img: String,
	alt: String,
	title: String,
	desc: String,
	location: String,
})
</script>

<template>
	<div class="border border-zinc-200 rounded-lg">
		<img class="mb-3 rounded-t-lg" :src="img" :alt="alt" />
		<div class="px-6 py-2">
			<div class="text-lg font-semibold">{{ title }}</div>
			<div class="block__desc">
				{{ desc }}
			</div>
			<i></i>
			<div class="location mt-4 mb-2">{{ location }}</div>
		</div>
	</div>
</template>
