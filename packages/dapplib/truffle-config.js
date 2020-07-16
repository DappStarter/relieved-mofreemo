require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'include clock bottom slab green rare remember pupil grid nasty flock sure'; 
let testAccounts = [
"0x88a8996242fabcf7791ec8fea1003c4053d1ba7c0007730c6da9786a59aff744",
"0xc60e3ee01b15756536c11c342313e5a8f618a498ed392e921169a726663c49af",
"0x5883e3417ebb0c7e3f1973d4e26fb1d3c9d04c9f4c4ee345f466f707e9246380",
"0x025fb7ff50f37516f1e855ab37f930c37321c1abe001e4ceb8cd2a45cf8439b6",
"0x3fefecf1b94af4e67e4a838c90b4d58b48ab6ff1ccdd1b683e11ce09813989ef",
"0xcaabcd29c6ccfe90fd9814d1c39d3bf0c5263386dc0fa0b85acb248da5836070",
"0xdc768b4d9b95ed015b830a34e8636706e41753bf8d3192d52970f033cd559c26",
"0x848e9c96c2f3e18ae980b776bc9347af8ad1bf095b785931920395b2a1eb3699",
"0x9e92b0700ce3ad7751f1196de323944552b5062001c84f08daa8419c49e96cd1",
"0x4aceded440754f64e35805a6686af80184a48f3761e29adc56f23ac56384f59b"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
