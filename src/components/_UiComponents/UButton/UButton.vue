<script>
    import {computed} from "vue";

    export default {
        name: "UButton",
        props: {
          disabled: {
            type: Boolean,
            default: false
          },
          modifier: {
            type: String,
            default: ""
          }
        },
        setup({modifier}) {

            const classList = computed(() => {
              const finalClassList = ["button"];
              if(modifier === 'cancel') {
                finalClassList.push("button--cancel");
              }
              return finalClassList.join(" ");
            });

            return {
              classList
            }
        }
    }
</script>
<template>
    <button :class="classList" :disabled="disabled">
        <slot></slot>
    </button>
</template>
<style src="./UButton.scss" lang="scss" scoped />