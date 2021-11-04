const Animals = require("../models/animals");
const slugify = require("slugify");

exports.create = async (req, res) => {
  try {
    const {
      name,
      specie,
      race,
      age,
      color,
      pedestal,
      gender,
      climate,
      alimentationType,
    } = req.body;

    res.json(
      await new Animals({
        name,
        specie,
        race,
        age,
        color,
        pedestal,
        gender,
        climate,
        alimentationType,
        slug: slugify(name),
      }).save()
    );
  } catch (err) {
    console.log(err);
    res.status(400).send("create animals fail");
  }
};
//get by slug name
exports.read = async (req, res) => {
  let animals = await Animals.findOne({ slug: req.params.slug }).exec();
  res.json(animals);
};
//get all by latast created
exports.list = async (req, res) => {
  res.json(await Animals.find({}).sort({ createdAt: -1 }).exec());
};
//update the name and created new slug by the new name input
exports.update = async (req, res) => {
  const { name, race, specie, age, color } = req.body;
  try {
    const updated = await Animals.findOneAndUpdate(
      { slug: req.params.slug },
      { name, race, specie, age, color, slug: slugify(name) },
      { new: true }
    );
    res.json(updated);
  } catch (err) {
    res.status(400).send("update name failed");
  }
};
// delete by slug name
exports.remove = async (req, res) => {
  try {
    const deleted = await Animals.findOneAndDelete({ slug: req.params.slug });
    res.json(deleted);
  } catch (err) {
    res.status(400).send("Delete failed");
  }
};
