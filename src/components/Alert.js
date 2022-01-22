import React from "react";

function Alert() {
  return (
    <>
     <div className="alert alert-primary alert-dismissible fade show" role="alert">
         <button type="button" className="close" data-dismiss="alert" aria-label="Close">
             <span aria-hidden="true">&times;</span>
             <span className="sr-only">Close</span>
         </button>
         <strong>Holy guacamole!</strong> You should check in on some of those fields below.
     </div>
    </>
  );
}

export default Alert;
