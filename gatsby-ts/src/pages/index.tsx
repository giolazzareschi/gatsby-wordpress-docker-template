import * as React from "react"
import { useQuery, gql } from '@apollo/client';

import './reset.css';
import './index.scss';

type Post = {
  id: number;
  title: string;
}

type PageData = {
  posts: {
    nodes: Array<Post>
  }
}

const IndexPage = () => {
  const { data, loading, error } = useQuery<PageData>(queryPosts);

  return (
    <div className="Index">
      <ul>
      {
        data?.posts.nodes.map((post) => {
          return <li key={post.id}>{ post.title }</li>
        })
      }
      </ul>
    </div>
  )
}

const queryPosts = gql`
query allWpPost {
  posts {
    nodes {
      id
      title
    }
  }
}
`;

export default IndexPage
