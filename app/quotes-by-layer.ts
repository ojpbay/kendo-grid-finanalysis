export const sampleQuotes = [
  {
    lineOfBusiness: "Workers Compensation",
    expiringPremium: 207494,
    selectedQuote: {
      marketName: null,
      value: null
    },
    quotes: [
      {
        id: "1",
        marketName: "AIG",
        isIncumbent: true,
        sent: true,
        responseType: "offered",
        lineOfBusiness: "General Liability 1"
      }
    ],
    riskStrategy: "My first strategy"
  },
  {
    lineOfBusiness: "Auto Liability",
    expiringPremium: 23361,
    selectedQuote: {
      marketName: null,
      value: null
    },
    difference: {
      value: 10549,
      percentageValue: 0.4511
    },
    quotes: [
      {
        id: "2",
        marketName: "AIG",
        isIncumbent: true,
        sent: true,
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
      },
      {
        id: "3",
        marketName: "AXA (AXA XL)",
        isIncumbent: true,
        contact: "Vicky",
        sent: true,
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
      },
      {
        id: "5",
        marketName: "Travalers",
        isIncumbent: true,
        sent: true,
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
    ],
    riskStrategy: "another strategy"
  },
  {
    lineOfBusiness: "General Liability",
    expiringPremium: 400000,
    selectedQuote: {
      marketName: null,
      value: null
    },
    difference: {
      value: 104600,
      percentageValue: 0.2615
    },
    quotes: [
      {
        id: "4",
        marketName: "Hartford Group",
        isIncumbent: false,
        sent: true,
        responseType: "offered",
        lineOfBusiness: "General Liability 1",
        grossPremium: {
          value: 504600,
          currency: "USD"
        }
      }
    ]
  }
];
