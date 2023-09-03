export const formLabel = [
  {
    label: "Name",
    type: "text",
  },
  {
    label: "Phone Number",
    type: "number",
  },
  {
    label: "Email",
    type: "text",
  },

  {
    label: "Number of people",
    type: "text",
    options: [
      { value: "2-5", option: "2-5" },
      { value: "5-10", option: "5-10" },
      { value: "10-20", option: "10-20" },
      { value: "20-30", option: "20-30" },
      { value: "30-50", option: "30-50" },
      { value: "50-100", option: "50-100" },
    ],
  },
  {
    label: "Occasion",
    type: "text",
    options: [
      { value: "Dinner date", option: "Dinner date" },
      { value: "Business Meeting", option: "Business Meeting" },
      { value: "Wedding Party", option: "Wedding Party" },
      { value: "Friends Hangout", option: "Friends Hangout" },
      { value: "Family Dinner", option: "Family Dinner" },
      { value: "Birthday Party", option: "Birthday Party" },
    ],
  },
  {
    label: "Date",
    type: "date",
  },
  {
    label: "Time",
    type: "time",
  },
  {
    label: "Budget",
    type: "text",
  },
];
