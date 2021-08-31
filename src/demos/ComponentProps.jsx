/* eslint-disable no-unused-vars */
import { useState } from 'react';
import BootstrapCard from '../components/BootstrapCard';

export default function ComponentProps() {
  const [ counter, setCounter ] = useState( 0 );
  return (
    <section>
      <div className="row">
        <div className="col">
          <BootstrapCard title="Component Props" bodyClasses="text-center">
            <DisplayValueDestructured foo={counter} />
            <button
              className="btn btn-primary"
              onClick={() => setCounter( counter + 1 )}
            >
              Increment
            </button>
          </BootstrapCard>
        </div>
      </div>
    </section>
  );
}

function DisplayValue( props ) {
  return <p>{props.foo}</p>;
}

function DisplayValueDestructured( { foo } ) {
  return <p>{foo}</p>;
}

function DisplayValueInline( props ) {
  return <p>{props.foo}</p>;
}
