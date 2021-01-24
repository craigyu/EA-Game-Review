import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Header from "../components/Header";
import Footer from "../components/Footer";
import queryString from 'query-string'
import axios from 'axios';
import {api} from '../api';
import CardMedia from '@material-ui/core/CardMedia';
import {Avatar, Paper} from "@material-ui/core";
import moment from 'moment';

export default class BlogPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blog: null,
      comment: null,
    };
  }

  componentDidMount() {
    const query = queryString.parse(this.props.location.search);
    const blog_id = query.blog_id;
    let that = this;

    axios.get(api.getBlog + `/${blog_id}`, api.header)
      .then(function (response) {
        that.setState({
          blog: response.data[0],
        })
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })

    axios.get(api.getComment + `/${blog_id}`, api.header)
      .then(function (response) {
        let comment = response.data;

        comment.sort((a, b) =>
          moment(a.updated_at).isAfter(b.updated_at) ? 1 : -1
        );

        that.setState({
          comment: comment,
        })
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
  }

  render() {
    const {blog, comment} = this.state;
    return (
      <React.Fragment>
        <CssBaseline/>
        <Container>
          <Header title="Cheeto Fingers Reviews" sections={[]}/>
          {
            blog &&
            <main>
              <Grid item xs={12} md={12} style={{overflow: 'scroll'}}>
                <Typography variant="h3" gutterBottom>
                  {blog.title}
                </Typography>
                <Typography variant="subtitle" gutterBottom>
                  {blog.user_name}
                </Typography>
                <Typography variant="subtitle" gutterBottom>
                  &nbsp; {moment(blog.updated_at).format('YYYY MMM Do')}
                </Typography>
                <Divider/>
                <CardMedia image={blog.img_url} style={{height: 0, paddingTop: '40%', marginTop: '10px'}}/>
                <Divider style={{marginTop: '10px'}}/>
                {blog.blog_content}
              </Grid>
            </main>
          }
          <div style={{padding: 14}}>
            <h1>Comments</h1>
            {
              comment && comment.length &&
              comment.map((c) => {
                return (
                  <Paper style={{padding: "20px 20px", marginTop: 30}}>
                    <Grid container wrap="nowrap" spacing={2}>
                      <Grid item>
                        <Avatar>{c.user_name.charAt(0)}</Avatar>
                      </Grid>
                      <Grid justifyContent="left" item xs zeroMinWidth>
                        <h4 style={{margin: 0, textAlign: "left"}}>{c.user_name}</h4>
                        <p style={{textAlign: "left"}}>
                          {c.comment_content}{" "}
                        </p>
                        <p style={{textAlign: "left", color: "gray"}}>
                          { moment(c.updated_at).subtract(moment.duration(8, 'h')).fromNow()}
                        </p>
                      </Grid>
                    </Grid>
                  </Paper>
                )
              })
            }


          </div>

        </Container>
        <Footer title="Footer"/>
      </React.Fragment>
    );
  }
}

