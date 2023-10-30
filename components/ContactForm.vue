<script setup lang="ts">
import { ref } from 'vue'
import type { FormError, FormSubmitEvent } from '@nuxt/ui/dist/runtime/types'

const state = ref({
	email: undefined,
	name: undefined,
	phone: undefined,
	message: undefined
})

const validate = (state: any): FormError[] => {
	const errors = []
	if (!state.email) errors.push({ path: 'email', message: 'Ce champ ne doit pas être vide' })
	if (!state.name) errors.push({ path: 'name', message: 'Ce champ ne doit pas être vide' })
	if (!state.phone) errors.push({ path: 'phone', message: 'Ce champ ne doit pas être vide' })
	if (!state.message) errors.push({ path: 'message', message: 'Ce champ ne doit pas être vide' })
	return errors
}

async function submit(event: FormSubmitEvent<any>) {
	// Do something with data
	console.log(event.data)
}
</script>

<template>
	<UForm :validate="validate" :state="state" @submit="submit">
		<UFormGroup label="Nom" name="name" required size="xl">
			<UInput v-model="state.name" placeholder="Dupont Pierre" icon="i-heroicons-user" />
		</UFormGroup>
		<UFormGroup label="Email" name="email" required size="xl" class="mt-2">
			<UInput v-model="state.email" placeholder="pierredupont@gmail.com" icon="i-heroicons-envelope" />
		</UFormGroup>
		<UFormGroup label="Téléphone" name="phone" required size="xl" class="mt-2">
			<UInput v-model="state.phone" placeholder="06 00 00 00 00" icon="i-heroicons-phone" />
		</UFormGroup>
		<UFormGroup label="Message" name="message" required size="xl" :rows="6" class="mt-2">
			<UTextarea v-model="state.message" placeholder="Votre message..." />
		</UFormGroup>

		<UButton type="submit" class="mt-4 bg-abso-secondary" size="xl">Envoyer un message</UButton>
	</UForm>
</template>

