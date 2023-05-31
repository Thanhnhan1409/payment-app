<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="container-pay">
      <div class="pay-box">
        <h3 @click="$router.push('/payments')">Payment</h3>
      </div>
      
    </div>
  </template>
  
  <script>
  export default {
    props: ["balance"],
  };
  </script>
  <style scoped>
  .container-pay {
    padding: 15px 30px;
  }
  .pay-box {
    width: 100%;
    box-shadow: 3px 3px 3px 3px rgb(179, 176, 176);
    border-radius: 7px;
    padding: 7px;
    text-align: center;
    background-color:  rgb(30, 53, 153);
    color: #fff;
    cursor: pointer;
  }
  .pay-box svg {
    width: 10px;
    height: auto;
  }
  </style>
  