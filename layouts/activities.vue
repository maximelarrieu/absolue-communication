<template>
	<div class="mt-12 grid grid-cols-2 gap-24">
			<slot name="info-content">
			</slot>
		<img v-motion-slide-visible-right class="rounded-lg w-full h-full" src="https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg" />	
	</div>
</template>
