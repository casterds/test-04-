import { ethers } from 'ethers';
import React from 'react';
import { useSigner, useContract } from 'wagmi';

const GetContract = (addr,abidata) => {
    const { data: signer, isError, isLoading } = useSigner()
    console.log(signer);
  const contract = new ethers.Contract(addr, abidata, signer);
  console.log(contract);
  return contract;
}

export default GetContract;