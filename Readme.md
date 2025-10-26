# 🪙 2025.10.25 비트코인 & 이더리움 지갑 생성 실습 프로젝트

## 📘 개요

2025년 10월 25일 **대구 블록체인 밋업(Daegu Blockchain Meetup)** 에서 진행한 블록체인 실습 프로젝트입니다.  
이 프로젝트에서는 **ethers.js**, **bitcoinjs-lib**, **bip39** 등을 활용하여  
이더리움과 비트코인 지갑을 직접 생성하고, 테스트넷 환경에서 트랜잭션 전송까지 구현했습니다.

> 실제 밋업 참가자들과 함께 지갑 생성, 시드 복구, 트랜잭션 전송을 실습하며  
> 블록체인 기초 원리를 체험하고 코드로 직접 검증하는 시간을 가졌습니다.

---

## 🧱 프로젝트 구조

| 파일명                 | 설명                                      |
| ---------------------- | ----------------------------------------- |
| `create-eth-wallet.ts` | 랜덤 이더리움 지갑 생성                   |
| `derive-path.ts`       | 니모닉 기반 HD Wallet 생성 (BIP44 경로)   |
| `restore-wallet.ts`    | 시드 구문으로 지갑 복구                   |
| `5-transaction.ts`     | 이더리움 트랜잭션 전송 (Sepolia 테스트넷) |
| `create-btc-wallet.ts` | 비트코인 지갑 생성 (bitcoinjs-lib 사용)   |

---

## 🚀 주요 기능

### 🔹 이더리움 파트 (ethers.js)

- 랜덤 지갑 생성 (`Wallet.createRandom()`)
- 시드(Mnemonic) 기반 HD Wallet 파생 (`HDNodeWallet.fromPhrase`)
- **Sepolia 테스트넷**에서 트랜잭션 생성 및 전송

### 🔸 비트코인 파트 (bitcoinjs-lib + bip39)

- 니모닉 생성 (`bip39.generateMnemonic`)
- 시드 및 마스터 노드 생성 (`bip32.fromSeed`)
- BIP44 경로(`m/44'/0'/0'/0/0`)를 이용한 주소 파생
- 개인키(WIF)와 비트코인 주소 생성 및 출력

---
