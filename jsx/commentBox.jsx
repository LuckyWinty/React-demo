var React=require('react');
var addons = require('react-addons');
var ReactDOM=require('react-dom');
var CommentBox=require('./commentB.jsx');

ReactDOM.render(
  <CommentBox></CommentBox>,
  document.getElementById('content')
);
Perf =addons.Perf;