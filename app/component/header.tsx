import Link from "next/link"


export default function Header(){
 return(
    <div className="header">
        
        <ul className=" header-ul ">
            <li className="header-li" ><Link href="/">Home</Link></li>
            <li className="header-li" ><Link href="../about">About</Link></li>
            <li className="header-li" ><Link href="../contact">Contact Us</Link></li>
        </ul>
    </div>
 )
}
