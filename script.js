var h1 = React.createElement('h1',null,"Hello From React")

var parent = document.querySelector("#parent")

var root = ReactDOM.createRoot(parent)

root.render(h1)