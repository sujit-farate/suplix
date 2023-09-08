import { Avatar, Button, List, ListItem, ListItemText } from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";

const Upload = () => {
  const [file, setFile] = useState(null);
  const [fetchFile, setFetchFile] = useState(null);
  const [data, setData] = useState({ name: "", email: "", password: "" });

  useEffect(() => {
    var config = {
      method: "post",
      url: "http://localhost:4000/api/v1/fetchFile",
      headers: {},
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        setFetchFile(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const handleFile = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
    console.log(data);
  };

  return (
    <div>
      <h1>Upload file</h1>
      <input type="text" placeholder="name" name="name" onChange={handleFile} />
      <input
        type="text"
        placeholder="email"
        name="email"
        onChange={handleFile}
      />
      <input
        type="text"
        placeholder="password"
        name="password"
        onChange={handleFile}
      />

      <input
        type="text"
        placeholder="enter message to send"
        name=""
        onChange={handleFile}
      />
      <input type="file" onChange={handleFile} />
      {/* <Button variant="contained" onClick={submit}>
        submit
      </Button> */}
      {fetchFile?.data.map((value, index) => {
        return (
          <>
            <List>
              <ListItem>
                <Avatar src={`http://localhost:4000/${value.image}`} />
                <ListItemText>{value.name}</ListItemText>
                {/* <img
                  key={value.id}
                  alt={`/images${index}`}
                  src={`http://localhost:4000/${value.image}`}
                  width="150px"
                  height="150px"
                /> */}
              </ListItem>
            </List>
          </>
        );
      })}
    </div>
  );
};

export default Upload;
