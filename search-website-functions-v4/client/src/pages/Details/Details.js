import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
// import CircularProgress from '@mui/material/CircularProgress';
import axios from 'axios';

import "./Details.css";

export default function Details() {

  let { id } = useParams();
  const [document, setDocument] = useState({});
  // const [showDetails, setShowDetails] = useState(false);
  // const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // setIsLoading(true);
    axios.get('/api/lookup?id=' + id)
      .then(response => {
        console.log(JSON.stringify(response.data))
        const doc = response.data.document;
        setDocument(doc);
        // setIsLoading(false);
      })
      .catch(error => {
        console.log(error);
        // setIsLoading(false);
      });
  }, [id]);

  // const toggleDetails = () => {
  //   setShowDetails(!showDetails);
  // };

  return (
    // <main className="main main--details container fluid">
    //   <div className="card text-center result-container">
    //     <div className="card-header">
    //       <button className="nav-link" onClick={toggleDetails}>Product Details</button>
    //     </div>
    //     <div style={{ border: "2px solid red" }}>
    //       <div className="body-Container">
    //         <div >

    //           <img className="image" src={document.image_url} alt="Product" />
    //         </div>
    //         <div className="product_details" style={{padding:"10px 0px 0px 0px" }}>
    //           <div className="card-title">{document.product_description}</div>
    //         </div>
    //         <div style={{ border: "2px solid red" }}>

    //         </div>
    //       </div>
    //       <div>

    //       </div>
    //       {showDetails && !isLoading && (
    //         <div className="card-body" style={{ border: "2px solid red" }}>
    //           {/* <h5 className="card-title">{document.product_description}</h5> */}
    //           {/* <img className="image" src={document.image_url} alt="Product" /> */}
    //           <p><strong>ID:</strong> {document.id}</p>
    //           <p><strong>Catalog Number:</strong> {document.catalog_number}</p>
    //           <p><strong>Category:</strong> {document.category}</p>
    //           <p><strong>Commodity Code:</strong> {document.commodity_code}</p>
    //           <p><strong>Last Purchase Date:</strong> {document.previous_purchase_date ?? 'null'}</p>
    //           <p><strong>Product Description:</strong> {document.product_description}</p>
    //           <p><strong>Supplier Name:</strong> {document.supplier_name}</p>
    //           <p><strong>Supplier id:</strong> {document.supplierid}</p>
    //           <p><strong>Department:</strong> {document.department ?? 'null'}</p>
    //         </div>
    //       )}
    //     </div>
    //     {isLoading && <CircularProgress />}
    //   </div>
    // </main>
    <main className="main main--details container fluid">
      <div className="product-container">
        {/* <div className="card-header">
          <button className="product_Btn" onClick={toggleDetails}>Product Details</button>
        </div> */}
        {/* {showDetails && !isLoading && ( */}
          <div className="main_Container">
            <div className="product-image">
              {/*  Add an image element here if you have an image for the product */}
              <img className="image" src={document.image_url} alt="Product" style={{width:"200px"}}/>
            </div>
            <div className="product-info">
              <div className="product-name">{document.product_description}</div>
              <div className="last-purchased">
                <div className="detail-purchasedlabel">Last Purchased :</div>
                <div className="detail-purchsedvalue">{document.previous_purchase_date ?? 'null'}</div>
              </div>
              <div className="last-purchased">
                {/* <span className="detail-purchasedlabel">Last Purchased :</span> */}
                <div className="detail-prizevalue">$299</div>
              </div>
              <div className="price">Products Details:</div>
              <div className="product-details" >
                <div>
                  <span className="detail-label">Category</span>
                  <span className="detail-value">{document.category}</span>
                </div>
                <div>
                  <span className="detail-label">Catalog Number</span>
                  <span className="detail-value">{document.catalog_number}</span>
                </div>
                <div>
                  <span className="detail-label">Supplier Name</span>
                  <span className="detail-value">{document.supplier_name}</span>
                </div>
                <div>
                  <span className="detail-label">Supplier Id</span>
                  <span className="detail-value">{document.supplierid}</span>
                </div>
                <div>
                  <span className="detail-label">Department</span>
                  <span className="detail-value">{document.department ?? 'null'}</span>
                </div>
                <div>
                  <span className="detail-label">ID</span>
                  <span className="detail-value">{document.id}</span>
                </div>
                <div>
                  <span className="detail-label">Commodity Code</span>
                  <span className="detail-value">{document.commodity_code}</span>
                </div>
              </div>
              <div className="horizontal_Line">

              </div>
              <div>
                <div className="detail-productLabel">Product Description:</div>
                <div className="detail-Productvalue">{document.product_description}</div>
              </div>
              <div className="button_Container">
                <div>
                  <button className="buy-now">Download Invoice</button>
                </div>
                <div>
                  <button className="buy-now">Invoice History</button>
                </div>
                <div>
                  <button className="buy-now">View Similar Products</button>
                </div>
              </div>
            </div>

          </div>
        {/* )} */}

      </div>
    </main>
  );
}
