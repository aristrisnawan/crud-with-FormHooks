import { useState } from "react";
import "./App.css";
import CardComponent from "./components/CardComponent";
// import FormComponent from "./components/FormComponent";
import { Container, Row, Col } from "react-bootstrap";
import Layout from "./layout/Layout";
import { v4 as uuidv4 } from "uuid";
import { useForm } from "react-hook-form";
import FormComponent from "./components/FormComponent";

function App() {
  // const { reset, formState: { errors } } = useForm({defaultValues:{fullname:"", nickname:"", age:"", hobby:""}});
  const [data, setData] = useState([
    {
      id: 1,
      fullname: "Ahmad Jaelani",
      nickname: "jae",
      age: 23,
      hobby: "Futsal",
    },
    {
      id: 2,
      fullname: "Ahmad Amin",
      nickname: "Amin",
      age: 22,
      hobby: "Volly ball",
    },
    {
      id: 3,
      fullname: "Ujang Damar",
      nickname: "Ujang",
      age: 23,
      hobby: "Mancing",
    },
  ]);

  const onSubmit = (formValue) => {
    console.log(formValue);
    let setId = {...formValue, id: uuidv4()}
    let bio = [...data,setId]

    setData(bio)
    // reset()
  };

  return (
    <div className="app">
      <Layout>
        <FormComponent onSubmit={onSubmit}/>
        <h3 className="text-center mb-5">Data</h3>
        <Container>
          <Row xs={1} md={2} lg={3} sm={1} className="g-5">
            {data.map((data) => {
              return (
                <Col key={data.id}>
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
        </Container>
      </Layout>
    </div>
  );
}

export default App;
