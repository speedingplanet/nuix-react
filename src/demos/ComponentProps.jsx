/* eslint-disable no-unused-vars */
import BootstrapCard from '../components/BootstrapCard';

export default function ComponentProps() {
  return (
    <section>
      <div className="row">
        <div className="col">
          <BootstrapCard
            title="Component Props"
            headerClasses="bg-primary text-white"
          >
            <PropsContainer
              aString="Hello"
              aNumber={5}
              aBoolean={true}
              anObject={{
                a: 'apple',
                b: 'banana',
              }}
              anArray={[ 1, 2, 3 ]}
            />
          </BootstrapCard>
        </div>
        <div className="col"></div>
      </div>
    </section>
  );
}

function PropsContainer( props ) {
  let styleConfig = {
    backgroundColor: props.aBoolean ? 'green' : 'red',
    color: props.aBoolean ? 'white' : 'red',
  };

  return (
    <ul className="list-group">
      <li className="list-group-item">String: {props.aString}</li>
      <li className="list-group-item">Number: {props.aNumber}</li>
      <li className="list-group-item" style={styleConfig}>
        Boolean: {props.aBoolean ? 'true' : 'false'}
      </li>
      {/* Try removing JSON.stringify to see what you get as a result */}
      <li className="list-group-item">
        Object: {JSON.stringify( props.anObject )}
      </li>
      <li className="list-group-item">Array: {props.anArray}</li>
    </ul>
  );
}

function PropsContainerDestructured( {
  aString,
  aNumber,
  aBoolean,
  anObject,
  anArray,
} ) {
  return (
    <ul className="list-group">
      <li className="list-group-item">String: {aString}</li>
      <li className="list-group-item">Number: {aNumber}</li>
      <li className="list-group-item">Boolean: {aBoolean}</li>
      {/* Try removing JSON.stringify to see what you get as a result */}
      <li className="list-group-item">Object: {JSON.stringify( anObject )}</li>
      <li className="list-group-item">Array: {anArray}</li>
    </ul>
  );
}
