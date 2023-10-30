<script setup>
const { isMobile } = useDevice()

const layout = isMobile ? "activities-mobile" : "activities"
</script>

<template>
	<div class="h-full sm:min-h-screen bg-stone-100 p-8 sm:p-16">
		<div v-motion-slide-visible-left class="mt-4 sm:mt-6">
			<h3 class="text-abso-primary font-bold text-2xl sm:text-5xl">Besoin de communiquer ?</h3>
		</div>
		<NuxtLayout :name="layout">
			<template #info-content>
				<p v-motion-pop-visible class="flex-1 text-lg sm:text-xl text-zinc-500 text-justify my-auto">
					Profitez de chaque occasion pour rehausser votre image de marque !
					<br><br>
					Que ce soit lors de salons professionnels, d'événements spéciaux, ou en offrant des cadeaux d'affaires en fin
					d'année, notre agence publicitaire vous propose une sélection d'objets promotionnels de qualité pour renforcer
					votre image d'entreprise.
				</p>
			</template>
		</NuxtLayout>
		<div class="sm:relative sm:h-48 mt-10 sm:mt-12">
			<div class="sm:w-3/4 mx-auto sm:absolute sm:top-1/2 sm:left-1/2 sm:transform sm:-translate-x-1/2 sm:-translate-y-1/2">
				<p v-motion-fade-visible class="text-xl sm:text-2xl text-abso-secondary text-center">
					Décoration • Imprimerie • Publicité sur objet • Sérigraphie • Insignes • Impression numérique • Communication
					d'entreprise • Illustrations • Graphisme • Signalétiques • Design
				</p>
			</div>
		</div>
	</div>
</template>
