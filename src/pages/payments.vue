<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="container-payments">
    <div class="payment">
      Balance: $ {{ user.balance }}
      <div class="payments-options">
        <button
          :class="['payments-item', isChoose ? 'isChose' : '']"
          @click="isChoose = !isChoose"
        >
          PayApp
        </button>
        <button
          :class="['payments-item', !isChoose ? 'isChose' : '']"
          @click="isChoose = !isChoose"
        >
          Credit
        </button>
      </div>
    </div>
    <div class="bill-service">
      <ul calss="bill-content">
        <li>
          <h3 style="margin-bottom: 20px">Detail transaction</h3>
        </li>
        <li>Service:     {{ bill.nameService }}</li>
        <li>Id code:     {{ bill.idCode }}</li>
        <li>Name: {{ bill.nameCustomer }}</li>
        <li>Amount: ${{ bill.amount }}</li>
        <li>Descript: {{ bill.content }}</li>
      </ul>
    </div>
    <button class="pay" @click="pay()">
      Pay
    </button>
    <PopupConfrim
    @closePopup="pay()"
    @action ='pay()'
    v-if="isShow"
    />
  </div>
</template>

<script>
import { useUserStore } from '../store';
import PopupConfrim from '../components/PopupConfrim.vue';
export default {
  component:{
    PopupConfrim
  },
  data() {
    return {
      isShow:false,
      isChoose: false,
      bill:{
        nameService: "house money",
        idCode: "1231",
        nameCustomer: "Billie Anna",
        amount: 23,
        content: "no content",
      },
    }
  },
  setup() {
    const userStore = useUserStore();

    // Truy cập vào trạng thái người dùng từ store
    const user = userStore.user;

    return {
      user,
    };
  },
  methods:{
    pay(){
      if(this.user.balance < this.bill.amount)
      {
        console.log("aaa");
      }
    },
    openPopup(){
      this.isShow = true;
    }
  }
};
</script>

<style scoped>
.payment {
  border-radius: 15px;
  box-shadow: 3px 3px 3px 3px rgb(221, 218, 218);
  background-color: rgb(253, 253, 253);
  padding: 10px 30px;
  margin: 0 40px;
}
.payments-options {
  display: flex;
  padding: 10px;
  align-content: space-around;
  align-items: stretch;
  justify-content: space-around;
}
.payments-item {
  padding: 7px 15px;
  border: 1px solid black;
  border-radius: 10px;
  cursor: pointer;
  background-color: #fff;
  width: 100px;
}
.isChose {
  background-color: rgb(30, 53, 153);
  color: #fff;
  border: 1px solid #fff;
}
.bill-service{
    border-radius: 15px;
  box-shadow: 3px 3px 3px 3px rgb(221, 218, 218);
  background-color: rgb(253, 253, 253);
  padding: 10px 30px;
  margin: 40px;
  margin-top: 60px;
  padding:  40px 20px 80px 20px;
}
ul li{
  padding: 7px ;
  border-bottom: 1px solid rgb(202, 201, 201);
}
.pay{
  padding: 7px;
  width: 84%;
  margin: 0 8.7%;
  text-align: center;
  font-size: 20px;
  font-weight: 600;
  border-radius: 10px;
  background-color: rgb(30, 53, 153);
  color: #fff;
  cursor: pointer;
}
</style>
