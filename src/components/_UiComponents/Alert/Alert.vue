<script>
import UButton from "@UI/UButton/UButton.vue";

export default {
  name: "Alert",
  components: {UButton},
  props: {
    type: {
      type: String,
      default: "alert",
      variance: ['alert', 'confirm', 'warning']
    },
    message: {
      type: String,
      required: true,
    }
  },
  beforeCreate() {
    document.documentElement.style.overflow = "hidden"
  },
  setup(_, {emit}) {

    const confirmAlert = (text) => {
      document.documentElement.style.overflow = "hidden auto"
      emit(text)
    }

    return {
      confirmAlert
    }
  }
}
</script>
<template>
  <div class="alert">
    <div class="alert__content">
      <p class="alert__message"><span v-if="type === 'warning'">WARNING:</span> {{message}}</p>
      <div class="alert__button-list">
        <template v-if="type === 'confirm'">
          <UButton @click="confirmAlert('confirm')">Confirm</UButton>
          <UButton modifier="cancel" @click="confirmAlert('close')">Cancel</UButton>
        </template>
        <UButton v-else @click="confirmAlert('confirm')">Confirm</UButton>
      </div>
    </div>
  </div>
</template>
<style src="./Alert.scss" lang="scss" scoped/>