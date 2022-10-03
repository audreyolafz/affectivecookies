const AirtablePlus = require("airtable-plus");

const airtable = new AirtablePlus({
  baseID: "appE2tkAhTZtrBVKx",
  apiKey: process.env.AIRTABLE_API_KEY,
  tableName: "user_form",
});

export default async (req, res) => {
  if (
    req.query.name ||
    // req.query.pic ||
    req.query.people ||
    req.query.future ||
    req.query.place
  ) {
    const record = await airtable.create({
      name: req.query.name,
      // pic: req.query.pic,
      people: req.query.people,
      future: req.query.future,
      place: req.query.place,
    });
    res.status(200).send(`Created record ${record.id}`);
  } else {
    res.status(400).send(`Couldn't create record.`);
  }
};
