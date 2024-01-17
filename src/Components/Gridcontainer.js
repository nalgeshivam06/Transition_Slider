import React from 'react';

const GridContainer = () => {
  // Calculate the number of columns based on the length of the JSON array
  const jsonData = [
    { id: 1, name: 'Item 1' , info : 'lorem10jgbjnvknvkvem' , processor : 'i5' , price : '150000' },
    { id: 2, name: 'Item 2' , info : 'lorem10jgbjnvknvkvem' , processor : 'i5' , price : '150000' },
    { id: 3, name: 'Item 3' , info : 'lorem10jgbjnvknvkvem' , processor : 'i5' , price : '150000' },
  ];
  const numberOfColumns = jsonData.length === 3 ? 3 : 2;

  // Define the styles for the grid container
  const gridContainerStyles = {
    width: '700px',
    display: 'grid',
    gridTemplateColumns: `repeat(${numberOfColumns}, 1fr)`,
    margin:'auto',
    padding: '16px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  };

  return (
    <div style={gridContainerStyles}>
      {jsonData.map((item, index) => (
        <div key={index}>
          <div>
          <h1>{item.name}</h1>
          <p>{item.info}</p>
          </div>
          <div>
          <h2><b>Processor : </b></h2>
          <p>{item.processor}</p>
          </div>
          <div>
          <svg fill="#000000" width="78px" height="78px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M14,9H10a1,1,0,0,0-1,1v4a1,1,0,0,0,1,1h4a1,1,0,0,0,1-1V10A1,1,0,0,0,14,9Zm-1,4H11V11h2Zm8,0a1,1,0,0,0,0-2H19V9h2a1,1,0,0,0,0-2H18.82A3,3,0,0,0,17,5.18V3a1,1,0,0,0-2,0V5H13V3a1,1,0,0,0-2,0V5H9V3A1,1,0,0,0,7,3V5.18A3,3,0,0,0,5.18,7H3A1,1,0,0,0,3,9H5v2H3a1,1,0,0,0,0,2H5v2H3a1,1,0,0,0,0,2H5.18A3,3,0,0,0,7,18.82V21a1,1,0,0,0,2,0V19h2v2a1,1,0,0,0,2,0V19h2v2a1,1,0,0,0,2,0V18.82A3,3,0,0,0,18.82,17H21a1,1,0,0,0,0-2H19V13Zm-4,3a1,1,0,0,1-1,1H8a1,1,0,0,1-1-1V8A1,1,0,0,1,8,7h8a1,1,0,0,1,1,1Z"></path></g></svg>
          <p>Apple M1 Chip</p>
          </div>
          {/* Render your JSON data here */}
          {/* You can access the properties of each object using item.propertyName */}
        </div>
      ))}
    </div>
  );
};

export default GridContainer;
