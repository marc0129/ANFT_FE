import { Networks } from "./blockchain";

const AVAX_MAINNET = {
    BOND_DEPOSITORY_ADDRESS:"0x9986E9C39Dfd93ddbbA773BBEB35444B6F514905",
    ANFT_ADDRESS:"0x158cDFA4131965e9D464aE32256B0e0Dc9339743",
    WARCHEST_ADDRESS:"0xECFF36847a38be7dea4fBFeF6a7E5f951C192468",
    POOL_ADDRESS:"0xFeBc8505bC8e02d71bB4311B47afab462f8F3F08",
    USDC_ADDRESS:"0xa7d7079b0fead91f3e65f86e8915cb59c1a4c664",
    UANFT_ADDRESS : "0x19cf3520fF356939862009b43cafb6518F024450",  // 0x19cf3520fF356939862009b43cafb6518F024450 // old : 0x64F69b86159Cd62C7EF3850169c5d0479275c858
    ADMIN_ADDRESS: "0x1B63ae9CDA5155e508b3548D309A09C1FEbdd689", //0xe205F2f81D8e020fF6B695Af1CbE99e246ceF49d  //  0x1B63ae9CDA5155e508b3548D309A09C1FEbdd689 // 
    SPOILS_ADDRESS:"0xCbE372D7E4b79D28a89606e7D942e5e2915E13D1"
};

export const getAddresses = (networkID: number) => {
    if (networkID === Networks.AVAX) return AVAX_MAINNET;
    throw Error("Network don't support");
};

