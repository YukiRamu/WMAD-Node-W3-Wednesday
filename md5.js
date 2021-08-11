/* Encryption Process Practice */
const crypto = require("crypto");

//message to be encrypted
let plainText = "Hi this is my message to be encrypted with md5 algorithm";

//algorithm
//create hash object - there are multiple length of hash
const hash = crypto.createHash("md5"); //Message Digest 5: 128bit hash, widely used
//const hash = crypto.createHash("sha1"); //160 bit hash, easily breakable
//const hash = crypto.createHash("sha256"); //256 bit, important!!! basis of encryption of the websites

//pass data to be hashed
const data = hash.update(plainText, "utf-8");

//create the hash (digest)
const gen_hash = data.digest("hex");

console.log("plain text is ", plainText);
console.log("hash : ",gen_hash); //encrypted message

