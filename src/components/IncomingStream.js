import React, { useEffect } from 'react';
import GetAccount from '../hooks/GetAccount';
  import GetContract from '../hooks/GetContract';
  import { useState } from 'react';
  import LoanVaultABI from '../ABIs/LoanVaultABI.json';

const IncomingStream = () => {

    const account = GetAccount();
    const LoanVault = GetContract('0x1D776c3E4F5D8442CD066947FBD117EB08AB72BB',LoanVaultABI);
    const[streams,setStreams]=useState([]);
    const[streamCount,setStreamCount]=useState('');

    useEffect(()=>{
        if(streamCount == ''){
            showStream();
        }
    })

    var showStream = async () => {
        var listcount = await LoanVault.getCount();
        listcount = listcount.toString();
        setStreamCount(listcount);
        setStreams([])
        for(let i=1;i<=listcount;i++){
            var stream = await LoanVault.getStream(i);
            if(account.toString() == stream.recipient){
                setStreams((streams)=>[...streams,stream])
            }
        }
        
    }


    console.log(streamCount)

    return ( 
        <div className='flex flex-col w-full h-[45%] ml-14 mt-10 bg-slate-100 rounded-xl p-12' >
            <div className='w-full flex flex-row justify-between items-end '>
            <p className='text-xl text-slate-900 font-semibold' >Incoming streams</p>
            </div>
            <hr className='mt-2 mb-2 border-slate-900' />
            {streams.length ?
                (Object.keys(streams).map((key)=>{
                    return(
                        <div className='flex  flex-row w-full h-fit p-3 bg-slate-200 rounded-xl justify-between items-center text-slate-900 mt-2 ' >
                        <p className='text-lg text-slate-900 font-semibold'>{(streams[key].sender).toString().substring(0,8)}...{(streams[key].sender).toString().substring(38)}</p>
                            <label className='text-lg font-medium' >→</label>
                            <p className='text-lg text-slate-900 font-semibold'>{(streams[key].amount).toString()} DAI</p>
                            <label className='text-lg font-medium' >at</label>
                            <p className='text-lg text-slate-900 font-semibold'>{((streams[key].rate).toString()/1e18).toFixed(8)} DAI/s</p>
                            <label className='bg-green-800 text-white px-3 text-md py-1 rounded-xl' >Live</label>
                        </div>
                    )
                })
                ):<label>No Incoming Streams</label>
            }
        </div>
     );
}
 
export default IncomingStream;