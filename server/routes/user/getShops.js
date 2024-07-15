const { User } = require("../../model/user");

const getShops = async (req, res) => {
    const user = await User.findOne({_id: req.user.id}).populate('shops');
    if(!user){
        return res.status(400).send({
            error: {
                message: 'user does not exists'
            }
        });
    }
    return res.status(200).send({
        shops: user.shops,
        message: 'successfull'
    });
}

module.exports = getShops;