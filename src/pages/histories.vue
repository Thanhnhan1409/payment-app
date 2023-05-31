<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="container-payments">
    <h3 class="page-title">History</h3>
    <div class="bill-service">
      <ul class="bill-content" v-for="history in histories" :key="history.id">
        <li>
          <h3 style="margin-bottom: 20px">Detail transaction</h3>
        </li>
        <li>Service: {{ history.nameService }}</li>
        <li>Id code: {{ history.idCode }}</li>
        <li>Name: {{ history.nameCustomer }}</li>
        <li>Amount: ${{ history.amount }}</li>
        <li>Descript: {{ history.content }}</li>
        <li>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { useHistoryStore } from "../store";
import { reactive, ref } from "vue";

export default {
  setup() {
    const historyStore = useHistoryStore();
    const histories = historyStore.histories;

    const isShow = ref(false);
    const isChoose = ref(false);
    const user = reactive({
      balance: 0, // Initialize with the appropriate value
    });

    const bills = reactive([]); // Initialize with the appropriate value

    const pay = (amount, id) => {
      if (user.balance < amount) {
        alert("Số dư không đủ!");
      } else {
        user.balance -= amount;
        const filteredArray = bills.filter((bill) => bill.id !== id);
        bills.splice(0, bills.length, ...filteredArray);
        alert("Thanh toán thành công!");
      }
    };

    const openPopup = () => {
      isShow.value = true;
    };

    return {
      histories,
      user,
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
