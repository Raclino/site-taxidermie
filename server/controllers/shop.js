const Shop = require("../models/shop");
const slugify = require("slugify");

exports.create = async (req, res) => {
  try {
    const { name, owner, typeShop, city, adress, nbOfSpecies, phone } =
      req.body;

    res.json(
      await new Shop({
        name,
        owner,
        typeShop,
        city,
        adress,
        nbOfSpecies,
        phone,
        slug: slugify(name),
      }).save()
    );
  } catch (err) {
    console.log(err);
    res.status(400).send("create shop fail");
  }
};
//get by slug name
exports.read = async (req, res) => {
  let shop = await Shop.findOne({ slug: req.params.slug }).exec();
  res.json(shop);
};
//get all by latast created
exports.list = async (req, res) => {
  res.json(await Shop.find({}).sort({ createdAt: -1 }).exec());
};
//update the name and created new slug by the new name input
exports.update = async (req, res) => {
  const { name } = req.body;
  try {
    const updated = await Shop.findOneAndUpdate(
      { slug: req.params.slug },
      { name, slug: slugify(name) },
      { new: true }
    );
    res.json(updated);
  } catch (err) {
    res.status(400).send("update failed");
  }
};
// delete by slug name
exports.remove = async (req, res) => {
  try {
    const deleted = await Shop.findOneAndDelete({ slug: req.params.slug });
    res.json(deleted);
  } catch (err) {
    res.status(400).send("Delete failed");
  }
};
