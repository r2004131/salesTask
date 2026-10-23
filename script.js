const orders = [
  {
    id: 1,
    customer: "علي",
    status: "delivered",
    date: "2024-01-15",
    paymentMethod: "credit",
    items: [
      { name: "لابتوب", price: 3000, quantity: 1, category: "electronics" },
      { name: "ماوس", price: 50, quantity: 2, category: "electronics" },
    ],
  },
  {
    id: 2,
    customer: "سارة",
    status: "pending",
    date: "2024-02-20",
    paymentMethod: "cash",
    items: [
      { name: "كيبورد", price: 150, quantity: 1, category: "electronics" },
      { name: "قميص", price: 100, quantity: 3, category: "clothes" },
    ],
  },
  {
    id: 3,
    customer: "علي",
    status: "delivered",
    date: "2024-03-10",
    paymentMethod: "credit",
    items: [{ name: "شاشة", price: 800, quantity: 2, category: "electronics" }],
  },
  {
    id: 4,
    customer: "حسن",
    status: "cancelled",
    date: "2024-03-15",
    paymentMethod: "cash",
    items: [
      { name: "سماعة", price: 200, quantity: 1, category: "electronics" },
    ],
  },
  {
    id: 5,
    customer: "نور",
    status: "delivered",
    date: "2024-04-01",
    paymentMethod: "credit",
    items: [
      { name: "لابتوب", price: 3000, quantity: 1, category: "electronics" },
      { name: "قميص", price: 100, quantity: 2, category: "clothes" },
      { name: "بنطلون", price: 200, quantity: 1, category: "clothes" },
    ],
  },
  {
    id: 6,
    customer: "سارة",
    status: "delivered",
    date: "2024-04-15",
    paymentMethod: "credit",
    items: [{ name: "شاشة", price: 800, quantity: 1, category: "electronics" }],
  },
  {
    id: 7,
    customer: "علي",
    status: "pending",
    date: "2024-05-01",
    paymentMethod: "cash",
    items: [
      { name: "كيبورد", price: 150, quantity: 3, category: "electronics" },
    ],
  },
  {
    id: 8,
    customer: "خالد",
    status: "delivered",
    date: "2024-05-10",
    paymentMethod: "credit",
    items: [
      { name: "ماوس", price: 50, quantity: 5, category: "electronics" },
      { name: "قميص", price: 100, quantity: 1, category: "clothes" },
    ],
  },
];

function get_order_Total(order) {
  return order.items.reduce((acc, item) => acc + item.price * item.quantity, 0);
}
console.log(get_order_Total(orders[0]));

let delivered_Sales = orders
  .filter((order) => order.status === "delivered")
  .reduce((acc, order) => acc + get_order_Total(order), 0);
console.log(delivered_Sales);

let uniques_customers = new Set(orders.map((order) => order.customer));
console.log(uniques_customers);

function getTop3Customers(orders) {
  let totals = {};
  orders.forEach(function (order) {
    const total = get_order_Total(order);
    if (totals[order.customer]) {
      totals[order.customer] += total;
    } else {
      totals[order.customer] = total;
    }
  });

  let sorted = Object.entries(totals).sort((a, b) => b[1] - a[1]);

  return sorted.slice(0, 3).map(([name, total]) => ({ name, total }));
}

console.log(getTop3Customers(orders));

const deliveredOrders = orders.filter((order) => order.status === "delivered");

const avg_delivered =
  deliveredOrders.reduce((acc, order) => acc + get_order_Total(order), 0) /
  deliveredOrders.length;

console.log(`عدد الطلبات المسلّمة: ${deliveredOrders.length}`);
console.log(`المتوسط: ${avg_delivered}`);

const orderCount = orders.reduce((acc, order) => {
  acc[order.customer] = (acc[order.customer] || 0) + 1;
  return acc;
}, {});

const multipleOrders = Object.entries(orderCount)
  .filter(([name, count]) => count > 1)
  .map(([name]) => name);

console.log(multipleOrders);
