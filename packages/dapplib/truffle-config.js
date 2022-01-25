require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom process outside skull drift renew still horse grace derive bottom ghost'; 
let testAccounts = [
"0x39dd35e0804faae7ccd85684a83a833cc5ca8c9351766dc750ee791c37e015a7",
"0x884d433a5fa058f7c8a214022ffd90961afb59a9ed998d7baffe30b86c4305e8",
"0x32e7be34ad99dde38e47bcb528dd8d95d1a5fac38bc4036cbb68f2e4b8b75ec7",
"0x73df32b862638b6514007d965d5408f4710fb55cb5c0d7ee3b8895e64be5b565",
"0x9a784bb71e68634f6fbd646828e290d2866c3e6bed298281114b37f71f7c8b7f",
"0x44bcb53064949b55ddbd5714851e63a9855c909d5ed4dbee546f36863813e33b",
"0xdfb2d56ba207e8510fd4599fafe2600a70433c59fccc1264546eaf901c06f0cd",
"0x67309b2313b437614ef2a8c20a7cf2f539127ec5500f21a7aa2bd159272e3b61",
"0x03f1f5594dd4245deff44c58d5be04bd1c59f63a768229f97acf10566dbeb6bd",
"0xddc7bb7d0acf30ac082da7fce9a4000e2c173d8ca927ad27b96794504d19f5c5"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


