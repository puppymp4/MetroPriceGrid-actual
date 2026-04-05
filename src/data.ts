export interface PhonePrice {
  name: string;
  category: "ANDROID" | "APPLE" | "BTS";
  newNumberWId: {
    "$40": string;
    "$55": string;
    "$65": string;
  };
  portWId: {
    "$40": string;
    "$55": string;
    "$65": string;
  };
}

export const PHONES: PhonePrice[] = [
  {
    name: "moto g play - 2026",
    category: "ANDROID",
    newNumberWId: { "$40": "FREE", "$55": "FREE", "$65": "FREE" },
    portWId: { "$40": "FREE", "$55": "FREE", "$65": "FREE" }
  },
  {
    name: "motorola moto g - 2025",
    category: "ANDROID",
    newNumberWId: { "$40": "FREE", "$55": "FREE", "$65": "FREE" },
    portWId: { "$40": "FREE", "$55": "FREE", "$65": "FREE" }
  },
  {
    name: "Motorola moto g power 5G - 2025",
    category: "ANDROID",
    newNumberWId: { "$40": "FREE", "$55": "FREE", "$65": "FREE" },
    portWId: { "$40": "FREE", "$55": "FREE", "$65": "FREE" }
  },
  {
    name: "Samsung Galaxy A16 5G",
    category: "ANDROID",
    newNumberWId: { "$40": "FREE", "$55": "FREE", "$65": "FREE" },
    portWId: { "$40": "FREE", "$55": "FREE", "$65": "FREE" }
  },
  {
    name: "Samsung Galaxy A17 5G",
    category: "ANDROID",
    newNumberWId: { "$40": "FREE", "$55": "FREE", "$65": "FREE" },
    portWId: { "$40": "FREE", "$55": "FREE", "$65": "FREE" }
  },
  {
    name: "motorola g stylus 2025",
    category: "ANDROID",
    newNumberWId: { "$40": "$139.99", "$55": "$109.99", "$65": "FREE" },
    portWId: { "$40": "$89.99", "$55": "$59.99", "$65": "FREE" }
  },
  {
    name: "motorola edge - 2025",
    category: "ANDROID",
    newNumberWId: { "$40": "$179.99", "$55": "$149.99", "$65": "$49.99" },
    portWId: { "$40": "$129.99", "$55": "$99.99", "$65": "FREE" }
  },
  {
    name: "Samsung Galaxy A36 5G",
    category: "ANDROID",
    newNumberWId: { "$40": "$279.99", "$55": "$249.99", "$65": "$49.99" },
    portWId: { "$40": "$229.99", "$55": "$199.99", "$65": "FREE" }
  },
  {
    name: "Samsung Galaxy S25 FE",
    category: "ANDROID",
    newNumberWId: { "$40": "N/A", "$55": "N/A", "$65": "$199.99" },
    portWId: { "$40": "N/A", "$55": "N/A", "$65": "$99.99" }
  },
  {
    name: "iPhone 16e (128GB)",
    category: "APPLE",
    newNumberWId: { "$40": "$449.99", "$55": "$299.99", "$65": "$299.99" },
    portWId: { "$40": "$399.99", "$55": "$99.99", "$65": "$99.99" }
  }
];
