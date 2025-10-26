import {ethers} from 'ethers';

// 지갑생성
const wallet = ethers.Wallet.createRandom();

// 생성된 지갑 정보 출력
console.log('Wallet created');
console.log('------------------');
console.log('Address (주소):', wallet.address);
console.log('Private Key (개인키)', wallet.privateKey);
console.log('Mnemonic Phrase (시드구문)', wallet.mnemonic?.phrase);
