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
    <PopupConfrim @closePopup="pay()" @action="pay()" v-if="isShow" />
  </div>
</template>

<script>
import { useHistoryStore } from "../store";
import PopupConfrim from "../components/PopupConfrim.vue";
export default {
  component: {
    PopupConfrim,
  },
  data() {
    return {
      isShow: false,
      isChoose: false,
    };
  },
  setup() {
    const historyStore = useHistoryStore();
    const histories = historyStore.histories;
    return {
        histories
    };
  },
  methods: {
    pay(amount, id) {
      if (this.user.balance < amount) {
        alert("Số dư không đủ!");
      } else {
        this.user.balance -= amount;
        var filteredArray = this.bills.filter((bill) => bill.id !== id);
        this.bills = filteredArray;
        alert("Thanh toán thành công!");
      }
    },
    openPopup() {
      this.isShow = true;
    },
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
