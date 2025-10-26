import 'dotenv/config';
import {ethers, parseEther} from 'ethers';

// .env에서 개인키, 노드 URL 가져오기
const privateKey = process.env.PRIVATE_KEY!; // 송신자 개인키
const provider = new ethers.JsonRpcProvider(process.env.PROVIDER_URL!); // 이더리움 네트워크와 통신할 프로바이더 객체 생성

// 개인키와 프로바이더를 사용해 지갑 객체 생성
const wallet = new ethers.Wallet(privateKey, provider);

// 트랜잭션 대상 주소와 송금 금액 설정
const toAddress = process.env.TO_ADDRESS!; // 수신자 주소
const amount = '0.0001'; // 송금할 이더리움 수량 (단위: ETH)

// 트랜잭션 전송 함수 정의
async function sendTransaction() {
  console.log(`Sending transaction from: ${wallet.address}`); // 송신자 주소 출력

  // 트랜잭션 생성 및 서명 후 전송
  const tx = await wallet.sendTransaction({
    to: toAddress, // 수신자 주소
    value: parseEther(amount),
  });
  console.log('Transaction Hash:', tx.hash); // 트랜잭션 해시 출력

  // 블록에 포함될 때까지 대기
  await tx.wait();
  console.log('Transaction confirmed!'); // 트랜잭션 완료 로그
}

// 함수 실행
sendTransaction();
