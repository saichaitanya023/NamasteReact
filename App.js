 const heading =React.createElement("h1",{},"hello world");
    const root =ReactDOM.createRoot(document.getElementById("root"));
    root.render(heading);

const parent=React.createElement("div",{id:"parent"},
    React.createElement("div",{id:"child"},[React.createElement("h1",{},"hello it is h1"),React.createElement("h2",{},
        "hello second tag"
    )])

   
)

 root.render(parent)