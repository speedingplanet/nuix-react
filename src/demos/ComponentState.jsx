import React, { useState } from 'react';
import BootstrapCard from '../components/BootstrapCard';

export default function ComponentState() {
  const [ counter, setCounter ] = useState( 0 );

  return (
    <section>
      <div className="row">
        <div className="col">
          <BootstrapCard title="Component State" bodyClasses="text-center">
            <p>{counter}</p>
            <button
              className="btn btn-primary"
              onClick={() => setCounter( counter + 1 )}
            >
              Increment the counter
            </button>
          </BootstrapCard>
        </div>
      </div>
    </section>
  );
}
