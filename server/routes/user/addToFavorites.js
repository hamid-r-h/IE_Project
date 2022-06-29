const { User } = require("../../model/user");
const mongoose = require('mongoose');

const addToFavorites = async (req, res) => {
    const user = await User.findOne({_id: req.user.id});
    if(!mongoose.Types.ObjectId.isValid(req.params.id)){
        return res.status(400).send({
            error: {
                message: 'invalid id'
            }
        });
    }
    await user.updateOne({$push: {favorites: req.params.id}});
    return res.status(200).send({
        message: 'successfull'
    });
}

module.exports = addToFavorites;