
import Image from "next/image";




export default function Home() {
  return (
    
   <div className="mbox">
   
    <div className="box1">
       <br />
    <div className="box2 ">
      <h1 className="box2-h1">Modern Interior 
        <br />Design Studio</h1>
      <p className="box2-p">Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit <br />imperdiet dolor tempor tristique.</p>
      <button className="box2-btn ">Shop Now</button>
      <button className="box2-btn ">Explore</button>
    </div></div>
    <center>
    <div className="heading ">
    <h1 className="haeding-h1 ">our catalogue</h1>
    </div></center>
    <div className=" box3">
      
      <div className="box3-div">
      <Image src="/img/c1.jpg" alt="" width={250}  height={250} className="box3-img "/>
      </div>
      <div className="box3-div">
      <Image src="/img/c2.jpg" alt="" width={250} height={250} className="box3-img "/>
      </div>
      <div className="box3-div">
      <Image src="/img/c3.jpg" alt="" width={250} height={250} className="box3-img "/>
      </div>
      <div className="box3-div ">
      <Image src="/img/c4.jpg" alt="" width={250} height={250} className="box3-img "/>
      </div> 
      <div className="box3-div ">
      <Image src="/img/c5.jpg" alt="" width={250} height={250} className="box3-img "/>
      </div>
      <div className="box3-div ">
      <Image src="/img/c6.jpg" alt="" width={250} height={250} className="box3-img "/>
      </div>
      <div className="box3-div ">
      <Image src="/img/c7.jpg" alt="" width={250} height={250} className="box3-img "/>
      </div>
      <div className="box3-div ">
      <Image src="/img/c8.jpg" alt="" width={250} height={250} className="box3-img "/>
      </div>
    </div>
   </div>
  );
}
