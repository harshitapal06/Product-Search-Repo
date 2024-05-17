import React from 'react';
import Result from './Result/Result';
import star_Logo from '../../images/diversity.png'
import "./Results.css";

export default function Results(props) {

  let results = props.documents.map((result, index) => {
    return <Result
      key={index}
      document={result.document}
    />;
  });

  let beginDocNumber = Math.min(props.skip + 1, props.count);
  let endDocNumber = Math.min(props.skip + props.top, props.count);

  // let productDescriptions = results.map(result => result.props.document.product_description);
  // let img = results.map(result => result.props.document.image_url);
  return (
    <div>
      <p className="results-info">Showing {beginDocNumber}-{endDocNumber} of {props.count.toLocaleString()} results</p>
      {/* <div className="row row-cols-md-5 results" style={{border:"2px solid red"}}>
        {results}
      </div> */}
      {/* <div className="results-container" style={{display: "flex", flexDirection: "column",alignItems: "center" }}>
      
        {productDescriptions}
        {results}
      </div> */}
      <div className="results-container">
        {results.map(result => (
          <div key={result.key} style={{ display: "flex", alignItems: "center" }}>
            <img src={result.props.document.image_url} alt="Product" style={{ margin: "0px 10px 20px 0px", width: "200px" }} />
            <div>
              <a href={`/details/${result.props.document.id}`} style={{ fontWeight: "bold", color: "black", display: "block" }}>{result.props.document.product_description}</a>
              {result.props.document.diversity === "1" && (
                <img src={star_Logo} className="star_logo" alt="star" style={{ marginTop: "10px",width:"20px"}} />
              )}
              <div style={{fontSize:"24px",fontWeight:"700"}}>Price: ${result.props.document.price}</div>
              <div>Supplier: {result.props.document.supplier_name}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
