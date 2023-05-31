<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="container-balance">
    <div class="balance-box">
      Balance:
      <h3>${{ balance }} </h3>
    </div>
  </div>
</template>

<script>
export default {
  props: ["balance"],
};
</script>
<style scoped>
.container-balance {
  padding: 15px 30px;
}
.balance-box {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  box-shadow: 3px 3px 3px 3px rgb(179, 176, 176);
  border-radius: 7px;
  padding: 7px;
  background-color: #ffff;
}

</style>
