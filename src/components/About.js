export default function About(props) {
  return (
    <>
      <div
        className={`container ${
          props.themeMode === "dark" ? "text-light bg-dark" : "text-dark"
        }`}
      >
        <h1>About Us</h1>
        <div className="accordion accordion-flush" id="accordionFlushExample">
          <div
            className={`accordion-item ${
              props.themeMode === "dark" ? "text-light" : "text-dark"
            }`}
          >
            <h2 className="accordion-header" id="flush-headingOne">
              <button
                className={`accordion-button collapsed ${
                  props.themeMode === "dark" ? "text-light bg-dark" : "text-dark"
                }`}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne"
              >
                Accordion Item #1
              </button>
            </h2>
            <div
              id="flush-collapseOne"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingOne"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                Placeholder content for this accordion, which is intended to
                demonstrate the <code>.accordion-flush</code> class. This is the
                first item's accordion body.
              </div>
            </div>
          </div>
          <div
            className={`accordion-item ${
              props.themeMode === "dark" ? "text-light" : "text-dark"
            }`}
          >
            <h2 className="accordion-header" id="flush-headingTwo">
              <button
                className={`accordion-button collapsed ${
                  props.themeMode === "dark" ? "text-light bg-dark" : "text-dark"
                }`}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseTwo"
                aria-expanded="false"
                aria-controls="flush-collapseTwo"
              >
                Accordion Item #2
              </button>
            </h2>
            <div
              id="flush-collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingTwo"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                Placeholder content for this accordion, which is intended to
                demonstrate the <code>.accordion-flush</code> class. This is the
                first item's accordion body.
              </div>
            </div>
          </div>
          <div
            className={`accordion-item ${
              props.themeMode === "dark" ? "text-light" : "text-dark"
            }`}
          >
            <h2 className="accordion-header" id="flush-headingThree">
              <button
                className={`accordion-button collapsed ${
                  props.themeMode === "dark" ? "text-light bg-dark" : "text-dark"
                }`}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseThree"
                aria-expanded="false"
                aria-controls="flush-collapseThree"
              >
                Accordion Item #3
              </button>
            </h2>
            <div
              id="flush-collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingThree"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                Placeholder content for this accordion, which is intended to
                demonstrate the <code>.accordion-flush</code> class. This is the
                first item's accordion body.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
