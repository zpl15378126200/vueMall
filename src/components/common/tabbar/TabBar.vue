<template>
    <div id="tab-bar">
      <slot></slot>
    </div>
</template>

<script>
  export default {
    name: "TabBar"
  }
</script>

<style>
  #tab-bar {
    display: flex;
    background-color: #f6f6f6;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    box-shadow: 0px -3px 0px rgba(0, 0, 0, 0.08);
    z-index: 99;
  }
</style>
