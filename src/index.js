import React from 'react'
import ReactDOM from 'react-dom/client'
// import ReactDOM from 'react-dom'

function App() {
  return (
    <div>
      <h1>xin chao</h1>
      <h1>xin chao</h1>
    </div>
  );
}
//react 17
// ReactDOM.render(<App />, document.getElementById('root'))
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App/>);
