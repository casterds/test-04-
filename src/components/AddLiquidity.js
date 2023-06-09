import React from 'react';
import LoanVaultDetails from '../ABIs/LoanVaultABI.js';
import { useState } from 'react';
import { useEffect } from 'react';
import { ethers } from 'ethers';
import GetContract from '../hooks/GetContract';
import GetAccount from '../hooks/GetAccount';
import { daiABI } from './DAIABI.js';
import {DAIaddr} from '../common.js';

const AddLiquidity = () => {

    const LoanVault = GetContract(LoanVaultDetails.address, LoanVaultDetails.abi);
    const DAI = GetContract(DAIaddr,daiABI);
    const[amount,setAmount]=useState('');
    const[share,setShare]=useState('');
    const account = GetAccount();

    useEffect(()=>{
        getShare();
    })

    const addLiquidity=async()=>{
        await DAIApprove();
        var tx = await LoanVault.addLiquidity(0,ethers.utils.parseEther(amount));
        console.log(tx);
    }

    const getShare=async()=>{
        var share = await LoanVault.getShare('0');
        share = share.toString();
        console.log(share)
        setShare(share);
    }

    const DAIApprove=async()=>{
        await DAI.approve(LoanVaultDetails.address,ethers.utils.parseEther(amount));
    }

    return ( 
        <div className='flex flex-col w-[30%] bg-white p-6 rounded-2xl'  >
            <input className='p-2 bg-slate-100 w-[100%] rounded-xl px-2 ' placeholder={"Enter DAI Amount"} onChange={(e)=>setAmount(e.target.value)} />
            <label className='text-slate-900 font-normal mt-2' >Shares to be minted : {share}</label>
            <button className='w-full h-fit p-2 mt-2 bg-slate-900 text-white rounded-xl' onClick={()=>addLiquidity()} >Add Liquidity</button>
        </div>
     );
}
 
export default AddLiquidity;