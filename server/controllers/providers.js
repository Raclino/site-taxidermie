const Providers = require("../models/providers");
const slugify = require("slugify");

exports.create = async (req, res) => {
  try {
    const {
      name,
      typeOfBusiness,
      city,
      adress,
      nbOfSpecies,
      slaughterhouse,
      website,
      phone,
    } = req.body;

    res.json(
      await new Providers({
        name,
        typeOfBusiness,
        city,
        adress,
        nbOfSpecies,
        slaughterhouse,
        website,
        phone,
        slug: slugify(name),
      }).save()
    );
  } catch (err) {
    console.log(err);
    res.status(400).send("create providers fail");
  }
};
//get by slug name
exports.read = async (req, res) => {
  let providers = await Providers.findOne({ slug: req.params.slug }).exec();
  res.json(providers);
};
//get all by latast created
exports.list = async (req, res) => {
  res.json(await Providers.find({}).sort({ createdAt: -1 }).exec());
};
//update the name and created new slug by the new name input
exports.update = async (req, res) => {
  const { name, website, phone } = req.body;
  try {
    const updated = await Providers.findOneAndUpdate(
      { slug: req.params.slug },
      { name, website, phone, slug: slugify(name) },
      { new: true }
    );
    res.json(updated);
  } catch (err) {
    console.log(err);
    res.status(400).send("update failed");
  }
};
// delete by slug name
exports.remove = async (req, res) => {
  try {
    const deleted = await Providers.findOneAndDelete({ slug: req.params.slug });
    res.json(deleted);
  } catch (err) {
    res.status(405).send("Delete failed");
  }
};
