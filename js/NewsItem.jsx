var $ = require('jquery');
var React = require('react');
var url = require('url');
var moment = require('moment');

var NewsItem = React.createClass({
  getDomain: function() {
    return url.parse(this.props.item.url).hostname;
  },
  getCommentLink: function() {
    var commentText = 'discuss';
    if (this.props.item.kids && this.props.item.kids.length) {
      // This only counts top-level comments.
      // To get the full count, recursively get item details for this news item.
      commentText = this.props.item.kids.length + ' comments';
    }

    return (
      <a href={'https://news.ycombinator.com/item?id=' + this.props.item.id}>{commentText}</a>
    );
  },
  getSubtext: function() {
    return ( 
      <div className="newsItem-subtext">
        {this.props.item.score} points by <a href={'https://news.ycombinator.com/user?id=' + this.props.item.by}>{this.props.item.by}</a> {mooment.utc(this.props.item.time * 1000).fromNow()} || {this.getCommentLink()}
      </div>
    );
  },
  getTitle: function() {
    return (
      <div className="newsItem-title">
        ...
      </div>
    );
  },
  render: function() {
    return (
      <div className="newsItem">
        TEST
      </div>
    );
  }
});

module.exports = NewsItem;