const AirtablePlus = require("airtable-plus");

const airtable = new AirtablePlus({
  baseID: "appE2tkAhTZtrBVKx",
  apiKey: process.env.AIRTABLE_API_KEY,
  tableName: "user_jar_content",
});

export default async (req, res) => {
  if (req.query.story || req.query.jartitle || req.query.media) {
    const record = await airtable.create({
      story: req.query.story,
      // jartitle: req.query.jartitle,
      // media: req.query.media,
    });
    res.status(200).send(`Created record ${record.id}`);
  } else {
    res.status(400).send(`Couldn't create record.`);
  }
};
