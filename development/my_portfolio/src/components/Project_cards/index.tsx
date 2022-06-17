import React from "react";
function ProjectCards() {
  return (
    <div >
      {Array.from({ length: 5 }).map((element, i) =>
        <div key={i}>
          <strong>{i}</strong>
        </div>
      )
      }
    </div>
  );
}


export default  ProjectCards
