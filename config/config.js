// Copy this file as config.js in the same folder, with the proper database connection URI.

module.exports = {
  db: 'mongodb://root:root@sustainable-shard-00-00-2kelb.mongodb.net:27017,sustainable-shard-00-01-2kelb.mongodb.net:27017,sustainable-shard-00-02-2kelb.mongodb.net:27017/test?ssl=true&replicaSet=SustainAble-shard-0&authSource=admin&retryWrites=true',
  db_dev: 'mongodb://root:root@sustainable-shard-00-00-2kelb.mongodb.net:27017,sustainable-shard-00-01-2kelb.mongodb.net:27017,sustainable-shard-00-02-2kelb.mongodb.net:27017/test?ssl=true&replicaSet=SustainAble-shard-0&authSource=admin&retryWrites=true',
};
