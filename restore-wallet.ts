import {Wallet} from 'ethers';
import 'dotenv/config';

// 복구할 시드 구문
const mnemonic = process.env.MNEMONIC;
if (!mnemonic) {
  throw new Error(
    'MNEMONIC is missing in .env (ex: MNEMONIC="word1 word2 ...")'
  );
}
//시드 구문으로 지갑 생성 (복구)
const wallet = Wallet.fromPhrase(mnemonic);

console.log('Wallet restored');
console.log('----------------');
console.log('Adress(주소):', wallet.address);
console.log('Private Key(개인키)', wallet.privateKey);
