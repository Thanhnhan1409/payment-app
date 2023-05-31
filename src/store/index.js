import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => ({
    user:
      // Danh sách người dùng
      {
        username: "user1",
        password: "password1",
        fullname: "John Doe",
        phone: "1234567890",
        accountNumber: "123456789",
        bank: "Bank A",
        balance: 1000,
      },
  }),

//   getters: {
//     getUserByUsername(username) {
//       // Lấy người dùng dựa trên username
//       return this.users.find((user) => user.username === username);
//     },
//     getBalanceByUsername(balance) {
//       // Lấy người dùng dựa trên username
//       return this.users.find((user) => user.balance === balance);
//     },
//   },

//   actions: {
//     updateUserBalance(username, newBalance) {
//       // Cập nhật số dư của người dùng
//       const user = this.getUserByUsername(username);
//       if (user) {
//         user.balance = newBalance;
//       }
//     },
//   },
});


// Vue.use(Vuex);

// const storeData = {
//   state: {
//     user: [
//       {
//         username: "user1",
//         password: "password1",
//         fullname: "John Doe",
//         phone: "1234567890",
//         accountNumber: "123456789",
//         bank: "Bank A",
//         balance: 1000,
//       },
//       {
//         username: "user2",
//         password: "password2",
//         fullname: "Jane Smith",
//         phone: "9876543210",
//         accountNumber: "987654321",
//         bank: "Bank B",
//         balance: 500,
//       },
//       {
//         username: "user3",
//         password: "password3",
//         fullname: "David Johnson",
//         phone: "4567891230",
//         accountNumber: "456789123",
//         bank: "Bank C",
//         balance: 1500,
//       },
//       {
//         username: "user4",
//         password: "password4",
//         fullname: "Sarah Williams",
//         phone: "7891234560",
//         accountNumber: "789123456",
//         bank: "Bank A",
//         balance: 2000,
//       },
//       {
//         username: "user5",
//         password: "password5",
//         fullname: "Michael Brown",
//         phone: "3216549870",
//         accountNumber: "321654987",
//         bank: "Bank B",
//         balance: 800,
//       },
//       {
//         username: "user6",
//         password: "password6",
//         fullname: "Emily Davis",
//         phone: "6549873210",
//         accountNumber: "654987321",
//         bank: "Bank C",
//         balance: 1200,
//       },
//       {
//         username: "user7",
//         password: "password7",
//         fullname: "Robert Wilson",
//         phone: "9873216540",
//         accountNumber: "987321654",
//         bank: "Bank A",
//         balance: 3000,
//       },
//       {
//         username: "user8",
//         password: "password8",
//         fullname: "Olivia Taylor",
//         phone: "3219876540",
//         accountNumber: "321987654",
//         bank: "Bank B",
//         balance: 600,
//       },
//       {
//         username: "user9",
//         password: "password9",
//         fullname: "James Anderson",
//         phone: "6543219870",
//         accountNumber: "654321987",
//         bank: "Bank C",
//         balance: 1400,
//       },
//       {
//         username: "user10",
//         password: "password10",
//         fullname: "Sophia Martinez",
//         phone: "9876541230",
//         accountNumber: "987654123",
//         bank: "Bank A",
//         balance: 2500,
//       },
//     ],
//   },
// };
