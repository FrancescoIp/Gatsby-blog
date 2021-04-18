import React from 'react';
import Layout from '../components/layout'
import { Link, graphql, useStaticQuery } from 'gatsby';
import * as blogStyle from './blog.module.scss'
import Head from '../components/head'


const BlogPage = () => {
  const data = useStaticQuery(graphql`
     query {
  allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
    edges {
      node {
        title
        slug
        publishedDate(formatString:"MMMM Do, YYYY")
      }
    }
  }
}
  `)

  return (
    <Layout>
      <Head title="Blog"/>
      <h1>Blog</h1>
      <ol className={blogStyle.posts}>
        {data.allContentfulBlogPost.edges.map((edge) => {
          return (
            <li className={blogStyle.post} key={edge.node.title}>
              <Link to={`/blog/${edge.node.slug}`}>
                <h2>{edge.node.title}</h2>
                <p>{edge.node.publishedDate}</p>
              </Link>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default BlogPage

// render() {
//   const data =[{"name":"test1"},{"name":"test2"}];
//   return (
//     <div>
//     {data.map(function(d, idx){
//        return (<li key={idx}>{d.name}</li>)
//      })}
//     </div>
//   );
// }