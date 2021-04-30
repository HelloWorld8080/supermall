<template>
  <div class="good-list">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "GoodList"
}
</script>

<style scoped>
  .good-list{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 2px;
  }
</style>
