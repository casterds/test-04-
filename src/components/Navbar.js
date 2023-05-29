import React from 'react';
import ConnectWallet from './ConnectWallet';
import LoanVaultDetails from '../ABIs/LoanVaultABI.js';

const Navbar = () => {
    console.log("LoanVaultDetails", LoanVaultDetails.abi, LoanVaultDetails.address)
    return ( 
        <div className='flex flex-row w-screen h-fit p-4 justify-between bg-hero' >
            <p className='font-bold text-white text-2xl'>💸 Sala3ied </p>
            <ConnectWallet />
        </div>
     );
}
 
export default Navbar;