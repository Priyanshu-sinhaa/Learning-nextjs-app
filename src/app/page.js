import Image from 'next/image'
import Imageslider from 'src/components/Imageslider'
import Head from 'next/head'

export default function Home() {
  return (
  
    <main >
      <Imageslider Imgarr={['/Images/0.jpg','/Images/1.jpg','/Images/2.jpg','/Images/3.jpg','/Images/4.jpg']}/>
    </main>
  
  )
}
