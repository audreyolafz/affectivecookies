const AirtablePlus = require("airtable-plus");

const airtable = new AirtablePlus({
  baseID: "appE2tkAhTZtrBVKx",
  apiKey: process.env.AIRTABLE_API_KEY,
  tableName: "user_todo",
  transform: (r) => {
    return r.fields;
  },
});

export default async (req, res) => {
  const data = await airtable.read();
  // const data = await airtable.create({ label: {border-solid.value}, completed: true });
  res.status(200).json(data);
};
