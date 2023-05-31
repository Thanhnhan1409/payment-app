<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="login-form">
    <img src="../assets/image/logo.png" alt="" />
    <h4>Login with PalPay</h4>
    <div class="content">
      <form @submit="login()">
        <div class="form">
          <p>User Name: <small style="color: #c7422e">*</small></p>
          <input
            v-model="userName"
            type="text"
            class="box"
            name="Tài khoản"
            id=""
            placeholder="Nhập số CCCD"
            autocomplete="on"
          />
          <p>Password: <small style="color: #c7422e">*</small></p>
          <input
            class="box"
            type="password"
            v-model="password"
            placeholder="Nhập mật khẩu"
            autocomplete="on"
            name="Mật khẩu"
          />
          <button class="login">Login</button>
          <div class="textInSeparator"></div>
          <button class="sign-up">Sign up</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>

import { useUserStore, currentUserStore } from "../store";
import { ref } from "vue";
import { useRouter } from 'vue-router';
export default {
  setup() {
    const userName = ref("");
    const password = ref("");
    const router = useRouter();

    const userStore = useUserStore();
    const currentUserStoreData = currentUserStore();

    const users = userStore.users;
    const currentUser = currentUserStoreData.user;
    const login = () => {
      if (users.some((user) => user.username === userName.value)) {
        alert("Login success!");

        currentUserStoreData.setCurrentUser(userStore.getUserByUsername(userName.value));
        router.push("/home");
      } else {
        alert("Login failed!");
      }
    };

    return {
      userName,
      password,
      users,
      login,
      currentUser
    };
  },
};
</script>

<style scoped>
body {
  padding: 0;
  margin: 0;
}

html {
  margin: 0;
  padding: 0;
  overflow: hidden;
}
.login-form {
  margin-top: 70px;
  z-index: 100;
  position: relative;
  bottom: 0;
  height: 650px;
  background-color: #fff;
}

.content {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 105px;
}
img {
  width: 150px;
}
.form {
  padding: 10px 40px 40px;
  background-color: #fff;
  height: 380px;
  width: 350px;
  text-align: start;
  margin-bottom: 50px;
}

input {
  width: 260px;
  height: 25px;
  border: 1px solid rgb(30, 53, 153);
  border-radius: 4px;
  margin: 10px 0;
}

.login {
  width: 263px;
  height: 35px;
  /* margin-top: 50px; */
  background: rgb(30, 53, 153);
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 600;
  margin-top: 40px;
}
.sign-up {
  width: 263px;
  height: 35px;
  /* margin-top: 50px; */
  background: #fff;
  /* color: #fff; */
  border: 1px solid black;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 600;
}
.box {
  padding: 5px 10px;
}
.err {
  font-size: 12px;
  display: flex;
  justify-content: flex-start;
  color: #ff4433;
}
.textInSeparator{
    border-top: 1px solid #cbd2d6; 
    position: relative;
    margin-top: 8.72%;
    margin-bottom: 4.895%;
    height: 15px;
    text-align: center;
    font-size: 83.34%;
}
</style>
