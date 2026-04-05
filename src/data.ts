export interface PhonePrice {
  name: string;
  category: "ANDROID" | "APPLE" | "BTS";
  newNumberWId: {
    "$40": string;
    "$50": string;
    "$60": string;
  };
  portWId: {
    "$40": string;
    "$50": string;
    "$60": string;
  };
}

export const PHONES: PhonePrice[] = [
  {
    name: "TCL K11",
    category: "ANDROID",
    newNumberWId: { "$40": "FREE", "$50": "FREE", "$60": "FREE" },
    portWId: { "$40": "FREE", "$50": "FREE", "$60": "FREE" }
  },
  {
    name: "TCL Flip 4 5G",
    category: "ANDROID",
    newNumberWId: { "$40": "FREE", "$50": "FREE", "$60": "FREE" },
    portWId: { "$40": "FREE", "$50": "FREE", "$60": "FREE" }
  },
  {
    name: "TCL K32 5G",
    category: "ANDROID",
    newNumberWId: { "$40": "FREE", "$50": "FREE", "$60": "FREE" },
    portWId: { "$40": "FREE", "$50": "FREE", "$60": "FREE" }
  },
  {
    name: "moto g play - 2026",
    category: "ANDROID",
    newNumberWId: { "$40": "FREE", "$50": "FREE", "$60": "FREE" },
    portWId: { "$40": "FREE", "$50": "FREE", "$60": "FREE" }
  },
  {
    name: "motorola moto g - 2025",
    category: "ANDROID",
    newNumberWId: { "$40": "FREE", "$50": "FREE", "$60": "FREE" },
    portWId: { "$40": "FREE", "$50": "FREE", "$60": "FREE" }
  },
  {
    name: "Samsung Galaxy A15 5G (64GB)",
    category: "ANDROID",
    newNumberWId: { "$40": "FREE", "$50": "FREE", "$60": "FREE" },
    portWId: { "$40": "FREE", "$50": "FREE", "$60": "FREE" }
  },
  {
    name: "Motorola moto g power 5G - 2025",
    category: "ANDROID",
    newNumberWId: { "$40": "FREE", "$50": "FREE", "$60": "FREE" },
    portWId: { "$40": "FREE", "$50": "FREE", "$60": "FREE" }
  },
  {
    name: "Samsung Galaxy A16 5G",
    category: "ANDROID",
    newNumberWId: { "$40": "FREE", "$50": "FREE", "$60": "FREE" },
    portWId: { "$40": "FREE", "$50": "FREE", "$60": "FREE" }
  },
  {
    name: "Samsung Galaxy A17 5G",
    category: "ANDROID",
    newNumberWId: { "$40": "FREE", "$50": "FREE", "$60": "FREE" },
    portWId: { "$40": "FREE", "$50": "FREE", "$60": "FREE" }
  },
  {
    name: "T-Mobile Revvl 8 Pro",
    category: "ANDROID",
    newNumberWId: { "$40": "$79.99", "$50": "$49.99", "$60": "$19.99" },
    portWId: { "$40": "$29.99", "$50": "FREE", "$60": "FREE" }
  },
  {
    name: "motorola g stylus 2025",
    category: "ANDROID",
    newNumberWId: { "$40": "$139.99", "$50": "$109.99", "$60": "FREE" },
    portWId: { "$40": "$89.99", "$50": "$59.99", "$60": "FREE" }
  },
  {
    name: "motorola edge - 2025",
    category: "ANDROID",
    newNumberWId: { "$40": "$179.99", "$50": "$149.99", "$60": "$49.99" },
    portWId: { "$40": "$129.99", "$50": "$99.99", "$60": "FREE" }
  },
  {
    name: "Samsung Galaxy A36 5G",
    category: "ANDROID",
    newNumberWId: { "$40": "$279.99", "$50": "$249.99", "$60": "$49.99" },
    portWId: { "$40": "$229.99", "$50": "$199.99", "$60": "FREE" }
  },
  {
    name: "motorola razr - 2024",
    category: "ANDROID",
    newNumberWId: { "$40": "$99.99", "$50": "$99.99", "$60": "$99.99" },
    portWId: { "$40": "FREE", "$50": "$99.99", "$60": "$99.99" }
  },
  {
    name: "Samsung Galaxy S24 FE 5G",
    category: "ANDROID",
    newNumberWId: { "$40": "$529.99", "$50": "$499.99", "$60": "$469.99" },
    portWId: { "$40": "$479.99", "$50": "$449.99", "$60": "$419.99" }
  },
  {
    name: "iPhone SE 3rd Gen 5G (64GB)",
    category: "APPLE",
    newNumberWId: { "$40": "$279.99", "$50": "$279.99", "$60": "$279.99" },
    portWId: { "$40": "$229.99", "$50": "$229.99", "$60": "$229.99" }
  },
  {
    name: "iPhone 16e (128GB)",
    category: "APPLE",
    newNumberWId: { "$40": "$449.99", "$50": "$299.99", "$60": "$299.99" },
    portWId: { "$40": "$399.99", "$50": "$99.99", "$60": "$99.99" }
  },
  {
    name: "iPhone 13 (5G) (128GB)",
    category: "APPLE",
    newNumberWId: { "$40": "$479.99", "$50": "$199.99", "$60": "$199.99" },
    portWId: { "$40": "$429.99", "$50": "$49.99", "$60": "$49.99" }
  },
  {
    name: "iPhone 14 (128GB)",
    category: "APPLE",
    newNumberWId: { "$40": "$479.99", "$50": "$299.99", "$60": "$299.99" },
    portWId: { "$40": "$429.99", "$50": "$99.99", "$60": "$99.99" }
  },
  {
    name: "iPhone 15 (128GB)",
    category: "APPLE",
    newNumberWId: { "$40": "$479.99", "$50": "$479.99", "$60": "$479.99" },
    portWId: { "$40": "$429.99", "$50": "$429.99", "$60": "$429.99" }
  },
  {
    name: "iPhone 16 (128GB)",
    category: "APPLE",
    newNumberWId: { "$40": "$579.99", "$50": "$579.99", "$60": "$579.99" },
    portWId: { "$40": "$529.99", "$50": "$529.99", "$60": "$529.99" }
  },
  {
    name: "iPhone 16 Pro (128GB)",
    category: "APPLE",
    newNumberWId: { "$40": "$749.99", "$50": "$749.99", "$60": "$749.99" },
    portWId: { "$40": "$699.99", "$50": "$699.99", "$60": "$699.99" }
  },
  {
    name: "iPhone 16 Pro Max (256GB)",
    category: "APPLE",
    newNumberWId: { "$40": "$919.99", "$50": "$919.99", "$60": "$919.99" },
    portWId: { "$40": "$899.99", "$50": "$899.99", "$60": "$899.99" }
  }
];
