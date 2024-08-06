import { HardhatUserConfig } from 'hardhat/config'
import '@nomicfoundation/hardhat-toolbox'
import dotenv from 'dotenv'

dotenv.config()

const config: HardhatUserConfig = {
  solidity: '0.8.19',
  networks: {
    swisstronik: {
      url: 'https://json-rpc.testnet.swisstronik.com/', // URL dari RPC node untuk Swisstronik
      accounts: [`0x15105783190e1902a1c9a33b9befb74f0e9468fe91588743c461a413507d1fc4`], // Kunci pribadi Anda harus benar-benar valid
      // Pastikan Anda memiliki cukup dana di dompet ini untuk meng-deploy kontrak pintar
    },
  },
}

export default config

