const Transaction = require("./../../../models/transaction");

const getMachineStatus = async (req, res) => {
  //check if there is any transaction in the last 5 minutes
  const lastTransaction = await Transaction.findOne({
    timestamp: {
      $gte: new Date(new Date() - 5 * 60 * 1000),
    },
  });

  let status = false;
  if (lastTransaction) {
    status = true;
  }

  res.json({
    status: status,
  });
};
module.exports.getMachineStatus = getMachineStatus;
