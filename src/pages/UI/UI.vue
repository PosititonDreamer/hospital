<script>
    import Alert from "@UI/Alert/Alert.vue";
    import {ref} from "vue";
    import UButton from "@UI/UButton/UButton.vue";

    export default {
        name: "UIPage",
        components: {UButton, Alert},
        setup() {
            const showAlert = ref(false)
            const showConfirm = ref(false)
            const showWarning = ref(false)

            return {
              showAlert,
              showConfirm,
              showWarning
            }
        }
    }
</script>
<template>
    <div class="ui">
      <p class="ui__text ui__text--Thin">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus consequuntur eaque incidunt iste odit provident quis quo soluta tempora voluptatum!</p>
      <p class="ui__text ui__text--ExtraLight">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus consequuntur eaque incidunt iste odit provident quis quo soluta tempora voluptatum!</p>
      <p class="ui__text ui__text--Light">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus consequuntur eaque incidunt iste odit provident quis quo soluta tempora voluptatum!</p>
      <p class="ui__text ui__text--Regular">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus consequuntur eaque incidunt iste odit provident quis quo soluta tempora voluptatum!</p>
      <p class="ui__text ui__text--Medium">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus consequuntur eaque incidunt iste odit provident quis quo soluta tempora voluptatum!</p>
      <p class="ui__text ui__text--SemiBold">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus consequuntur eaque incidunt iste odit provident quis quo soluta tempora voluptatum!</p>
      <p class="ui__text ui__text--Bold">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus consequuntur eaque incidunt iste odit provident quis quo soluta tempora voluptatum!</p>
      <p class="ui__text ui__text--ExtraBold">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus consequuntur eaque incidunt iste odit provident quis quo soluta tempora voluptatum!</p>
      <p class="ui__text ui__text--Black">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus consequuntur eaque incidunt iste odit provident quis quo soluta tempora voluptatum!</p>
      <UButton @click="showAlert = true">Show Alert</UButton>
      <Alert @confirm="showAlert = false" @close="showAlert = false" v-if="showAlert" message="Alert message"></Alert>
      <UButton @click="showConfirm = true">Show Confirm</UButton>
      <Alert type="confirm" @confirm="showConfirm = false" @close="showConfirm = false" v-if="showConfirm" message="Confirm message"></Alert>
      <UButton @click="showWarning = true">Show Warning</UButton>
      <Alert type="warning" @confirm="showWarning = false" @close="showWarning = false" v-if="showWarning" message="Warning message"></Alert>
    </div>
</template>
<style src="./UI.scss" lang="scss" scoped />