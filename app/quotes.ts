export const sampleQuotes = [
  {
    id: "1",
    marketName: "AIG",
    isIncumbent: true,
    contact: undefined,
    sent: true,
    marketResponse: {
      layer: "Whole Placement",
      responseType: "offered",
      lineOfBusiness: "General Liability 1"
    }
  },
  {
    id: "2",
    marketName: "AIG",
    isIncumbent: true,
    sent: true,
    marketResponse: {
      layer: "Primary - $500k Self-insured Retention",
      responseType: "offered",
      lineOfBusiness: "Business Auto 1",
      grossPremium: {
        value: 33900,
        currency: "USD"
      },
      offeredLineRate: 100,
      brokerageRate: 29.5,
      additionalPolicyCost: {
        value: 3200,
        currency: "USD"
      },
      comments: "Physical damage excluded",
      subjectivity: "up to date loss details"
    }
  },
  {
    id: "3",
    marketName: "AXA (AXA XL)",
    isIncumbent: true,
    contact: "Vicky D",
    sent: true,
    marketResponse: {
      layer: "Primary - $500k Self-insured Retention",
      responseType: "offered",
      lineOfBusiness: "Business Auto 1",
      grossPremium: {
        value: 35000,
        currency: "USD"
      },
      offeredLineRate: 100,
      brokerageRate: 28.5,
      additionalPolicyCost: {
        value: 3500,
        currency: "USD"
      }
    }
  },
  {
    id: "4",
    marketName: "Hartford Group",
    isIncumbent: false,
    sent: true,
    marketResponse: {
      layer: "Primary - $100k Self-insured Retention",
      responseType: "offered",
      lineOfBusiness: "General Liability 1",
      grossPremium: {
        value: 504600,
        currency: "USD"
      }
    }
  },
  {
    id: "5",
    marketName: "Travalers",
    isIncumbent: true,
    sent: false,
    marketResponse: {
      layer: "Primary - $500k Self-insured Retention",
      responseType: "offered",
      lineOfBusiness: "Workers Compensation 1",
      grossPremium: {
        value: 262600,
        currency: "USD"
      },
      offeredLineRate: 100,
      brokerageRate: 25,
      additionalPolicyCost: {
        value: 23500,
        currency: "USD"
      }
    }
  }
];
