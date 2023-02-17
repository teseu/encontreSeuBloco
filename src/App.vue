<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Hero from '@/components/TheHero.vue'
import CardBloco from '@/components/CardBloco.vue'
import axios from 'axios'

const blocos = ref([])

onMounted(async () => {
	const { data } = await axios.get('http://localhost:3000/blocos')
	blocos.value = data
	console.log(data)
})
</script>

<template>
	<main class="w-[1440px] h-[532px] mx-auto">
		<Hero />
		<div class="bg-white dark:bg-zinc-800">
			<div class="w-[1216px] mx-auto py-12">
				<div class="flex justify-between mb-6">
					<div class="text-3xl font-bold leading-8">Blocos recomendados</div>
					<div
						class="flex px-4 py-2 bg-zinc-50 dark:bg-zinc-800 rounded-md border border-zinc-400"
					>
						<button
							class="uppercase px-6 py-2 rounded-md text-white bg-purple-600"
						>
							Lista
						</button>
						<button class="uppercase px-6 py-2 rounded-md text-purple-600">
							Mapa
						</button>
					</div>
				</div>
				<div class="grid grid-cols-3 gap-7 mb-4">
					<CardBloco
						v-for="bloco in blocos"
						:key="bloco.id"
						:img="bloco.imagem"
						:alt="bloco.alt"
						:title="bloco.titulo"
						:desc="bloco.descricao"
						:location="bloco.localizacao"
					/>
				</div>
			</div>
		</div>
	</main>
</template>

<style scoped></style>
