'use client'
import Image from 'next/image'
import Imageslider from 'src/components/Imageslider'
import Head from 'next/head'
import Multilang from '@/components/Multilang';
import { useState } from 'react';



export default function Home() {


  

  class Language{
    constructor(name){
      this.name = name;
      var header;
      var statement;
    }
  }

  const hindi = new Language('hindi')
  hindi.header = "नमस्ते";
  hindi.statement = "आपका स्वागत है !";

  const english = new Language('english')
  english.header = "Hello";
  english.statement = "You're Welcome again!"



  const [lang,setlang] = useState(english)

  return (
  
    <main >
      <Imageslider Imgarr={['/Images/0.jpg','/Images/1.jpg','/Images/2.jpg','/Images/3.jpg','/Images/4.jpg']}/>
      <section className="bg-blue-500 h-screen w-200 ">
        <button onClick={()=>{setlang(english)}}>English</button>
        <button onClick={()=>{setlang(hindi)}}>Hindi</button>
        <Multilang language={lang}/>
      </section>
    </main>

  
  )
}
