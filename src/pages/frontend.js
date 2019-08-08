import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import ProjectsImage from "../components/images/frontend"
import SEO from "../components/seo"
import Codepen from "react-codepen-embed";

const FrontEndPage = () => (
  <Layout>
    <div className="hero-body">
      <div className="container">
        <div className="columns is-vcentered is-multiline">
          <div className="column is-6 landing-caption">
            <h1 className="title is-1 is-bold is-spaced">Projects</h1>
            <p><Link to="/projects">Javascript</Link></p>
            <p><Link to="/frontend">CSS</Link></p>
        </div>
        <div className="column is-6">     
          <ProjectsImage />
        </div>
        <div className="column is-12">
          <h2 className="has-text-weight-bold">CSS Projects</h2>
        </div>

    {/* Waves */}
    <div className="column is-6">
        <Codepen
              hash="GVOWPQ"
              user="mpakleung"
              defaultTab="result"
              loader={() => <div>Loading...</div>}
            />
    </div>
      
    {/* GOOEY */}
    <div className="column is-6">
      <Codepen
            hash="voRYwP"
            user="mpakleung"
            defaultTab="result"
            loader={() => <div>Loading...</div>}
          />
    </div>

    {/* Pacman */}
    <div className="column is-6">
      <Codepen
            hash="vwGErv"
            user="mpakleung"
            defaultTab="result"
            loader={() => <div>Loading...</div>}
          />
    </div>

    {/* Hello */}
    <div className="column is-6">
      <Codepen
            hash="arqjYP"
            user="mpakleung"
            defaultTab="result"
            loader={() => <div>Loading...</div>}
          />
    </div>

    {/* Moon/Sun */}
    <div className="column is-6">
          <Codepen
                hash="WVEvVE"
                user="mpakleung"
                defaultTab="result"
                loader={() => <div>Loading...</div>}
              />
        </div>

    {/* Mario */}
    <div className="column is-6">
          <Codepen
                hash="wVmWRv"
                user="mpakleung"
                defaultTab="result"
                loader={() => <div>Loading...</div>}
              />
        </div>


      {/* Ruby Gem */}
      <div className="column is-6">
          <Codepen
                hash="YooZdQ"
                user="mpakleung"
                defaultTab="result"
                loader={() => <div>Loading...</div>}
              />
        </div>

     {/* Rocket */}
     <div className="column is-6">
          <Codepen
                hash="rbOxXy"
                user="mpakleung"
                defaultTab="result"
                loader={() => <div>Loading...</div>}
              />
        </div>
        
     {/* Pig */}
     <div className="column is-6">
          <Codepen
                hash="QeyJvO"
                user="mpakleung"
                defaultTab="result"
                loader={() => <div>Loading...</div>}
              />
        </div>
        
        {/* Canada */}
      <div className="column is-6">
          <Codepen
                hash="eqYoYW"
                user="mpakleung"
                defaultTab="result"
                loader={() => <div>Loading...</div>}
              />
        </div>

        {/* Nasa */}
      <div className="column is-6">
          <Codepen
                hash="eqmajb"
                user="mpakleung"
                defaultTab="result"
                loader={() => <div>Loading...</div>}
              />
        </div>

      {/* Dodo */}
      <div className="column is-6">
          <Codepen
                hash="zgGpaP"
                user="mpakleung"
                defaultTab="result"
                loader={() => <div>Loading...</div>}
              />
        </div>

           
        {/* TRex */}
        <div className="column is-6">
          <Codepen
                hash="ZgWgNY"
                user="mpakleung"
                defaultTab="result"
                loader={() => <div>Loading...</div>}
              />
        </div>
        
        {/* Stars */}
        <div className="column is-6">
          <Codepen
                hash="QRJpEP"
                user="mpakleung"
                defaultTab="result"
                loader={() => <div>Loading...</div>}
              />
        </div>

         {/* Candle */}
         <div className="column is-6">
          <Codepen
                hash="RzXjgO"
                user="mpakleung"
                defaultTab="result"
                loader={() => <div>Loading...</div>}
              />
        </div>


        {/* React */}
           <div className="column is-6">
          <Codepen
                hash="vqmeYR"
                user="mpakleung"
                defaultTab="result"
                loader={() => <div>Loading...</div>}
              />
        </div>

         {/* Tree */}
         <div className="column is-6">
          <Codepen
                hash="JgYzeG"
                user="mpakleung"
                defaultTab="result"
                loader={() => <div>Loading...</div>}
              />
        </div>

         {/* Button */}
         <div className="column is-6">
          <Codepen
                hash="QRKwmR"
                user="mpakleung"
                defaultTab="result"
                loader={() => <div>Loading...</div>}
              />
        </div>

        {/* Bike */}
        <div className="column is-6">
          <Codepen
                hash="YbKymq"
                user="mpakleung"
                defaultTab="result"
                loader={() => <div>Loading...</div>}
              />
        </div>

        {/* Panda */}
        <div className="column is-6">
          <Codepen
                hash="ZZRmdz"
                user="mpakleung"
                defaultTab="result"
                loader={() => <div>Loading...</div>}
              />
        </div>

        {/* 100 Days 1 */}
        <div className="column is-6">
          <Codepen
                hash="PMpYbp"
                user="mpakleung"
                defaultTab="result"
                loader={() => <div>Loading...</div>}
              />
        </div>

        
      </div>
  </div>
  </div>
  </Layout>
)
export default FrontEndPage
