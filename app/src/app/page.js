"use client"
import Link from "next/link"
import { useState } from "react"

const intial=[
    {id:"London" ,
    image: "https://t3.ftcdn.net/jpg/01/82/88/24/240_F_182882496_2X9iEFq5pAH05uMdF2uMG1oL7Bvvg86Z.jpg"
   },
   {id:"Newyork" ,
    image: "https://t3.ftcdn.net/jpg/06/01/64/42/240_F_601644207_Skh3OczAHkz34jwhbWg4XZDAFBF8AWqs.jpg"
   },
   {id:"tokyo" ,
    image: "https://t4.ftcdn.net/jpg/02/44/31/27/240_F_244312786_qu8X7ywYQokjjvZssbjGsPzkVXQiLBE2.jpg"
   },
   {id:"toronto" ,
    image: "https://t3.ftcdn.net/jpg/02/09/58/58/240_F_209585829_NSOqdMwXdO5Q0zsqJyAWzuFSQ69WGlSU.jpg"
   }
  ]
export default function Home() {
    const [data,setdata]=useState(intial)
    return(
        <div>
            <h1>Browse by Destination</h1>
            <p>Explore perfect places by Destination</p>
            <div style={{width:"90%",margin:"auto", display:"grid", gridTemplateColumns:"repeat(4,1fr)"}}>
               {data.map((el,i)=>(
                <Link href={`/${el.id}`}>
                <div style={{width:"99%"}}>
                    <img src={el.image} style={{width:"100%", height:"200px"}}></img>
                </div>
                </Link>
               ))}

            </div>
        </div>
    )
}