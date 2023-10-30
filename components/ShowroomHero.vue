<script setup>
const { isMobile } = useDevice()

const layout = isMobile ? "showroom-mobile" : "showroom"
</script>
<template>
	<div class="min-h-screen bg-stone-50 p-8 sm:p-16" id="showroom" ref="showroom">
		<div v-motion-slide-visible-left class="mt-4 sm:mt-6">
			<h3 class="sm:text-right text-abso-primary font-bold text-2xl sm:text-5xl">Découvrez notre showroom</h3>
		</div>
		<NuxtLayout :name="layout">
			<template #info-content>
				<p v-motion-pop-visible class="flex-1 text-lg sm:text-xl text-zinc-500 text-justify my-auto">
					Ne laissez pas l'opportunité filer entre vos doigts ! 
					<br><br>
					Soyez le visionnaire de votre secteur en étant le premier à explorer notre impressionnante collection de 20 000 objets publicitaires, exposée dans notre vaste showroom de 30 mètres carrés. Démarquez-vous de vos concurrents, créez un impact inoubliable, et faites de chaque campagne publicitaire un succès remarquable.
				</p>
			</template>
		</NuxtLayout>
		<div class="sm:relative sm:h-48 mt-10 sm:mt-12">
			<div
				class="sm:w-3/4 mx-auto sm:absolute sm:top-1/2 sm:left-1/2 sm:transform sm:-translate-x-1/2 sm:-translate-y-1/2">
				<p v-motion-fade-visible class="text-xl sm:text-2xl text-abso-secondary text-center">Stylos • Briquets • Mugs • Affiches • ...</p>
			</div>
		</div>
	</div>
</template>
