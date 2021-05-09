<template>
  <div class="select-bar-item">
    <slot></slot>
  </div>
</template>

<script>

export default {
  name: "SelectBarItem",
  components: {

  },
  props: {

  }
}
</script>

<style scoped>
.select-bar-item{
  /*margin: 7px 0px;*/
  /*height: 20%;*/
  border-left: 3px solid #cbc4c4;
  text-align: center;
  flex: 1;
}
</style>
