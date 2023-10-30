<template>
	<div class="h-full sm:min-h-screen bg-stone-100 p-8 sm:p-16">
		<div v-motion-fade-visible class="mt-4 sm:mt-6">
			<h3 class="text-abso-primary font-bold text-2xl sm:text-5xl text-center">Informations générales</h3>
		</div>
		<div class="mt-4 sm:mt-12 sm:flex sm:flex-row flex-col gap-12">
			<div class="flex-1">
				<h4 class="text-abso-secondary font-bold text-center text-xl sm:text-3xl">Horaires</h4>
				<div class="flex w-11/12 sm:w-2/3 mx-auto justify-between text-lg sm:text-xl text-zinc-500 mt-2 sm:mt-4">
					<p>Lundi - Vendredi</p>
					<p>09:00 - 12:00<br>14:00 - 18:00</p>
				</div>
				<div class="flex w-11/12 sm:w-2/3 mx-auto justify-between text-lg sm:text-xl text-zinc-500 mt-2 sm:mt-4">
					<p>Samedi - Dimanche</p>
					<p>Fermé</p>
				</div>
			</div>
			<div class="flex-1 mt-4 sm:mt-0">
				<h4 class="text-abso-secondary font-bold text-center text-xl sm:text-3xl">Contact</h4>
				<div v-motion-slide-visible-bottom class="sm:flex sm:flex-row flex flex-col mt-2 sm:mt-10 w-full">
					<a href="tel:0553669402" class="text-lg sm:text-xl w-2/3 sm:w-1/3 mx-auto flex items-center gap-2 text-zinc-500 justify-center">
						<UIcon name="i-heroicons-phone" />
						<span class="text-center">05 53 66 94 02</span>
					</a>
					<a href="tel:0553669402" class="text-lg sm:text-xl w-2/3 sm:w-1/3 mx-auto flex items-center gap-2 text-zinc-500 justify-center">
						<UIcon name="i-heroicons-envelope" />
						<span class="text-center">Envoyer un e-mail</span>
					</a>
				</div>
			</div>
		</div>
	</div>
</template>
