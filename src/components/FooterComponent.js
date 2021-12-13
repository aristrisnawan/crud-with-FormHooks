import React from "react";
import { Container, Navbar } from "react-bootstrap";

export default function FooterComponent() {
  return (
    <div>
      <Container>
        <Navbar fixed="bottom" className="justify-content-center">
          <Navbar.Text>
            created by{" "}
            <a href="https://github.com/aristrisnawan">aristrisnawan</a> 👀
          </Navbar.Text>
        </Navbar>
      </Container>
    </div>
  );
}
