import {HDNodeWallet} from 'ethers';
import 'dotenv/config';

//시드 구문으로 HD Wallet 마스터 노드 생성
const mnemonic = process.env.MNEMONIC;
if (!mnemonic) {
  throw new Error(
    'MNEMONIC is missing in .env (ex: MNEMONIC="word1 word2 ...")'
  );
}

//이더리움 지갑 생성(기본 경로 생략 가능)
const ethereumWallet = HDNodeWallet.fromPhrase(mnemonic);

//비트코인 지갑 생성 (경로 명시 필요)
// 하지만 진짜 지갑 아님 -> ethers는 이더리움 전용 라이브러리
const bitcoinWallet = HDNodeWallet.fromPhrase(mnemonic, "m/44'/0'/0'/0/0");

console.log('경로를 통해 파생된 지갑 정보');
console.log('--------------------');
console.log('이더리움 지갑 주소', ethereumWallet.address);
console.log('비트코인 지갑 주소', bitcoinWallet.address);

//이더리움
const ethereumWallet2 = HDNodeWallet.fromPhrase(mnemonic, "m/44'/60'/1'/0/0");
console.log('두번째 이더리움 주소:', ethereumWallet2.address);
