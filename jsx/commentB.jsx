var React = require('react');
var CommentList=require('./CommentList.jsx');
var CommentForm=require('./commentFrom.jsx');

var CommentBox = React.createClass({
  render: function() {
    return (
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList />
        <CommentForm />
      </div>
    );
  }
});

module.exports = CommentBox;