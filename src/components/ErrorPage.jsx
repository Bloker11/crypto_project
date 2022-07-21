import React from 'react'
import "antd/dist/antd.css";
import { Button, Result } from "antd";
import "../App.css"

const ErrorPage = () => {
  return (
    <div className="error">
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={<Button type="primary">Back Home</Button>}
      />
    </div>
  );
}

export default ErrorPage