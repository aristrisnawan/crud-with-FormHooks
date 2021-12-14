import React from "react";
import { Card, Container } from "react-bootstrap";

export default function CardComponent({fullname,nickname,age,hobby}) {
  return (
    <div>
        <Card border="success" style={{ width: "18rem" }}>
          <Card.Header>{nickname}</Card.Header>
          <Card.Body>
            <Card.Title>{fullname}</Card.Title>
            <Card.Text>
              My name {fullname}, you can call me {nickname}. <br />
              Iam {age} years and i am hobby {hobby}
            </Card.Text>
          </Card.Body>
        </Card>
    </div>
  );
}
