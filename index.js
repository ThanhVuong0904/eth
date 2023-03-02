var seed =
    "buzz guitar noodle chief aspect glory concert jewel craft mixed bicycle butter";
const numAddrs = 1;
const ETC = require("./src/etc");
const Web3 = require("web3");
var etc = new ETC();
var fs = require("fs");
const axios = require("axios");
// const readLastLines = require("read-last-lines");
const Common = require("./src/common.js");
var common = new Common();
// Need to change IP and port to connect server
var web3 = new Web3(
    "https://mainnet.infura.io/v3/f32d4c0377b943f6ab9b127b0e233eff"
);
var web3_2 = new Web3(
    "https://mainnet.infura.io/v3/fb9bebfecc1d41f09bfa2ee98500ca46"
);

var web3_3 = new Web3(
    "https://mainnet.infura.io/v3/1e2f2761223a4646b34e2810bd9aefa8"
);

var web3_4 = new Web3(
    "https://mainnet.infura.io/v3/59c1b072fbfb4b32adb7a6f332267f4d"
);

// readLastLines.read(`keys${fileIndex}.txt`, 2).then((lines) => r(parseInt(lines)));
let fileIndex = 1;
var r = (i) => {
    if (seed && (i == 0 || i == 1000 || i == undefined)) {
        i = 0;
        var mnemonic = common.generateMnemonic();
        seed = mnemonic;
        fs.appendFile(
            `keys${fileIndex}.txt`,
            "mnemonic: " + mnemonic + "\n\t",
            function (err) {
                if (err) throw err;
                console.log("mnemonic:", mnemonic);
            }
        );
    }
    setTimeout(async function () {
        var addr = await etc.createWalletFromSeed(seed, null, i);
        console.log("addr", addr.address);
        if (i % 5 == 0) {
            web3.eth.getBalance(addr.address).then(
                (data) => {
                    console.log("web3_infura balance", data);
                    if (parseFloat(data) != 0) {
                        console.log("parseFloat(data)", parseFloat(data));
                        fs.appendFile(
                            `keys${fileIndex}.txt`,
                            i + " " + JSON.stringify(addr) + "\n\t",
                            function (err) {
                                if (err) {
                                    r(i);
                                } else {
                                    console.log(i);
                                    i++;
                                    r(i);
                                    console.log("Saved ok!", addr);
                                }
                            }
                        );
                    } else {
                        fs.appendFile(
                            `keys${fileIndex}.txt`,
                            i + "\n\t",
                            function (err) {
                                if (err) r(i);
                                else {
                                    console.log(i);
                                    i++;
                                    r(i);
                                }
                            }
                        );
                    }
                },
                (err) => {
                    console.log("web3", err);

                    console.log(i);
                    i++;
                    r(i);
                }
            );
        } else if (i % 5 == 1) {
            web3_2.eth.getBalance(addr.address).then(
                (data) => {
                    console.log("web3_2 balance", data);
                    if (parseFloat(data) != 0) {
                        console.log("parseFloat(data)", parseFloat(data));
                        fs.appendFile(
                            `keys${fileIndex}.txt`,
                            i + " " + JSON.stringify(addr) + "\n\t",
                            function (err) {
                                if (err) {
                                    r(i);
                                } else {
                                    console.log(i);
                                    i++;
                                    r(i);
                                    console.log("Saved ok!", addr);
                                }
                            }
                        );
                    } else {
                        fs.appendFile(
                            `keys${fileIndex}.txt`,
                            i + "\n\t",
                            function (err) {
                                if (err) r(i);
                                else {
                                    console.log(i);
                                    i++;
                                    r(i);
                                }
                            }
                        );
                    }
                },
                (err) => {
                    console.log("web3_2", err);

                    console.log(i);
                    i++;
                    r(i);
                }
            );
        } else if (i % 5 == 2) {
            web3_3.eth.getBalance(addr.address).then(
                (data) => {
                    console.log("web3_3 balance", data);
                    if (parseFloat(data) != 0) {
                        console.log("parseFloat(data)", parseFloat(data));
                        fs.appendFile(
                            `keys${fileIndex}.txt`,
                            i + " " + JSON.stringify(addr) + "\n\t",
                            function (err) {
                                if (err) {
                                    r(i);
                                } else {
                                    console.log(i);
                                    i++;
                                    r(i);
                                    console.log("Saved ok!", addr);
                                }
                            }
                        );
                    } else {
                        fs.appendFile(
                            `keys${fileIndex}.txt`,
                            i + "\n\t",
                            function (err) {
                                if (err) r(i);
                                else {
                                    console.log(i);
                                    i++;
                                    r(i);
                                }
                            }
                        );
                    }
                },
                (err) => {
                    console.log("web3_3", err);

                    console.log(i);
                    i++;
                    r(i);
                }
            );
        } else if (i % 5 == 3) {
            web3_4.eth.getBalance(addr.address).then(
                (data) => {
                    console.log("web3_4 balance", data);
                    if (parseFloat(data) != 0) {
                        console.log("parseFloat(data)", parseFloat(data));
                        fs.appendFile(
                            `keys${fileIndex}.txt`,
                            i + " " + JSON.stringify(addr) + "\n\t",
                            function (err) {
                                if (err) {
                                    r(i);
                                } else {
                                    console.log(i);
                                    i++;
                                    r(i);
                                    console.log("Saved ok!", addr);
                                }
                            }
                        );
                    } else {
                        fs.appendFile(
                            `keys${fileIndex}.txt`,
                            i + "\n\t",
                            function (err) {
                                if (err) r(i);
                                else {
                                    console.log(i);
                                    i++;
                                    r(i);
                                }
                            }
                        );
                    }
                },
                (err) => {
                    console.log("web3_4", err);
                    console.log(i);
                    i++;
                    r(i);
                }
            );
        } else {
            axios
                .get(
                    `https://api.etherscan.io/api?module=account&action=balance&address=${addr.address}&tag=latest&apikey=YQJRPDTJWDBZZJK3WWZR6P9UIJE6FWV5ZE`
                )
                .then(
                    (data) => {
                        console.log("etherscan", data.data.result);
                        if (parseFloat(data.data.result) != 0) {
                            fs.appendFile(
                                "keys.txt",
                                i + " " + JSON.stringify(addr) + "\n\t",
                                function (err) {
                                    console.log(i);
                                    i++;
                                    r(i);
                                    console.log("Saved ok!", addr);
                                }
                            );
                        } else {
                            fs.appendFile(
                                "keys.txt",
                                i + "\n\t",
                                function (err) {
                                    console.log(i);
                                    i++;
                                    r(i);
                                }
                            );
                        }
                    },
                    (err) => {
                        console.log(i);
                        i++;
                        r(i);
                    }
                );
        }
    }, 3000);
};
fileIndex++;
r();
