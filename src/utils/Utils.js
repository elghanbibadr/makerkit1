export const pricingData = [
  {
    name: "Basic",
    description: "Up to 20 users",
    monthlybilling: "$9",
    yearlyBilling: "$29",
    features: [
      "Basic Reporting",
      "Up to 20 users",
      "1GB for each user",
      "Chat Support",
    ],
    cta: "Get Started",
  },
  {
    name: "Pro",
    description: "Most Popular",
    monthlybilling: "$29",
    yearlyBilling: "$200",
    features: [
      "Advanced Reporting",
      "Up to 50 users",
      "5GB for each user",
      "Chat and Phone Support",
    ],
    cta: "Get Started",
  },
  {
    name: "Premium",
    monthlybilling: "Contact us",
    yearlyBilling: "Contact us",
    features: [
      "Advanced Reporting",
      "Unlimited users",
      "50GB for each user",
      "Account Manager",
    ],
    cta: "Contact us",
  },
];



export function generateUniqueRandomNumber() {
  // Multiply Math.random() by a large number to get a floating-point value,
  // then convert it to an integer using Math.floor().
  const randomNumber = Math.floor(Math.random() * 1000000);
  return randomNumber;
}


// options for the date picker modal 


export const options = {
  // title: "Demo Title",
  // autoHide: true,
  todayBtn: false,
  clearBtn: false,
  // clearBtnText: "Clear",
  maxDate: new Date("2030-01-01"),
  minDate: new Date(),
  theme: {
    background: "bg-[#030712]   shadow-darkPink ",
    // icons: "",
    text: " text-white hover:text-darkPink",
    input: "bg-[#030712] input cursor-pointer focus:border-auto",
    inputIcon: "hidden",
    selected: "bg-darkPink text-darkPink hover:text-darkPink hover:bg-white",
  },
 
  datepickerClassNames: "top-10",
  defaultDate: new Date(+new Date() + 86400000),
  language: "en",
  disabledDates: [],
  weekDays: ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
  inputNameProp: "date",
  inputIdProp: "date",
  inputPlaceholderProp: "Select Date",
  inputDateFormatProp:{
    day: "numeric",
    month: "long",
    year: "numeric"
  }
}
