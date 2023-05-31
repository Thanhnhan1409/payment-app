<template>
  <div class="container-wallet">
  <h3 class="page-title">My Wallet</h3>
    <div class="information-user">
      <img
        src="https://haycafe.vn/wp-content/uploads/2021/11/hinh-anh-hoat-hinh-de-thuong-cute-dep-nhat-600x600.jpg"
        alt=""
      />
      <div class="information-header">
        <p>{{ user.fullname }}</p>
        <p>{{ user.phone }}</p>
      </div>
    </div>
    <img class="my-qr" src="../assets/image/MyQr.png" alt="" />

    <Balance :balance="user.balance" class="balance" />
  </div>
</template>

<script>
import { currentUserStore } from '../store';
import Balance from "../components/Balance.vue";
export default {
  components: {
    Balance,
  },
  setup() {
    const userStore = currentUserStore();

    // Truy cập vào trạng thái người dùng từ store
    const user = userStore.user;

    return {
      user,
    };
  },
  
};
</script>

<style scr="../assets/styles/styles.css"></style>
<style scoped>
.container-wallet{
    height: 100%;
    margin: 0;
}
.information-user {
  /* background-color: #fff; */
  display: flex;
  align-items: flex-end;
  margin: 0 20px;
}
.information-user img {
  width: 60px;
  height: auto;
  border-radius: 50%;
  margin-right: 30px;
}
.my-qr{
    width: 230px;
    margin: 25%;
    margin-bottom: 0;
}
.balance{
    position: absolute;
    bottom: 80px;
    width: 100%;
}
</style>
