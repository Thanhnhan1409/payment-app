import { defineStore } from "pinia";

export const useUserStore = defineStore("users", {
  state: () => ({
    users:
    [
      {
        username: "user1",
        password: "password1",
        fullname: "John Doe",
        phone: "1234567890",
        accountNumber: "123456789",
        bank: "Bank A",
        balance: 2000,
      },
      {
        "username": "user2",
        "password": "password2",
        "fullname": "Jane Smith",
        "phone": "0987654321",
        "accountNumber": "987654321",
        "bank": "Bank B",
        "balance": 1500
      },
      {
        "username": "user3",
        "password": "password3",
        "fullname": "David Johnson",
        "phone": "5555555555",
        "accountNumber": "555555555",
        "bank": "Bank C",
        "balance": 3000
      },
      {
        "username": "user4",
        "password": "password4",
        "fullname": "Emily Davis",
        "phone": "9876543210",
        "accountNumber": "123123123",
        "bank": "Bank D",
        "balance": 1000
      },
      {
        "username": "user5",
        "password": "password5",
        "fullname": "Michael Wilson",
        "phone": "1112223333",
        "accountNumber": "999888777",
        "bank": "Bank E",
        "balance": 2500
      }
    ]
      
  }),
  getters: {
    getUserByUsername: (state) => (username) => {
      return state.users.find((user) => user.username === username);
    },
  },
});


export const usebillStore = defineStore("bills", {
  state: () => ({
    bills: [
      {
        id: 1,
        nameService: "house money",
        idCode: "1231",
        nameCustomer: "Billie Anna",
        amount: 2234,
        content: "no content",
      },
      {
        id: 2,
        nameService: "money",
        idCode: "1231",
        nameCustomer: "Billie Anna",
        amount: 23,
        content: "no content",
      },
      {
        id: 3,
        nameService: "house money",
        idCode: "1231",
        nameCustomer: "Billie Anna",
        amount: 23,
        content: "no content",
      },
      {
        id: 4,
        nameService: "house money",
        idCode: "1231",
        nameCustomer: "Billie Anna",
        amount: 23,
        content: "no content",
      },
      {
        id: 5,
        nameService: "house money",
        idCode: "1231",
        nameCustomer: "Billie Anna",
        amount: 23,
        content: "no content",
      },
    ],
  }),
});

export const useHistoryStore = defineStore("histories", {
  state: () => ({
    histories: []
  }),
});

export const currentUserStore = defineStore("user", {
  state: () => ({
    user: {

    }
  }),
  actions: {
    setCurrentUser(user) {
      this.user = user;
    },
  },
});
