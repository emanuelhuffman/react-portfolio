import React from "react";
import Block from "./Block";
import { Container, Row, Col } from "react-bootstrap";

const BlockList = ({ numBlocks }) => {
  return (
    <div>
      <Container>
        <Row style={{ textAlign: "center" }}>
          {numBlocks.map((block, index) => (
            <Col key={index}>
              <Block />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default BlockList;
