(function () {
  "use strict";

  var shoppingListToBuy = [
    {
      name: "Banano",
      quantity: "1",
    },
    {
      name: "Durazno",
      quantity: "2",
    },
    {
      name: "Mandarina",
      quantity: "3",
    },
    {
      name: "Mango",
      quantity: "4",
    },
    {
      name: "Manzana",
      quantity: "5",
    },
    {
      name: "Pera",
      quantity: "6",
    },
    {
      name: "Uva",
      quantity: "7",
    },
  ];

  var shoppingListAlreadyBought = [];

  angular
    .module("ShoppingListCheckOff", [])
    .controller("ToBuyController", ToBuyController)
    .controller("AlreadyBoughtController", AlreadyBoughtController)
    .service("ShoppingListCheckOffService", ShoppingListCheckOffService);

  ToBuyController.$inject = ["ShoppingListCheckOffService"];

  function ToBuyController(ShoppingListCheckOffService) {
    var showListToBuy = this;

    showListToBuy.items = ShoppingListCheckOffService.getItems(
      shoppingListToBuy
    );

    showListToBuy.moveItem = function (itemIndex, itemName, quantity) {
      ShoppingListCheckOffService.moveItem(itemIndex, itemName, quantity);
    };
  }

  AlreadyBoughtController.$inject = ["ShoppingListCheckOffService"];

  function AlreadyBoughtController(ShoppingListCheckOffService) {
    var showListAlreadyBought = this;

    showListAlreadyBought.items = ShoppingListCheckOffService.getItems(
      shoppingListAlreadyBought
    );
  }

  function ShoppingListCheckOffService() {
    var service = this;

    service.getItems = function (items) {
      return items;
    };

    service.moveItem = function (itemIndex, itemName, quantity) {
      var item = {
        name: itemName,
        quantity: quantity,
      };
      shoppingListToBuy.splice(itemIndex, 1);
      shoppingListAlreadyBought.push(item);
    };
  }
})();
