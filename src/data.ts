export interface PhonePrice {
  name: string;
  category: "ANDROID" | "APPLE" | "BTS";
  newNumberWId: {
    "$40": string;
    "$50": string;
    "$60": string;
    "$65": string;
  };
  portWId: {
    "$40": string;
    "$50": string;
    "$60": string;
    "$65": string;
  };
}

export const PHONES: PhonePrice[] = [
  {
    name: "moto g play - 2026",
    category: "ANDROID",
    newNumberWId: { "$40": "FREE", "$50": "FREE", "$60": "FREE", "$65": "FREE" },
    portWId: { "$40": "FREE", "$50": "FREE", "$60": "FREE", "$65": "FREE" }
  },
  {
    name: "motorola moto g - 2025",
    category: "ANDROID",
    newNumberWId: { "$40": "FREE", "$50": "FREE", "$60": "FREE", "$65": "FREE" },
    portWId: { "$40": "FREE", "$50": "FREE", "$60": "FREE", "$65": "FREE" }
  },
  {
    name: "Motorola moto g power 5G - 2025",
    category: "ANDROID",
    newNumberWId: { "$40": "FREE", "$50": "FREE", "$60": "FREE", "$65": "FREE" },
    portWId: { "$40": "FREE", "$50": "FREE", "$60": "FREE", "$65": "FREE" }
  },
  {
    name: "Samsung Galaxy A16 5G",
    category: "ANDROID",
    newNumberWId: { "$40": "FREE", "$50": "FREE", "$60": "FREE", "$65": "FREE" },
    portWId: { "$40": "FREE", "$50": "FREE", "$60": "FREE", "$65": "FREE" }
  },
  {
    name: "Samsung Galaxy A17 5G",
    category: "ANDROID",
    newNumberWId: { "$40": "FREE", "$50": "FREE", "$60": "FREE", "$65": "FREE" },
    portWId: { "$40": "FREE", "$50": "FREE", "$60": "FREE", "$65": "FREE" }
  },
  {
    name: "motorola g stylus 2025",
    category: "ANDROID",
    newNumberWId: { "$40": "$139.99", "$50": "$109.99", "$60": "FREE", "$65": "FREE" },
    portWId: { "$40": "$89.99", "$50": "$59.99", "$60": "FREE", "$65": "FREE" }
  },
  {
    name: "motorola edge - 2025",
    category: "ANDROID",
    newNumberWId: { "$40": "$179.99", "$50": "$149.99", "$60": "$49.99", "$65": "$49.99" },
    portWId: { "$40": "$129.99", "$50": "$99.99", "$60": "FREE", "$65": "FREE" }
  },
  {
    name: "Samsung Galaxy A36 5G",
    category: "ANDROID",
    newNumberWId: { "$40": "$279.99", "$50": "$249.99", "$60": "$49.99", "$65": "$49.99" },
    portWId: { "$40": "$229.99", "$50": "$199.99", "$60": "FREE", "$65": "FREE" }
  },
  {
    name: "Samsung Galaxy S25 FE",
    category: "ANDROID",
    newNumberWId: { "$40": "N/A", "$50": "N/A", "$60": "N/A", "$65": "$199.99" },
    portWId: { "$40": "N/A", "$50": "N/A", "$60": "N/A", "$65": "$99.99" }
  },
  {
    name: "iPhone 16e (128GB)",
    category: "APPLE",
    newNumberWId: { "$40": "$449.99", "$50": "$299.99", "$60": "$299.99", "$65": "$299.99" },
    portWId: { "$40": "$399.99", "$50": "$99.99", "$60": "$99.99", "$65": "$99.99" }
  }
];
