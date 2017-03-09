const lol = process.env.USER_KEY;
module.exports = {
  'port': process.env.PORT || 3000,
  'dbUrl': "mongodb://kickass:kickass2017@ds123930.mlab.com:23930/kickass"
}
console.log(lol);
