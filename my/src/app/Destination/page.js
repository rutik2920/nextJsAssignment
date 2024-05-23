"use client"
import Link from "next/link"
import { useState } from "react"

const initial = [
    {id:"London" , image: "https://t3.ftcdn.net/jpg/01/82/88/24/240_F_182882496_2X9iEFq5pAH05uMdF2uMG1oL7Bvvg86Z.jpg"},
    {id:"New York" , image: "https://t3.ftcdn.net/jpg/06/01/64/42/240_F_601644207_Skh3OczAHkz34jwhbWg4XZDAFBF8AWqs.jpg"},
    {id:"Tokyo" , image: "https://t4.ftcdn.net/jpg/02/44/31/27/240_F_244312786_qu8X7ywYQokjjvZssbjGsPzkVXQiLBE2.jpg"},
    {id:"Toronto" , image: "https://t3.ftcdn.net/jpg/02/09/58/58/240_F_209585829_NSOqdMwXdO5Q0zsqJyAWzuFSQ69WGlSU.jpg"},
    {id:"Beijing" , image: "https://t3.ftcdn.net/jpg/01/88/89/60/240_F_188896064_5Cc7f11hXLiY73jjcSob0efEwnuSn8Yi.jpg"},
    {id:"Istanbul" , image: "https://t3.ftcdn.net/jpg/02/21/94/54/240_F_221945433_oIrTgxUXm6SPta1t117kZpmyQ66JaHVE.jpg"},
    {id:"Dubai" , image: "https://t4.ftcdn.net/jpg/02/44/69/29/240_F_244692979_t2oCOiISldR1fynEcARDEGr1jWEIF12z.jpg"},
    {id:"Paris" , image: "https://as2.ftcdn.net/v2/jpg/02/96/15/35/1000_F_296153501_B34baBHDkFXbl5RmzxpiOumF4LHGCvAE.jpg"}
]

export default function Home() {
    const [data, setData] = useState(initial);
    const [startIndex, setStartIndex] = useState(0);

    const handleNext = () => {
        setStartIndex((prevIndex) => (prevIndex + 4) % data.length);
    };

    const handlePrev = () => {
        setStartIndex((prevIndex) => (prevIndex - 4 + data.length) % data.length);
    };

    const visibleData = data.slice(startIndex, startIndex + 4);

    return(
        <div style={{width:"90%",margin:"auto" ,marginTop:"10px"}}>
            <h1>Browse by Destination</h1>
            <p>Explore perfect places by Destination</p>
            <div style={{ textAlign: "right", marginTop: "20px",marginBottom:"30px" }}>
                <button onClick={handlePrev} style={{ marginRight: "10px" }}><img style={{width:"7px"}} src="https://uxwing.com/wp-content/themes/uxwing/download/arrow-direction/arrow-thin-chevron-left-icon.png"></img></button>
                <button onClick={handleNext}  ><img style={{width:"7px"}} src="https://uxwing.com/wp-content/themes/uxwing/download/arrow-direction/arrow-thin-chevron-right-icon.png"></img></button>
            </div>

            <div style={{ width: "100%", height:"200px", margin: "auto", display: "grid", gridTemplateColumns:"repeat(4,1fr)" }}>
                {visibleData.map((el) => (
                    <Link href={`Destination/${el.id}`} key={el.id}>
                        <div style={{ position: "relative", width: "99%" }}>
                            <img src={el.image} alt={`Image of ${el.id}`} style={{ width: "100%", height: "200px",borderRadius:"15px"}} />
                            <p style={{
                                position: "absolute",
                                bottom: "0px",
                                left: "10px",
                                color: "white",
                               
                                
                            }}>{el.id}</p>
                        </div>
                    </Link>
                ))}
            </div>
           
        </div>
    )
}

