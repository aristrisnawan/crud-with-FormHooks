import { useState } from "react";
import "./App.css";
import CardComponent from "./components/CardComponent";
import { Container, Row, Col, Modal, Form, Button } from "react-bootstrap";
import Layout from "./layout/Layout";
import { v4 as uuidv4 } from "uuid";
import FormComponent from "./components/FormComponent";
import ModalsComponent from "./components/ModalsComponent";
import { useForm } from "react-hook-form";


function App() {
  const { register, reset, formState: { errors } } = useForm();
  const [data, setData] = useState([
    // {
    //   id: 1,
    //   fullname: "Ahmad Jaelani",
    //   nickname: "jae",
    //   age: 23,
    //   hobby: "Futsal",
    // },
    // {
    //   id: 2,
    //   fullname: "Ahmad Amin",
    //   nickname: "Amin",
    //   age: 22,
    //   hobby: "Volly ball",
    // },
    // {
    //   id: 3,
    //   fullname: "Ujang Damar",
    //   nickname: "Ujang",
    //   age: 23,
    //   hobby: "Mancing",
    // },
  ]);

  const [isOpen, setIsOpen] = useState(false);
  const [detail, setDetail] = useState([])

  const onSubmit = (formValue) => {
    console.log(formValue);
    let setId = { ...formValue, id: uuidv4() };
    let bio = [...data, setId];

    setData(bio);
    // reset()
  };

  function closeModal() {
    setIsOpen(false);
  }

  const getDetail = (data, index) => {
    setDetail(data)
    console.log(data)
    setIsOpen(true);
  };

  const updateData = () => {
    let newData = detail.map((items) => {
      return {...detail,id:items.id,fullname:"",nickname:"",age:0,hobby:""}
    })
  }


  return (
    <div className="app">
      <Layout>
        <FormComponent onSubmit={onSubmit} />
        <h3 className="text-center mb-5">Data</h3>
        <Container>
          <Row xs={1} md={2} lg={3} sm={1} className="g-5">
            {data.map((data, index) => {
              return (
                <Col
                  key={data.id}
                   onClick={() => {
                      getDetail(data);
                    }}
                >
                  <CardComponent
                    fullname={data.fullname}
                    age={data.age}
                    nickname={data.nickname}
                    hobby={data.hobby}
                  />
                </Col>
              );
            })}
          </Row>
          <ModalsComponent
            isOpen={isOpen}
            closeModal={closeModal}
            fullname={detail.fullname}
            nickname={detail.nickname}
            age={detail.age}
            hobby={detail.hobby}
          />
        </Container>
      </Layout>

      {/* <Modal show={isOpen} onHide={closeModal}>
        <Form className="d-grid gap-2">
          <Modal.Header closeButton>
            <Modal.Title>{detail.fullname}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                {...register("fullname", { required: true })}
                type="text"
                value={detail.fullname}
                placeholder="Enter ename"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Nickname</Form.Label>
              <Form.Control
                {...register("nickname", { required: true })}
                type="text"
                value={detail.nickname}
                placeholder="Enter ename"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Age</Form.Label>
              <Form.Control
                {...register("age", { required: true })}
                type="text"
                value={detail.age}
                placeholder="Enter ename"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Hobby</Form.Label>
              <Form.Control
                {...register("hobby", { required: true })}
                type="text"
                value={detail.hobby}
                placeholder="Enter ename"
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={closeModal}>
              Close
            </Button>
            <Button
              variant="primary"
              onClick={() => updateData()}
            >
              Save Changes
            </Button>
          </Modal.Footer>
        </Form>
      </Modal> */}
    </div>
  );
}

export default App;
