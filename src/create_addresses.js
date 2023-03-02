var seed =
    "buzz guitar noodle chief aspect glory concert jewel craft mixed bicycle butter";
const numAddrs = 1;
const ETC = require("./etc.js");
const Web3 = require("web3");
var etc = new ETC();
var fs = require("fs");
// const axios = require("axios");
// const readLastLines = require("read-last-lines");
const Common = require("./common.js");
var common = new Common();
// Need to change IP and port to connect server
var web3 = new Web3(
    new Web3.providers.HttpProvider(
        "https://mainnet.infura.io/v3/f32d4c0377b943f6ab9b127b0e233eff"
    )
);
var web3_2 = new Web3(
    new Web3.providers.HttpProvider("https://eth.llamarpc.com")
);

var web3_3 = new Web3(
    new Web3.providers.HttpProvider("https://ethereum.publicnode.com")
);

var web3_4 = new Web3(
    new Web3.providers.HttpProvider("https://eth-rpc.gateway.pokt.network")
);

// readLastLines.read("keys.txt", 2).then((lines) => r(parseInt(lines)));

var r = (i) => {
    if (seed && (i == 0 || i == 1000 || i == undefined)) {
        i = 0;
        var mnemonic = common.generateMnemonic();
        seed = mnemonic;
        fs.appendFile(
            "keys.txt",
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
            try {
                const balance = await web3.eth.getBalance(addr.address);
                console.log({ balance, addr: addr.address });
                if (parseFloat(balance) != 0) {
                    fs.appendFile(
                        "keys.txt",
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
                    fs.appendFile("keys.txt", i + "\n\t", function (err) {
                        if (err) r(i);
                        else {
                            console.log(i);
                            i++;
                            r(i);
                        }
                    });
                }
            } catch (error) {
                console.log(i);
                i++;
                r(i);
            }
        } else if (i % 5 == 1) {
            try {
                const balance = await web3_2.eth.getBalance(addr.address);
                console.log({ balance, addr: addr.address });

                if (parseFloat(balance) != 0) {
                    fs.appendFile(
                        "keys.txt",
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
                    fs.appendFile("keys.txt", i + "\n\t", function (err) {
                        if (err) r(i);
                        else {
                            console.log(i);
                            i++;
                            r(i);
                        }
                    });
                }
            } catch (error) {
                console.log(i);
                i++;
                r(i);
            }
        } else if (i % 5 == 2) {
            try {
                const balance = await web3_3.eth.getBalance(addr.address);
                console.log({ balance, addr: addr.address });

                if (parseFloat(balance) != 0) {
                    fs.appendFile(
                        "keys.txt",
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
                    fs.appendFile("keys.txt", i + "\n\t", function (err) {
                        if (err) r(i);
                        else {
                            console.log(i);
                            i++;
                            r(i);
                        }
                    });
                }
            } catch (error) {
                console.log(i);
                i++;
                r(i);
            }
        } else {
            try {
                const balance = await web3_4.eth.getBalance(addr.address);
                console.log({ balance, addr: addr.address });

                if (parseFloat(balance) != 0) {
                    fs.appendFile(
                        "keys.txt",
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
                    fs.appendFile("keys.txt", i + "\n\t", function (err) {
                        if (err) r(i);
                        else {
                            console.log(i);
                            i++;
                            r(i);
                        }
                    });
                }
            } catch (error) {
                console.log(i);
                i++;
                r(i);
            }
        }
    }, 3000);
};

r();
