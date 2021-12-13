import React from "react";
import { Navbar, Container } from "react-bootstrap";

export default function HeaderComponent() {
  return (
    <div>
      <Container>
        <Navbar bg="dark"  variant="dark" >
          <Container>
            <Navbar.Collapse className="justify-content-center">
              <Navbar.Brand>
                SIMPLE CRUD with HOOKS
              </Navbar.Brand>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Container>
    </div>
  );
}
