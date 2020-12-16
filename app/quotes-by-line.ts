export const quotes = [
  {
    lineOfBusiness: "Workers Compensation",
    retention: "500k",
    expiringPremium: 207494,
    selectedPremium: null,
    selectedQuoteId: null,
    quotes: [
      {
        id: 1,
        marketName: "AIG",
        responseType: "offered",
        grossPremium: 143900,
      }
    ],
  },
  {
    lineOfBusiness: "Auto Liability",
    retention: "250k",
    expiringPremium: 23361,
    selectedPremium: null,
    selectedQuoteId: null,
    quotes: [
      {
        id: 2,
        marketName: "AIG",
        responseType: "offered",
        lineOfBusiness: "Business Auto 1",
        grossPremium: 33900,
        offeredLineRate: 100,
        brokerageRate: 29.5,
        additionalPolicyCost: 3200,
        comments: "Physical damage excluded",
        subjectivity: "up to date loss details"
      },
      {
        id: "3",
        marketName: "AXA (AXA XL)",
        contact: "Vicky",
        responseType: "offered",
        lineOfBusiness: "Business Auto 1",
        grossPremium: 35000,
        offeredLineRate: 100,
        brokerageRate: 28.5,
        additionalPolicyCost: 3500
      },
      {
        id: "5",
        marketName: "Travalers",
        responseType: "offered",
        lineOfBusiness: "Workers Compensation 1",
        grossPremium: 262600,
        offeredLineRate: 100,
        brokerageRate: 25,
        additionalPolicyCost: 23500
      }
    ]
  },
  {
    lineOfBusiness: "General Liability",
    retention: "100k",
    expiringPremium: 400000,
    selectedPremium: null,
    selectedQuoteId: null,
    quotes: [
      {
        id: "4",
        marketName: "Hartford Group",
        responseType: "offered",
        lineOfBusiness: "General Liability 1",
        grossPremium: 504600
      }      
    ]
  }
];
