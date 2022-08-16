const AirtablePlus = require("airtable-plus");

const airtable = new AirtablePlus({
  baseID: "appE2tkAhTZtrBVKx",
  apiKey: process.env.AIRTABLE_API_KEY,
  tableName: "user_form",
  transform: (res) => {
    return res.fields;
  },
});

export default async (req, res) => {
  const readRes = await airtable.read();
  res.json(readRes);
};
