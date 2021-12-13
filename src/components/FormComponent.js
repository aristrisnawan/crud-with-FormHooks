import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Button, Form } from "react-bootstrap";
export default function FormComponent({ onSubmit }) {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState,
    formState: { isSubmitSuccessful  }
  } = useForm();

  useEffect(() => {
      if (formState.isSubmitSuccessful) {
          reset({
              fullname:"",
              nickname:"",
              age:0,
              hobby:""
          })
      }
  },[formState,reset])
  return (
    <div className="FormInput">
      <Form onSubmit={handleSubmit(onSubmit)} className="d-grid gap-2">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            {...register("fullname", { required: true })}
            type="text"
            placeholder="Enter ename"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Nickname</Form.Label>
          <Form.Control
            {...register("nickname", { required: true })}
            type="text"
            placeholder="Enter ename"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Age</Form.Label>
          <Form.Control
            {...register("age", { min: 18, max: 99 })}
            type="text"
            placeholder="Enter ename"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Hobby</Form.Label>
          <Form.Control
            {...register("hobby")}
            type="text"
            required
            placeholder="Enter ename"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}
