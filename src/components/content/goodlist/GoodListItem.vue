<template>
  <div class="good-list-item">
    <slot name="item-img"></slot>
    <slot name="item-text"></slot>
  </div>
</template>

<script>
export default {
  name: "GoodListItem"
}
</script>

<style scoped>
  .good-list-item{
    width: 48%;
    position: relative;
    padding: 5px;
  }
  .good-list-item img{
    width: 100%;
    border-radius: 5px;
  }
</style>
