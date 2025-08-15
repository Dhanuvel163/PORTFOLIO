"use client"
import Header from "@/app/@header/page";
import Sidebar from "../sidebar/Sidebar";
import { useState } from "react";

function Navcontent(){
    const  [open, setOpen] = useState(false)
    return(
        <>
            <Sidebar isOpen={open} onClose={()=>{setOpen(false)}}/>
            <Header isOpen={open} onClose={()=>{setOpen(false)}} onOpen={()=>{setOpen(true)}}/>
        </>
    )    
}

export default Navcontent;