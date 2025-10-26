import bip39 from 'bip39';
import BIP32Factoy from 'bip32';
import {payments, networks} from 'bitcoinjs-lib';
import * as ecc from 'tiny-secp256k1';

const bip32 = BIP32Factoy(ecc);
const mnemonic = bip39.generateMnemonic();
const seed = bip39.mnemonicToSeedSync(mnemonic);
const masterNode = bip32.fromSeed(seed);

const path = "m/44'/0'/0'/0/0";
const child = masterNode.derivePath(path);

const address = payments.p2pkh({
  pubkey: child.publicKey,
  network: networks.bitcoin,
}).address;

console.log('비트코인 지갑 생성 완!');
console.log('----------------------------');
console.log('개인키 (WIF)', child.toWIF());
console.log('주소 (Address):', address);
