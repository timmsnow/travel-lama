import React from 'react';
import Card from 'react-bootstrap/Card';


function Top5(props) {
  
    return(
      <div>
       <h2>The Top 5</h2>
       <div className="top5-container">
         {
          props.top5.map(i=> {
            return(
              <Card key={i.id} className="top5-card">
                <p>{i.name}</p>
              </Card>
            )
          })
         }
        </div>
      </div>
      );
}
export default Top5;