const HDKey = require("ethereumjs-wallet/dist/hdkey");
const Wallet = require("ethereumjs-wallet");
const Util = require("ethereumjs-util");
const Common = require("./common.js");
const HD_PATH_STRING = "m/44'/60'/0'/0";

var common = new Common();

class ETC {
    async getWallet(mnemonic, path, child) {
        if (mnemonic === undefined || mnemonic === null || mnemonic === "") {
            mnemonic = common.generateMnemonic();
            console.log(mnemonic);
        }
        let masterSeed = await common.mnemonicToSeed(mnemonic);
        let _wallet = HDKey.default
            .fromMasterSeed(masterSeed)
            .derivePath(path || HD_PATH_STRING)
            .deriveChild(child || 0)
            .getWallet();
        return _wallet;
    }

    generateWallet() {
        return Wallet.generate();
    }

    fromV3(input, password) {
        return Wallet.fromV3(input, password);
    }

    async createWalletFromSeed(mnemonic, path, child) {
        let _wallet = await this.getWallet(mnemonic, path, child);
        // console.log({ _wallet });
        if (_wallet !== null) {
            return {
                address: _wallet.getAddressString(),
                privateKey: _wallet.getPrivateKeyString(),
            };
        }
        return null;
    }

    validateAddress(address) {
        return Util.isValidAddress(address.toLowerCase());
    }
}

module.exports = ETC;
