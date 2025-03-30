import { useEffect, useRef, useState } from "react"
import { ToastContainer,toast } from "react-toastify";
// import 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

export const notify_echec_submit=($text)=>{
  console.log(toast.POSITION)
  toast.error($text,{
    // position:toast.POSITION.TOP_CENTER,
    //  position: toast.POSITION.TOP_RIGHT,
    autoClose:3000,
    style: {
      
      width:"50vw",
      height:'10vh',
      textAlign:'center',
      margin:'0 auto',
      // left:'010px'
      right:'20vw'
    },
    // style:{
    //   width:'300px'
    // }
  })

}
export const notify_echec=($text)=>{
  toast.error($text,{
    autoClose:2000,
  })
}
export const notif_succes=($d)=>{
  toast.success($d,{
    autoClose:500
  })

}
export const notify_info=($info)=>{
  toast.info($info,{
    autoClose:500
  })
}