<template>
	<div class="mt-4 grid grid-cols-1">
		<slot name="info-content">
		</slot>
		<img v-motion-slide-visible-left class="mt-2 rounded-lg w-full h-full" src="https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg" />	
	</div>
</template>
