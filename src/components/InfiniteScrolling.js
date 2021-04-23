import React from "react";
import InfiniteScroll from "react-infinite-scroller";

const InfiniteScrolling = props => (
  <InfiniteScroll
    pageStart={0}
    loadMore={props.loadMore}
    hasMore={true || false}
    threshold={1100}
    initialLoad={false}
  >
    {props.children}
  </InfiniteScroll>
);

export default InfiniteScrolling;
