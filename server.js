// node --version # Should be >= 18
// npm install @google/generative-ai express

const express = require('express');
const { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } = require('@google/generative-ai');
const dotenv = require('dotenv').config()

const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());
const MODEL_NAME = "gemini-pro";
const API_KEY = process.env.API_KEY;

async function runChat(userInput) {
  const genAI = new GoogleGenerativeAI(API_KEY);
  const model = genAI.getGenerativeModel({ model: MODEL_NAME });

  const generationConfig = {
    temperature: 0.9,
    topK: 1,
    topP: 1,
    maxOutputTokens: 1000,
  };

  const safetySettings = [
    {
      category: HarmCategory.HARM_CATEGORY_HARASSMENT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    // ... other safety settings
  ];

  const chat = model.startChat({
    generationConfig,
    safetySettings,
    history: [
      {
        role: "user",
        parts: [
          {text: "1. Why Choose GRI Education?\n1.\tExpert Guidance: Our LIA officers handle all visa types, including dependent visas.\n2.\tComprehensive Support: We assist with student visas for universities, schools, academies, and polytechnics.\n3.\tPrime Location: Headquartered in Auckland, providing easy and efficient guidance.\n4.\tWide Network: Strong connections with all educational institutions.\n5.\tGlobal Reach: Student visas for New Zealand, France, United Kingdom, Ireland, Canada, and Australia.\n6.\tPost-Visa Services: Continuous support even after your visa is granted.\nChoose GRI Education for seamless and professional visa assistance!\n2. What Services Do We Offer?\n1.\tOffer Letter Guidance\n2.\tWide Range of Course Selections\n3.\tSOP Guidance\n4.\tVisa Consultation\n5.\tAccommodation and Airport Pickups\n6.\tDocumentation Assistance\n7.\tCareer Guidance\n8.\tWelcome Pack\n9.\tLicensed Immigration Advisors services\nChoose GRI Education for comprehensive support and a seamless educational journey! \n3. How to Leave an Inquiry?\nLeave us an inquiry with the link below\nhttps://docs.google.com/forms/d/e/1FAIpQLSd7vm7ivXANNYXamAKv8oxXuFQkVVCR9v32XHmBIPhbPBIB7g/viewform\n\n\n\n\n\n\n4. Benefits of Studying in New Zealand.\n•\tHigh-Quality Education: World-renowned universities and institutions.\n•\tInnovative Teaching: Emphasis on critical thinking and practical skills.\n•\tWelcoming Environment: Friendly and multicultural society.\n•\tWork Opportunities: Part-time work for students and post-study work visas.\n•\tBeautiful Scenery: Stunning landscapes and outdoor activities.\n•\tSafe and Stable: Low crime rates and high standard of living.\n•\tResearch Opportunities: Advanced research facilities and funding.\n•\tPathway to Residency: Potential pathways to permanent residency.\n•\tExperience a world-class education in a vibrant and safe environment\nReasons for visa rejections.\n1.\tInsuﬃcient Financial Resources\n2.\tInsufficient Academic Preparedness\n3.\tLack of Genuine Intentions\n4.\t Incomplete or Inaccurate Documentation\n5.\tSecurity and Background Concerns\nAge limit\nFor the Bachelors – Below 25\nFor the masters – up to 50\nUniversities \nNew Zealand – we can apply for all the colleges, polytechnics and universities.\nFrance and Ireland – We have around 10 – 15 colleges with us.\nUK – We have around 10 – 20 universities with us.\n\n\n\nFund requirement\n•\tNew Zealand – Course fee + Living expenses + airfare (Student)\no\tFunds should be matured for 6 months with source of funds.\no\tLiving expenses \n\t20,000 NZD (student)\n\t4200 NZD each (partner and children)\no\tAirfare – 2000 NZD per person\n•\tFrance – 12,000 EUR (3 months)\n•\tIreland – 12,000 EUR (6 months)\n•\tUK – Approx 15,600 GBP (28 days)\nDepend visa\n•\tNew Zealand – For masters only\n•\tFrance, Ireland and the UK – dependents are not allowed\nStudy gaps\n•\tNew Zealand – Can be covered with the working experience.\n•\tFrance, Ireland and the UK – up to 3-4 years\nIf a student has a refusal when applying for New Zealand?\nThey can reapply with the Licensed Immigration Advisors.\nLIA\nWe have 5 Licensed Immigration Advisors, with 100% success rate, to apply for your visas.\n\n\n\nOpening hours\n•\tMonday – 8 am – 5 pm\n•\tTuesday – 8 am – 5 pm\n•\tWednesday – 8 am – 5 pm\n•\tThursday – 8 am – 5 pm\n•\tFriday – 8 am – 5 pm\n•\tSaturday – 9 am – 2 pm\n•\tSunday - Closed\nHow to make an appointment\nYou can contact us to make an appointment on 0774883351.\nUniversity Fees\n•\tNew Zealand\no\tBachelor – Approx. 25,000 NZD per year\no\tMaster – from 34,000 onwards based on the program you choose.\n•\tFrance and Ireland\no\tBachelor – Approx. 10,000 EUR per year\no\tMaster – 10,000 – 13,000 EUR based on the program.\n•\tUK \no\tBachelor – Approx. 10,000 GBP per year\no\tMaster – 10,000 – 13,000 GBP based on the program.\nSource of Funds\nSource of funds should be provided, that is mandatory for all the countries.\n\n\nEntry requirements\n•\tBachelors – AL 3 passes or foundation program.\n•\tMasters – Have completed a bachelor or a Master.\nWaive off.\n•\tNew Zealand – Depending on the university and the program you choose.\n•\tFrance – Can waived off if the previous education was completed in English medium.\n•\tIreland – Can not be waived off as it is a visa requirement.\n•\tUK – Depending on the university and the program you choose.\nIELTS/ PTE Requirements\n•\tIELTS – 6.5 overall/ Each 6.0 and above.\n•\tPTE – 58 overall/ Each 50 and above.\nYou can apply for the offer letter with pending IELTS or PTE except teaching or nursing related programs.\nContact details\nEmail - srilanka@grieducation.com\nPhone  \nReception - +94 77 488 3351\nSenior Student Counsellors \n +94 77 867 9475 |  +94 77 120 6952  | +94 74 292 0141\n\n\n\n\n\n\n\n\n\n\n do not give any response out of scope , say to user i do not know and please contact GRI , only answer content i provided please "},
        ],
      },
      {
        role: "model",
        parts: [
          {text: "Okay, I understand. I am ready to answer questions about GRI education based on the information you have provided.  Please ask me anything about the company, and I'll do my best to provide concise answers. \n\nIf I can't answer something, I'll let you know to contact the GRI team directly. \n"},
        ],
      },
      {
        role: "user",
        parts: [
          {text: "What is GRI  ?\n"},
        ],
      },
      {
        role: "model",
        parts: [
          {text: "GRI Education is an education consultancy that helps students navigate the process of studying abroad. They specialize in assisting with student visa applications for countries such as New Zealand, France, the United Kingdom, Ireland, Canada, and Australia. They provide a wide range of services, including:\n\n* **Visa Guidance:**  Their Licensed Immigration Advisors (LIAs) handle all visa types, including dependent visas, ensuring a smooth and professional application process.\n* **Comprehensive Support:**  From offer letter assistance to accommodation arrangements, GRI provides comprehensive support throughout your education journey. \n* **Global Network:** They have strong connections with various educational institutions worldwide, making the application process more efficient. \n\nEssentially, GRI aims to simplify studying abroad by providing expert guidance and taking care of the complex details. \n"},
        ],
      },
    ],
  });

  const result = await chat.sendMessage(userInput);
  const response = result.response;
  return response.text();
}

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});
app.get('/loader.gif', (req, res) => {
  res.sendFile(__dirname + '/loader.gif');
});
app.post('/chat', async (req, res) => {
  try {
    const userInput = req.body?.userInput;
    console.log('incoming /chat req', userInput)
    if (!userInput) {
      return res.status(400).json({ error: 'Invalid request body' });
    }

    const response = await runChat(userInput);
    res.json({ response });
  } catch (error) {
    console.error('Error in chat endpoint:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
