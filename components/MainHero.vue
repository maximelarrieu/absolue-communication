<template>
	<div class="hero min-h-screen"
		style="background-image: url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg);">
		<div class="hero-overlay bg-opacity-70"></div>
		<div class="hero-content text-center text-neutral-content relative">
			<div>
				<h1 v-motion-fade-visible class="mb-10 text-4xl sm:text-7xl font-bold text-white">Absolue Communication</h1>
				<div v-motion-slide-visible-bottom class="divider w-1/2 mx-auto"></div>
				<h2 v-motion-slide-visible-bottom class="mb-5 text-2xl text-white">Votre agence de publicité agenaise</h2>
				<div v-motion-slide-visible-bottom class="divider w-1/2 mx-auto"></div>
				<div v-motion-slide-visible-bottom class="flex">
					<a href="tel:0553669402" class="w-1/2 sm:w-1/3 mx-auto flex items-center gap-2 text-white justify-center">
						<UIcon name="i-heroicons-phone" />
						<span class="text-center">05 53 66 94 02</span>
					</a>
					<a href="tel:0553669402" class="w-1/2 sm:w-1/3 mx-auto flex items-center gap-2 text-white justify-center">
						<UIcon name="i-heroicons-envelope" />
						<span class="text-center">Envoyer un e-mail</span>
					</a>
				</div>
			</div>
		</div>
		<div
			class="text-center absolute bottom-2 sm:bottom-[3%] flex items-center gap-2 text-abso-secondary left-1/2 transform -translate-x-1/2">
			<p class="italic">En savoir plus</p>
			<UIcon name="i-heroicons-chevron-double-down" class="animate-bounce" />
		</div>
	</div>
</template>
