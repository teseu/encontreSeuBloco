<template>
	<div>
		<div class="content w-full relative h-[36rem]">
			<div class="hero__title w-3/5 mx-auto px-16 pt-32 pb-20">
				<div class="uppercase text-red-600 text-lg text-center mb-4">
					Find your block
				</div>
				<div
					class="text-5xl text-black dark:text-white font-extrabold text-center"
				>
					Encontre os
					<span class="text-purple-600 font-extrabold">melhores blocos</span> de
					carnaval de 2023
				</div>
			</div>
			<div
				class="form__container bg-white dark:bg-zinc-800 w-2/3 mx-auto rounded-lg py-8 mb-16"
			>
				<form class="form flex justify-around">
					<div class="input-container">
						<input
							class="rounded-lg border-0"
							type="text"
							placeholder="Pesquise por nome"
						/>
					</div>
					<div class="input-container rounded-lg">
						<select class="rounded-lg border-0" name="cidade" id="cidade">
							<option value="">Selecione uma cidade</option>
						</select>
					</div>
					<div class="input-container">
						<button
							class="text-white uppercase bg-purple-600 rounded-lg px-4 py-2"
						>
							Buscar agora
						</button>
					</div>
				</form>
			</div>
			<img
				class="absolute top-0 left-0"
				src="../assets/img/ilustra-01.svg"
				alt="penas"
			/>
			<img
				class="absolute bottom-0 right-0"
				src="../assets/img/ilustra-02.svg"
				alt="mulher dançando"
			/>
		</div>
	</div>
</template>
