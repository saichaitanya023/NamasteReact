 import React from "react";
 import ReactDOM from "react-dom/client"
 const heading =React.createElement("h1",{},"hello world");
    const root =ReactDOM.createRoot(document.getElementById("root"));
    root.render(heading);

const parent=React.createElement("div",{id:"parent"},
    React.createElement("div",{id:"child"},[React.createElement("h1",{},"hello it is h1"),React.createElement("h2",{},
        "hello second tag"
    )])

   
)
//it is a jsx code it is html like structure not html 
//here below code is converted into the react code like React.createElement()
//Here the transfilation is done by the babel means convertion of jsx into react which is understandable by the js engine
const jsxheading=<h1>Hello hi all welcome</h1>;


//React component
//writing the functional component without using the return statement
//we use the parenthesis
const Title =()=>(
     <h1>welcome to sai world</h1>
);
//Example of the react composition
const InnerMatter =()=>{
    return <div className="container">
        <Title/> 
        <h1>welcome once again</h1>
    </div>
}
//root.render(<InnerMatter/>)



//different ways of writing 

//writing the react element inside the react component 

//react element
const hello =(
    <h1>React Element</h1>
)

//react component 

const Com =()=>{
    return <div id="compon">
        {hello}
        <h1>what is the fuck is that?</h1>

    </div>
}

root.render(<Com/>)

//now writing the react component inside the react element
const Com1 =()=>{
    return <div id="compon">
        <h1>what is the fuck is that?</h1>

    </div>
};
const hello1 =(
    
    <h1>
        <Com1/>React Element</h1>
);

root.render(hello1);


//now writing the functional component inside the functional component 

const Hello =()=> (
    <h1>React Element</h1>
)

const Com2 =()=>{
    return <div id="compon">
        <Hello/>
        {Hello()}
        <Hello></Hello>
        <h1>what is the fuck is that?</h1>

    </div>
};
root.render(<Com2/>)
//root.render(jsxheading);
 //root.render(parent)