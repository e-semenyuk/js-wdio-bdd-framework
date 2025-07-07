export interface UserData {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  phone: string;
  address: {
    street: string;
    city: string;
    postalCode: string;
    country: string;
  };
}

export interface ProductData {
  id: string;
  name: string;
  price: number;
  category: string;
  description: string;
  available: boolean;
}

export interface DiscountData {
  code: string;
  percentage: number;
  valid: boolean;
  region: string;
}

export const testUsers: Record<string, UserData> = {
  US: {
    email: "test.us@example.com",
    password: "TestPassword123!",
    firstName: "John",
    lastName: "Doe",
    phone: "+1-555-123-4567",
    address: {
      street: "123 Main St",
      city: "New York",
      postalCode: "10001",
      country: "US"
    }
  },
  DE: {
    email: "test.de@example.com",
    password: "TestPassword123!",
    firstName: "Hans",
    lastName: "Müller",
    phone: "+49-30-123-4567",
    address: {
      street: "Hauptstraße 123",
      city: "Berlin",
      postalCode: "10115",
      country: "DE"
    }
  },
  UK: {
    email: "test.uk@example.com",
    password: "TestPassword123!",
    firstName: "James",
    lastName: "Smith",
    phone: "+44-20-1234-5678",
    address: {
      street: "123 High Street",
      city: "London",
      postalCode: "SW1A 1AA",
      country: "UK"
    }
  }
};

export const regions = {
  US: {
    name: "United States",
    currency: "USD",
    language: "en-US",
    currencySymbol: "$"
  },
  DE: {
    name: "Germany",
    currency: "EUR",
    language: "de-DE",
    currencySymbol: "€"
  },
  UK: {
    name: "United Kingdom",
    currency: "GBP",
    language: "en-GB",
    currencySymbol: "£"
  }
};

export const catalogData: Record<string, ProductData[]> = {
  US: [
    {
      id: "device-001",
      name: "IQOS Device",
      price: 99.99,
      category: "devices",
      description: "Premium IQOS device for US market",
      available: true
    },
    {
      id: "heets-001",
      name: "HEETS Tobacco Sticks",
      price: 8.99,
      category: "heets",
      description: "Tobacco sticks for IQOS device",
      available: true
    },
    {
      id: "accessory-001",
      name: "Charging Case",
      price: 29.99,
      category: "accessories",
      description: "Portable charging case",
      available: true
    }
  ],
  DE: [
    {
      id: "device-001",
      name: "IQOS Gerät",
      price: 89.99,
      category: "geräte",
      description: "Premium IQOS Gerät für deutschen Markt",
      available: true
    },
    {
      id: "heets-001",
      name: "HEETS Tabaksticks",
      price: 7.99,
      category: "heets",
      description: "Tabaksticks für IQOS Gerät",
      available: true
    },
    {
      id: "accessory-001",
      name: "Ladeetui",
      price: 24.99,
      category: "zubehör",
      description: "Tragbares Ladeetui",
      available: true
    }
  ],
  UK: [
    {
      id: "device-001",
      name: "IQOS Device",
      price: 79.99,
      category: "devices",
      description: "Premium IQOS device for UK market",
      available: true
    },
    {
      id: "heets-001",
      name: "HEETS Tobacco Sticks",
      price: 6.99,
      category: "heets",
      description: "Tobacco sticks for IQOS device",
      available: true
    },
    {
      id: "accessory-001",
      name: "Charging Case",
      price: 19.99,
      category: "accessories",
      description: "Portable charging case",
      available: true
    }
  ]
};

export const discountCodes: DiscountData[] = [
  {
    code: "SAVE10",
    percentage: 10,
    valid: true,
    region: "US"
  },
  {
    code: "SPAREN10",
    percentage: 10,
    valid: true,
    region: "DE"
  },
  {
    code: "SAVE10",
    percentage: 10,
    valid: true,
    region: "UK"
  },
  {
    code: "INVALID",
    percentage: 0,
    valid: false,
    region: "US"
  }
];

export const searchTerms = {
  US: {
    valid: ["device", "tobacco", "accessory"],
    invalid: ["nonexistentproduct", "invalidsearch"]
  },
  DE: {
    valid: ["gerät", "tabak", "zubehör"],
    invalid: ["nichtexistierendesprodukt", "ungültigesuche"]
  },
  UK: {
    valid: ["device", "tobacco", "accessory"],
    invalid: ["nonexistentproduct", "invalidsearch"]
  }
};

export const categories = {
  US: ["devices", "heets", "accessories"],
  DE: ["geräte", "heets", "zubehör"],
  UK: ["devices", "heets", "accessories"]
}; 