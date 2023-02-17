<script setup lang="ts">
import Hero from '@/components/TheHero.vue'
import CardBloco from '@/components/CardBloco.vue'
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
						img="/src/assets/img/bloco1.png"
						alt="man with a top hat"
						title="O Python do vovô não sobe mais"
						desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque cupiditate praesentium cumque."
						location="São Paulo - SP"
					/>
					<CardBloco
						img="/src/assets/img/bloco2.png"
						alt="confetti and streamer"
						title="Todo mundo null"
						desc="Diam amet clita voluptua sit takimata ipsum ipsum dolor. Invidunt."
						location="Florianópolis - SC"
					/>
					<CardBloco
						img="/src/assets/img/bloco3.png"
						alt="crowd in a street party"
						title="Hoje dou exception"
						desc="Ipsum nonumy tempor sed ut at kasd ipsum sed et. Et et nonumy diam nonumy rebum."
						location="Curitiba - PR"
					/>
					<CardBloco
						img="/src/assets/img/bloco4.png"
						alt="a person in a indian costume"
						title="Manda Node"
						desc="Tempor dolor sadipscing takimata est lorem stet diam ipsum. Duo eos rebum rebum lorem. Lorem no duo magna."
						location="Salvador - BA"
					/>
					<CardBloco
						img="/src/assets/img/bloco5.png"
						alt="four people in carnival costumes"
						title="Só no back-end"
						desc="Dolor elitr diam sit gubergren sanctus. Duo rebum rebum est tempor dolores sit elitr."
						location="Brasília - DF"
					/>
					<CardBloco
						img="/src/assets/img/bloco6.png"
						alt="a man playing the trumpet in the middle of the carnival"
						title="Esse anel não é de Ruby"
						desc="Dolor clita consetetur rebum eos est sed labore et. Takimata erat ipsum rebum sit et et,."
						location="Rio de Janeiro - RJ"
					/>
					<CardBloco
						img="/src/assets/img/bloco7.png"
						alt="three girls in carnival costumes"
						title="Pimenta no C# dos outros é refresco"
						desc="Amet at sit eirmod labore clita dolores et voluptua, amet takimata elitr at nonumy est sea eirmod.."
						location="Porto Alegre - RS"
					/>
					<CardBloco
						img="/src/assets/img/bloco8.png"
						alt="a carnival party"
						title="EnCache aqui"
						desc="Labore amet at nonumy sadipscing lorem eirmod takimata, nonumy ut amet sed stet, et invidunt."
						location="Fortaleza - CE"
					/>
					<CardBloco
						img="/src/assets/img/bloco9.png"
						alt="a woman with paited face"
						title="Não valho nada mas JAVA li"
						desc="Aliquyam sed ipsum consetetur no voluptua vero tempor dolores sadipscing dolore, amet amet dolores duo et sed dolores."
						location="Belo Horizonte - MG"
					/>
				</div>
			</div>
		</div>
	</main>
</template>

<style scoped></style>
