const { User } = require("../../model/user")

const removeFromFavorites = async (req, res) => {
    const user = await User.findOne({_id: req.user.id});
    if(!user){
        return res.status(400).send({
            error: {
                message: 'user does not exists'
            }
        });
    }

}

module.exports = removeFromFavorites;