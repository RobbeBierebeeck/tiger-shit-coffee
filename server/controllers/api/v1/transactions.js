const Transaction = require("./../../../models/Transaction");
const User = require("./../../../models/user");

const createTransaction = async (req, res) => {
  let { userId } = req.body;

  //find user by id
  const userById = await User.findOne({
    _id: userId,
  });

  //if user not found
  if (!userById) {
    return res.status(404).json({
      status: "error",
      message: "User not found",
    });
  }

  if (userById.coffeePoints === 0) {
    return res.status(404).json({
      status: "error",
      message: "User coffee points is 0",
    });
  }

  const lastTransaction = await Transaction.findOne({
    timestamp: {
      $gte: new Date(new Date() - 5 * 60 * 1000),
    },
  });

  if (lastTransaction) {
    return res.status(102).json({
      status: "error",
      message: "Machine is busy",
    });
  }

  userById.coffeePoints = userById.coffeePoints - 1;
  await userById.save();

  const transaction = new Transaction({
    userId: userId,
  });

  await transaction
    .save()
    .then((result) => {
      res.status(200).json({
        status: "success",
        message: "Transaction created",
        data: {
          transaction: result,
        },
      });
    })
    .catch((err) => {
      res.status(500).json({
        status: "error",
        error: err,
      });
    });
};

module.exports.createTransaction = createTransaction;
