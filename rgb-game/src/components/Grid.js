import React from "react";
import Block from "./blocks/Block";
import BlockList from "./blocks/BlockList";

const Grid = ({ rgbs }) => {
  return <BlockList numBlocks={rgbs} />;
};

export default Grid;
