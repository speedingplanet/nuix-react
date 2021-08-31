import React from 'react';
import BootstrapCard from '../components/BootstrapCard';

export default function EventHandling() {
  const handleButtonClick = ( event ) => {
    console.log( 'You clicked on the button' );
    console.log( 'Event: ', event );
    console.log( 'event.target: ', event.target );
  };

  // eslint-disable-next-line no-unused-vars
  function logEvent( message ) {
    console.log( 'Click happened: ', message );
  }

  return (
    <section>
      <div className="row mb-2">
        <div className="col">
          <div className="card">
            <div className="card-header">
              <h4>Separate event handler</h4>
            </div>
            <div className="card-body text-center">
              <button className="btn btn-primary" onClick={handleButtonClick}>
                Click me
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="card">
            <div className="card-header">
              <h4>Inline event handler</h4>
            </div>
            <div className="card-body text-center">
              <button
                className="btn btn-warning"
                onClick={() => console.log( 'Inline event handler' )}
                // onClick={() => logEvent( 'inline function' )}
              >
                Click me
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <BootstrapCard
            className="mt-2"
            title="Using the new BootstrapCard component"
            bodyClasses="text-center"
          >
            <button
              className="btn btn-danger"
              onClick={() => console.log( 'Bootstrap Card component works!' )}
            >
              Click me
            </button>
          </BootstrapCard>
        </div>
      </div>
    </section>
  );
}
