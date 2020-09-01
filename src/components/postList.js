import React, {Component} from 'react'
import { getPosts } from './getData'
import Moment from 'moment'

class PostList extends Component {
    state = {
        posts: []
    }

    componentDidMount() {
      let postUrl = `${getPosts}`;
      fetch(postUrl)
      .then(data => data.json())
      .then(data => {
        this.setState({
          posts: data
        });
      });
    }

      render() {
        let listposts = this.state.posts.map((post, index) => {
          return(
              <div className="col-4">
                <div className="p-card--highlighted">
                  <div className="p-card" key={index}>
                    <h2 className="p-card__title">CLOUD AND SERVER</h2>
                <hr className="u-sv1" />
                    <img src={post.featured_media} alt="title-cards" />
                      <h3>{post.title.rendered}</h3>
                      <p><i> By <></>
                      <a href={post._embedded.author[0].url}>
                          {post._embedded.author[0].name}
                          </a> on <></>
                          {Moment(post.date).format('DD MMMM YYYY')}
                          </i></p>
                <hr className="u-sv1" />
                    <p><a href={post._embedded["wp:term"][0].name}>Article</a></p>
                  </div>
                </div>
              </div>
          );
        })
        return (
          <div className="container u-vertically-center">
            <div className="row">
              {listposts}
            </div>
          </div>
        );
      }
    }

    export default PostList;
