import React from 'react';
import NavBar from './navbar/navbar';
import Gallery from './gallery/gallery';

export default class App extends React.Component {

  constructor() {
    super();
    console.log('initiating App');
  }

  render() {
    return (
      <div className="demo-layout-transparent mdl-layout mdl-js-layout">
        <NavBar />
        <div className="demo-layout-transparent mdl-layout mdl-js-layout">
          <main className="mdl-layout__content">
            <Gallery />
          </main>
        </div>
      </div>);
  }
}

// export default React.createClass({
//   render: () => {
//     return (
//       )
//   }
// });

/*
export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <h1>Hello World</h1>
    );
  }
}
*/
