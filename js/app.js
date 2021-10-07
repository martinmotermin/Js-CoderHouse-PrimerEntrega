'use strict';

// Variables

let cart = [];
let store = [];
let paymentMethods = [];

// Functions
const init = function () {
  const name = prompt('Bienvenido a la tienda virtual, ingresa tu nombre:');
  const choice = Number(
    prompt(`Bienvenido ${name}!
      Ingresa 1 para acceder a la lista de productos en la consola.
      Ingresa 2 para ver los medios de pago en la consola.`)
  );
  if (choice == 1) {
    showStore(store);
    console.log(
      'Ejecuta la funcion "buy" sobre el producto que deseas comprar'
    );
    return choice;
  } else if (choice == 2) {
    showPaymentMethods(paymentMethods);
    return choice;
  } else {
    alert('Elige una opcion valida');
  }
};

function showStore(arr) {
  arr.sort(function (a, b) {
    if (a.brand < b.brand) {
      return -1;
    } else if (a.brand > b.brand) {
      return 1;
    } else {
      return 0;
    }
  });
  for (const el of arr) {
    console.log(`${el.name} - $${el.price} - Stock:${el.stock}`);
  }
}

function showPaymentMethods(arr) {
  arr.sort(function (a, b) {
    if (a.name < b.name) {
      return -1;
    } else if (a.name > b.name) {
      return 1;
    } else {
      return 0;
    }
  });
  for (const el of arr) {
    console.log(`${el.name} / ${100 * el.bonification}% bonificacion/recargo`);
  }
}

// Classes

class Product {
  constructor(id, name, description, category, price, stock) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.category = category;
    this.price = parseFloat(price);
    this.stock = Number(stock);
    this.soldOut = false;
    this.quantity = 1;
  }

  buy() {
    this.stock = this.stock - 1;
    cart.push(this);
    if (this.stock < 0) {
      this.soldOut = true;
      alert('No hay mas unidades de este articulo');
    } else {
      this.soldOut = false;
    }
    console.log(`Se agrego: 1 ${this.name}`);
  }
}

class PaymentMethod {
  constructor(name, bonification) {
    this.name = name;
    this.bonification = Number(bonification);
  }
}

// Objets

const product1 = new Product(
  1,
  'Caja Organizadora Rectangular',
  'Color Rustico',
  'Deco',
  500,
  10
);

const product2 = new Product(
  2,
  'Alfombra Yute Natural',
  'Circle Calada 0.9m',
  'Deco',
  500,
  10
);

const product3 = new Product(
  3,
  'Espejo Dalam',
  'Redondo color madera',
  'Deco',
  1100,
  10
);

const product4 = new Product(
  4,
  'Perchero Valet',
  'Base redonda, color combinado',
  'Muebles',
  850,
  10
);

const product5 = new Product(
  5,
  'Mini Bamboo',
  '5 varas - 1.2m',
  'Plantas',
  3400,
  10
);

const product6 = new Product(6, 'Rack TV', 'Color Vintage', 'Muebles', 7600, 4);

const product7 = new Product(
  7,
  'Sofa Matheo',
  'Medidas: Ancho: 2.04 mts / Profundidad: 0.98 mts',
  'Sillones',
  14000,
  3
);

const product8 = new Product(
  8,
  'Sofa Portel',
  'Color Nirvana Gris Azulado - Patas cromo',
  'Sillones',
  34000,
  3
);

const product9 = new Product(
  9,
  'Palmera Rockhood',
  'Palmera Artificial 70cm',
  'Plantas',
  2500,
  3
);

const creditCard = new PaymentMethod('Credit Card', 0.1);
const cash = new PaymentMethod('Cash', -0.1);
const bankTransfer = new PaymentMethod('Bank Transfer', 0);
const crypto = new PaymentMethod('Crypto', -0.2);
const debitCard = new PaymentMethod('Debit Card', 0);

store.push(
  product1,
  product2,
  product3,
  product4,
  product5,
  product6,
  product7,
  product8,
  product9
);

paymentMethods.push(creditCard, cash, bankTransfer, crypto, debitCard);

init();
