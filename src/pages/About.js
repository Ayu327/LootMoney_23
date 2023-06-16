import React from 'react'
import './style/About.css'
import Layout from '../component/Layout/Layout'
const About = () => {
  return (
    <Layout title={"About us - Ecommerce App"}>
    <div className="about-us">
    <h1>About Us</h1>
    <div className="content">
   
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam iaculis orci et interdum vulputate. Curabitur venenatis justo ac massa sagittis, a vulputate metus commodo. Sed eget efficitur enim. Donec eget ante lectus. Nunc suscipit neque quis metus accumsan, non tincidunt sem facilisis. Mauris mattis eleifend diam eu bibendum. Donec ut elementum nulla, vel iaculis quam. Aliquam consectetur aliquam tortor. Suspendisse a rhoncus tortor, eu auctor sem. Curabitur sit amet mauris felis. Nam vulputate cursus odio, sed bibendum ex cursus non. Vestibulum dignissim, lectus vel eleifend finibus, orci nisi consectetur nisl, id convallis tellus elit a sem. Mauris bibendum, tellus ac volutpat dapibus, sapien erat facilisis felis, id lacinia nunc nibh ut sem.</p>
    </div>
  </div>
  </Layout>
  )
}

export default About
