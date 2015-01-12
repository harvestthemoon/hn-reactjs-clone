var $ = require('jquery');
var React = require('react');
var url = require('url');
var moment = require('moment');

var NewsItem = React.createClass({displayName: "NewsItem",
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
      React.createElement("a", {href: 'https://news.ycombinator.com/item?id=' + this.props.item.id}, commentText)
    );
  },
  getSubtext: function() {
    return ( 
      React.createElement("div", {className: "newsItem-subtext"}, 
        this.props.item.score, " points by ", React.createElement("a", {href: 'https://news.ycombinator.com/user?id=' + this.props.item.by}, this.props.item.by), " ", mooment.utc(this.props.item.time * 1000).fromNow(), " || ", this.getCommentLink()
      )
    );
  },
  getTitle: function() {
    return (
      React.createElement("div", {className: "newsItem-title"}, 
        "..."
      )
    );
  },
  render: function() {
    return (
      React.createElement("div", {className: "newsItem"}, 
        "TEST"
      )
    );
  }
});

module.exports = NewsItem;