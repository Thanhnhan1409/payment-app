<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="container-home">
    <payment-button/>
    <Balance :balance="user.balance" />
  </div>
</template>

<script>
import Balance from "../components/Balance.vue";
import PaymentButton from '../components/PaymentButton.vue';
import { useUserStore } from '../store';
export default {

  setup() {
    const userStore = useUserStore();

    // Truy cập vào trạng thái người dùng từ store
    const user = userStore.user;

    return {
      user,
    };
  },
  components: {
    Balance,
    PaymentButton,
  },
};
</script>

<style scoped></style>
