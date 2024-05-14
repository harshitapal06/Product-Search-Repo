import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
import axios from 'axios';

import "./Details.css";

export default function Details() {

  let { id } = useParams();
  const [document, setDocument] = useState({});
  const [selectedTab, setTab] = useState(0);
  const [isLoading, setIsLoading] = useState(true);



  useEffect(() => {
    setIsLoading(true);
    // console.log(id);
    axios.get('/api/lookup?id=' + id)
      .then(response => {
        console.log(JSON.stringify(response.data))
        const doc = response.data.document;
        setDocument(doc);
        setIsLoading(false);
      })
      .catch(error => {
        console.log(error);
        setIsLoading(false);
      });

  }, [id]);

  // View default is loading with no active tab
  let detailsBody = (<CircularProgress />),
    resultStyle = "nav-link",
    rawStyle = "nav-link";

  if (!isLoading && document) {
    // View result
    if (selectedTab === 0) {
      resultStyle += " active";
      detailsBody = (
        <div className="card-body">
          <h5 className="card-title">{document.product_description}</h5>
          <img className="image" src={document.image_url} alt="Product"></img>

        </div>
      );
    }

    // View raw data
    else {
      rawStyle += " active";
      detailsBody = (
        <div className="card-body">
          {/* <pre><code>
          {JSON.stringify(document, null, 2)}
          </code></pre> */}

          <p><strong>ID:</strong> {document.id}</p>
          <p><strong>Catalog Number:</strong> {document.catalog_number}</p>
          <p><strong>Category:</strong> {document.category}</p>
          <p><strong>Commodity Code:</strong> {document.commodity_code}</p>
          <p><strong>Last Purchase Date:</strong> {document.previous_purchase_date ?? 'null'}</p>
          <p><strong>Product Description:</strong> {document.product_description}</p>
          <p><strong>Supplier Name:</strong> {document.supplier_name}</p>
          <p><strong>Supplier id:</strong> {document.supplierid}</p>
          <p><strong>Department:</strong> {document.department ?? 'null'}</p>
          {/* <p><strong>Image url:</strong> {document.image_url}</p> */}
        </div>
      );
    }
  }

  return (
    <main className="main main--details container fluid">
      <div className="card text-center result-container">
        <div className="card-header">
          <ul className="nav nav-tabs card-header-tabs">
            <li className="nav-item"><button className={resultStyle} onClick={() => setTab(0)}>Result</button></li>
            <li className="nav-item"><button className={rawStyle} onClick={() => setTab(1)}>Raw Data</button></li>
          </ul>
        </div>
        {detailsBody}
      </div>
    </main>
  );
}
