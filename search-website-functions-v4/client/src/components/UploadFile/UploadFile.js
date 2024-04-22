
import { FileUploader } from "react-drag-drop-files";
import "./UploadFile.css";
import React, { useEffect, useState } from "react";
import axios from 'axios';
// import  ClipLoader  from "react-spinners/ClipLoader";
import { HashLoader } from "react-spinners";

const fileTypes = ["JPEG", "PNG", "GIF", "PDF"];

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

const UploadFile = () => {

  const [file, setFile] = useState(null);
  const [data, setData] = useState(null);
  // let [loading, setLoading] = useState(false);
  let [color, setColor] = useState("#36d7b7");
  const [username, setUsername] = useState('gurveer.singh01@nagarro.com');
  const [password, setPassword] = useState('Public@123');


  const handleChange = (file) => {
    setFile(file);
    console.log("file:", file)
  };

  const handleFetchData = () => {
    // setLoading(true);
    const headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/pdf'
    };
    const auth = {
      username: username,
      password: password
    };

    const body = file ? file[0] : null;
    console.log("body:", body)
    axios.post('https://invoicescanner1a3e6ac0a1-uy78x7nr0f.hana.ondemand.com/invoicescanner/api/rest/scan-invoice', body, {
      headers: headers,
      auth: auth,
      responseType: 'json'
    })
      .then(response => {
        console.log("data:", response.data)
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      })
      // .finally(() => {
      //   setLoading(false); // Set loading state to false when data fetching is done
      // });
  };

  useEffect(() => {
    
  }, []);

  


  return (

    <div className="dragAndDrop_Container">
      <h1>Drag & Drop Files</h1>
      <FileUploader
        multiple={true}
        handleChange={handleChange}
        name="file"
        types={fileTypes}
      />
      <p>{file ? `File name: ${file[0].name}` : "no files uploaded yet"}</p>
      <button onClick={handleFetchData}>Fetch Data</button>
      {/* {loading && ( // Conditionally render loader when loading is true
        <HashLoader
          color={color}
          loading={loading}
          css={override}
          size={100}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      )} */}
      
      {data && data.map((item, index) => (
        console.log("tabular:", item),
        <div key={index}>

          <p><strong>Vendor Name:</strong> {item.Fields.Vendor.Name}</p>
          <p><strong>Invoice number:</strong> {item.Fields['Invoice Number']}</p>
          
          <ul>
            {item.Fields['Line Items'].map((lineItem, idx) => (
              <li key={idx}>
                <p><strong>Description:</strong> {lineItem.Description}</p>
                <p><strong>Quantity:</strong> {lineItem.Quantity}</p>
                <p><strong>Net Price:</strong> {lineItem['Net Price']}</p>
                <p><strong>Article Number Vendor:</strong> {lineItem['Article Number Vendor']}</p>
              </li>
            ))}
          </ul>
          <p><strong>Business Unit:</strong> {item.Fields['Business Unit'].Name}</p>
        </div>
      ))}
    </div>
  )

};

export default UploadFile;