import { useEffect } from "react"

export default function Page404() {
  useEffect(()=>{
    if (window) window.location.href = '/'
  },[])
  return
}
