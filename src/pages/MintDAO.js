import React from 'react';
import { SBTabi } from '../ABIs/SBTABI';
import GetContract from '../hooks/GetContract';
import { ethers } from 'ethers';
import LoanVaultDetails from '../ABIs/LoanVaultABI.js'
import MyNFTDetails from '../ABIs/MyNFT.js';
import { useState } from 'react';
import { ImageUpload } from 'react-ipfs-uploader'
import GetAccount from '../hooks/GetAccount';
import { useWaitForTransaction } from 'wagmi'

const MintDAO = () => {

    const[id,setId]=React.useState('');
    const[daoname,setDaoname]=React.useState('');   
    const[items,setItems]=useState('');
    const [imageUrl, setImageUrl] = useState('')
    const SBT = GetContract(MyNFTDetails.address, SBTabi);
    const LoanVault = GetContract(LoanVaultDetails.address,LoanVaultDetails.abi);
    var account = GetAccount();
    const[txhash,setTxhash]=useState('');

    const mintsbt = async(id)=>{
        console.log(id)
        var tx = await SBT.mint(id).then(setTxhash(tx.hash));
        setName();
    }

    const setName = async()=>{
        const name = await LoanVault.registerDAO(daoname,ethers.utils.getAddress(account));
        setDaoname(name);
    }

    const getData = async () => {
        const response = await fetch("https://api.covalenthq.com/v1/80001/tokens/0x83843047A53edEc47A42e3BaC427FA01390C2c2f/token_holders/?key=ckey_ed0af45f6c99493486cf9b47e54")
        const data = response.json()
        console.log(data)
   }

   getData();

    return ( 
        <div className='flex flex-col w-screen h-screen bg-hero items-center justify-center ' >
            <div className='flex flex-col w-fit h-fit p-6 items-center justify-center text-white rounded-2xl border-2 border-opacity-20' >
                <label className='text-3xl font-bold' >Onboard your Compay with SOUL BOUND TOKENS</label>
                <br/>
                <label className='text-2xl text-center' >Unique identity for Everyone</label>
                <hr/>
                <input  className='w-full h-fit mt-6 bg-transparent border-2 border-opacity-10 rounded-xl p-3  ' placeholder='Company Name' onChange={(e)=>setDaoname(e.target.value)} />
                <input  className='w-full h-fit mt-6 bg-transparent border-2 border-opacity-10 rounded-xl p-3  ' placeholder='Stream Admin' value={account} />
                <input className='w-full h-fit mt-6 bg-transparent border-2 border-opacity-10 rounded-xl p-3  ' placeholder='Add Token ID' onChange={(e)=>setId(e.target.value)} />
                <button className='w-full h-fit mt-6 bg-white text-slate-900 rounded-xl p-3' onClick={()=>mintsbt(id)} >Mint SBT</button>
                <div className='mt-10' >
                </div>
            </div>
        </div>
     );
}
 
export default MintDAO;