---

title: "Getting Started with Gatsby"

date: "2019-08-10"

---

![Gatsby](./gatsby.png)

### What is Gatsby?

Gatsby is a static site framework for **react.js** that makes websites extremely fast. It is similar to Jekyll. Gatsby is part of JAMstack (Javascript, APIs, Markup).

There are several features that gatsby incorporates into its framework such as precaching, image optimization and pre-rendered markup.

Finally, I can host the whole application in Netlify on the free tier which saves on hosting. Thus, the domain name is the only cost I incur while creating my own webpage. Additionally, every time I push to github, netlify automatically deploys the changes live.



### Step 1. Install Gatsby

```
npm install –global gatsby-cli

gatsby new helloworld

gatsby develop

```

 - First you need to install the gatby cli and then create a new application
 - Then run gatsby develop on your terminal and navigate to http://locahost:8000 to view the website
 - The project structure is like this:

 **src** 
   - components
     - header.js
     - footer.js
     - layout.js
  - pages
    - index.js
    - about.js
 - posts (Coming later)
    - first-post.js
 - template
    - post.js (this is the layout of a single post)

### Step 2. PUSH TO GITHUB

- You should store all your code on github. This is essential because netlify will ask you for a github repo.

```
git init

git add .

git commit -m “first commit”

git add remove url

git push origin master
```
 

### Step 3. CONNECT TO NETLIFY

 - Follow this tutorial to connect your app to netlify. 

https://www.netlify.com/blog/2016/02/24/a-step-by-step-guide-gatsby-on-netlify/


### Step 4. Use GRAPHQL API 

 - We need to display the site name in the header by using graphql.
 - GraphyQL is used to query your gatsby API for titles, etc

Inside **gatsby.config.js**, add this

```
module.exports = {
siteMetadata: {
  title: `Title of the website`,
  description: `Web Developer`,
  author: `Your name`,
},
```

Then inside the **header.js** page (which should be provided)

```
import { graphyql, useStaticQuery } from 'gatsby'
const Header = () => {
    const data - useStaticQuery(graphql`
       query {
           siteMetadata { 
                  title 
        }
  `
```

To inject the site title, use this line of code inside your header

```
{ data.site.siteMetadata.title }
```

### Step 5. Creating the Blog Page

In this step, we will create a blog powered by markdown file posts. Gatsby will dynamically generate brand new pages for each and every blog post.

- Create a folder inside src and call it posts
- Inside the folder, create a **first-post.md** and add some content

First we need to install 2 plugins:
 - Gatsby-Source-Filesystem plugin
 - Gatsby-transformer-remark plugin

The first one pulls content from an external source. The second one transforms the content pulled from source into something useful

**Install Gatsby-Source-Filesystem plugin**

```
npm install gatsby-source-filesystem@2.0.28
```

Add this to **gatsby.config.js**

```
{
  resolve: `gatsby-source-filesystem`,
   options: {
    name: `src`,
    path: `${__dirname}/src/`,
  },
},
```


**Install Gatsby-transformer-remark plugin**

```
npm install gatsby-transformer-remark@2.3.8
```

Then update the gatsby.config.js file with 'gatsby-transformer-remark'

Create a **blog.js** and add the following

```
import {graphql, useStaticQuery, Link } from 'gatsby'

const data=useStaticQuery( graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            date
          }
       }
     }
   }
  }
`)
{data.allMarkdownRemark.edges.map((edge) => {
  return (
      <h2>{edge.node.frontmatter.title}</h2>
      <p>{edge.node.frontmatter.date}</p>
)
})}
```

Then navigate to localhost:8000/post/



### Step 6. Dynamically generate slug and blog template

We then need to generate unique urls for each post.

Then inside **gatsby-node.js**

```
const path = require(`path`)

module.exports.onCreateNode = ({ node, actions}) => {
  const {createNodeField } =actions
  if (node.internal.type ==="MarkdownRemark"){
    const slug=path.basename(node.fileAbsolutePath, '.md')
    createNodeField({
       node,
       name: 'slug',
       value: slug
    })
  }
}

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } =actions
    const blogTemplate=path.resolve(`./src/templates/post.js`)
    const res=awaitgraphql(`
       query {
         allMarkdownRemark {
           edges {
             node {
               fields {
                slug
             }
          }
        }
     }
   }
`)

res.data.allMarkdownRemark.edges.forEach((edge) => {
  createPage({
    component: blogTemplate,
    path: `/blog/${edge.node.fields.slug}`,
    context: {
    slug: edge.node.fields.slug
  }
  })
 })
}

```

Then create a file inside  **src/templates/post.js** to display the content of a single post

```
export const query = graphql`
    query($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            frontmatter {
                title
                date(formatString: "MMMM Do, YYYY")
            }
            html
        }
    }
`
const PostPage = (props) => (
  <Layout>
    <h1 className="title is-1 is-bold is-spaced">{props.data.markdownRemark.frontmatter.title}</h1>
    <p className="is-italic">{props.data.markdownRemark.frontmatter.date}</p>
    <div dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html}}></div>
  </Layout>
)
```

Then add the link inside **blog.js** page to link the single page

```
<Link to={`/blog/${edge.node.fields.slug}`}> ... </Link>
```

When you load the blog page, you should be able to link to a single post page.


### Step 7. Adding Images

Install the following packages

```
npm install gatsby-plugin-sharp@2.0.32 gatsby-remark-images@3.0.10 gatsby-remark-relative-images@0.2.2
```

Then add this into the plugins of gatsby-config.js

```
    `gatsby-plugin-sharp`,
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-relative-images',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 750,
              linkImagesToOriginal: false
            }
          }
        ]
      }
    },

```


### Conclusion

Thanks for following my tutorial. I hope you had fun. The code can be found [here](https://github.com/mkleung/gatsby-bootcamp).