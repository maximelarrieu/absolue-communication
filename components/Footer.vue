<template>
	<footer class="footer footer-center p-10 bg-abso-primary text-base-content rounded">
		<nav class="grid grid-flow-col gap-4 text-abso-secondary">
			<a class="link link-hover underline">Mentions légales</a>
			<a class="link link-hover underline">Vie privée</a>
			<a class="link link-hover underline">Informations cookies</a>
		</nav>
		<nav>
			<div class="grid grid-flow-col gap-4 items-center">
				<img src="~/public/logo.png" class="w-32" />
				<div class="flex flex-col gap-4">
					<p class="text-white">
						34 avenue Général de Gaulle, 47000 Agen
					</p>
					<p class="text-white">
						<a href="tel:0553669402"
							class="flex gap-2 items-center">
							<UIcon name="i-heroicons-phone" />
							<span class="text-center">05 53 66 94 02</span>
						</a>
					</p>
					<p class="text-white">
						<a href="mailto:absolue.communication@orange.fr"
							class="flex gap-2 items-center">
							<UIcon name="i-heroicons-envelope" />
							<span class="text-center">Envoyer un email</span>
						</a>
					</p>
				</div>
			</div>
		</nav>
		<aside>
			<p class="text-abso-secondary">Copyright © 2023 - Tous droits réservés par MALAPA Studio</p>
		</aside>
	</footer>
</template>
