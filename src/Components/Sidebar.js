import {
  Button,
  Container,
  Offcanvas,
  ButtonGroup,
  DropdownButton,
  Dropdown,
} from "react-bootstrap";
import { useState } from "react";
import "./style.css";

function Sidebar() {
  const [show, setShow] = useState(false);
  const closeSidebar = () => setShow(false);
  const showSidebar = () => setShow(true);
  return (
    <>
      <Container className="p-10">
        <Button style={{ backgroundColor: "blue" }} onClick={showSidebar}>
          Go to Navigation
        </Button>
        <Offcanvas show={show} onHide={closeSidebar}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title style={{ margin: "auto" }}>SSASIT</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <ButtonGroup vertical style={{ width: "100%" }}>
              <Button variant="secondary" size="lg" active>
                School Profile
              </Button>
              <Button variant="secondary" size="lg">
                Teacher
              </Button>

              <DropdownButton
                as={ButtonGroup}
                title="Dropdown"
                id="bg-vertical-dropdown-1"
              >
                <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
                <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
              </DropdownButton>

              <Button variant="secondary" size="lg">
                Student
              </Button>
              <Button variant="secondary" size="lg">
                Parents
              </Button>

              <DropdownButton
                as={ButtonGroup}
                title="Dropdown"
                id="bg-vertical-dropdown-2"
                variant="secondary"
                size="lg"
              >
                <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
                <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
              </DropdownButton>

              <DropdownButton
                as={ButtonGroup}
                title="Dropdown"
                id="bg-vertical-dropdown-3"
                variant="secondary"
                size="lg"
              >
                <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
                <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
              </DropdownButton>
            </ButtonGroup>
          </Offcanvas.Body>
        </Offcanvas>
      </Container>
    </>
  );
}
export default Sidebar;
