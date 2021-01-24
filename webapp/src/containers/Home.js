import React, {Component} from "react";
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Header from '../components/Header';
import MainBlog from '../components/MainBlog';
import FeaturedPost from '../components/FeaturedPost';
import Footer from '../components/Footer';
import { api } from '../api';
import moment from 'moment';
const axios = require('axios');



const blogTemplate = {
    title: null,
    date: null,
    image: null,
    author: null,
  };


export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mainBlog: null,
      featureBlogs: null,
    };
  }

  componentDidMount() {
    let that = this;
    axios.get(api.getBlog, api.header)
      .then(function (response) {
        let blogs = Array.from(response.data);
        // sort the array so the first blog is the latest
        blogs.sort((a, b) =>
            moment(a.updated_at).isAfter(b.updated_at) ? -1 : 1
        );
        const main = blogs[0];
        let mainBlog = {
          title: main.title,
          image: main.img_url,
          linkText: 'Read Article',
          author: main.user_name,
        };

        blogs.shift();

        let featureBlogs = [];

        for(let blog of blogs){
          let b = Object.assign({}, blogTemplate);
          b.title = blog.title;
          b.image = blog.img_url;
          b.author = blog.user_name;
          featureBlogs.push(b);
        }

        that.setState({
          mainBlog: mainBlog,
          featureBlogs: featureBlogs,
        });


      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
  }

  render(){
    const {mainBlog, featureBlogs} = this.state;
    return (
      <React.Fragment>
        <CssBaseline />
        <Container>
          <Header title="Cheeto Fingers Reviews" sections={[]} />
          <main>
            {
              mainBlog && <MainBlog post={mainBlog} />
            }
            {
              featureBlogs && <Grid container spacing={4}>
                {featureBlogs.map((post) => (
                  <FeaturedPost key={post.title} post={post} />
                ))}
              </Grid>
            }

          </main>
        </Container>
        <Footer title="Footer"/>
      </React.Fragment>
    );
  }
}
