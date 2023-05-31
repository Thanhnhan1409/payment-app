<template>
  <div class="container-wallet">
    <h3 class="page-title">My Wallet</h3>
    <div class="information-user">
      <img
        src="https://haycafe.vn/wp-content/uploads/2021/11/hinh-anh-hoat-hinh-de-thuong-cute-dep-nhat-600x600.jpg"
        alt=""
      />
      <div class="information-header">
        <h4>{{ user.fullname }}</h4>
        <p>{{ user.phone }}</p>
      </div>
      <svg class="logOut-sgv" @click="$router.push('/')" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path
          d="M217.9 105.9L340.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L217.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1L32 320c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM352 416l64 0c17.7 0 32-14.3 32-32l0-256c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l64 0c53 0 96 43 96 96l0 256c0 53-43 96-96 96l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32z"
        />
      </svg>
    </div>
    <img class="my-qr" src="../assets/image/MyQr.png" alt="" />

    <Balance :balance="user.balance" class="balance" />
  </div>
</template>

<script>
import { currentUserStore } from "../store";
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
.container-wallet {
  height: 100%;
  margin: 0;
  overflow: hidden;
  position: relative;
}
.information-user {
  /* background-color: #fff; */
  display: flex;
  align-items: flex-end;
  margin: 0 20px;
}
.information-user img {
  width: 80px;
  height: auto;
  border-radius: 50%;
  margin-right: 30px;
}
.my-qr {
  width: 230px;
  margin: 25%;
  margin-bottom: 0;
}
.balance {
  position: absolute;
  bottom: 80px;
  width: 100%;
}
.logOut-sgv{
  width: 30px;
  fill:rgb(30, 53, 153);
  position: absolute;
  right: 20px;
  top: 40px;
  transition: all 0.4s linear;
  cursor: pointer;
}
.logOut-sgv:hover{
  transform: scale(1.02);
  transform: translateX(10px);
}
</style>
