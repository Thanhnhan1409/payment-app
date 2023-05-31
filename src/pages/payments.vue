<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="container-payments">
    <h3 class="page-title">Payments</h3>
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
      <ul class="bill-content" v-for="bill in bills" :key="bill.id">
        <li>
          <h3 style="margin-bottom: 20px">Detail transaction</h3>
        </li>
        <li>Service: {{ bill.nameService }}</li>
        <li>Id code: {{ bill.idCode }}</li>
        <li>Name: {{ bill.nameCustomer }}</li>
        <li>Amount: ${{ bill.amount }}</li>
        <li>Descript: {{ bill.content }}</li>
        <li>
          <button class="pay" @click="pay(bill.amount, bill.id)">Pay</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { currentUserStore, usebillStore, useHistoryStore } from "../store";
import { ref } from "vue";

export default {
  setup() {
    const currentUserStoreData = currentUserStore();
    const billStore = usebillStore();
    const historyStore = useHistoryStore();

    const isShow = ref(false);
    const isChoose = ref(false);

    // Access the user, bills, and histories from the stores
    const user = currentUserStoreData.user;
    const bills = billStore.bills;
    const histories = historyStore.histories;
    

    const pay = (amount, id) => {
      if (user.balance < amount) {
        alert("Your balance is not enough");
      } else {
        user.balance -= amount;
        const tmp = bills.find((object) => (object.id = id));
        histories.push(tmp);
        bills.splice(bills.findIndex((object) => object.id === id), 1);
        alert("payment success!");
      }
    };

    const openPopup = () => {
      isShow.value = true;
    };

    return {
      user,
      histories,
      bills,
      pay,
      openPopup,
      isShow,
      isChoose,
    };
  },
};
</script>

<style scoped>
.container-payments {
  height: 100%;
  overflow: hidden;
}
.bill-content {
  margin: 0 12px;
  border-radius: 15px;
  box-shadow: 3px 3px 3px 3px rgb(221, 218, 218);
  background-color: rgb(253, 253, 253);
  padding: 10px 30px;
  margin-top: 12px;
}
.payment {
  border-radius: 15px;
  box-shadow: 3px 3px 3px 3px rgb(221, 218, 218);
  background-color: rgb(253, 253, 253);
  padding: 10px 30px;
  margin: 0 12px;
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
.bill-service {
  overflow: auto;
  margin-top: 28px;
  max-height: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding-bottom: 300px;
}
ul li {
  padding: 7px;
  border-bottom: 1px solid rgb(202, 201, 201);
}
.pay {
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
