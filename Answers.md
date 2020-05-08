# Answers

1. What is React JS and what problems does it solve? Support your answer with concepts introduced in class and from your personal research on the web.

    React JS is a JS library that solves the problem of creating interactive UIs easily. It is component based, which means one chunk of code can be reused in multiple places and different chunks of code can be used together to create the UI. React JS components use state, which is data, and they keep track of whether or not the state changes. If the state changes, the component will also change, which makes it interactive. React JS uses a virtual DOM to sense what state has changed, so it only reloads what needs to be reloaded instead of reloading the entire page. React JS is declarative, so we can tell the computer what we want it to do instead of giving it step-by-step instructions of how to do it. This makes the coding easier and faster.

1. Describe component state.

    Component state is data that is created in the component. It can change and the component keeps track of these changes. State is not shared between components, it belongs just to the component it was created in.

1. Describe props.

    Props is data that is passed from a parent component to a child component. Unlike state, props should not change.

1. What are side effects, and how do you sync effects in a React component to changes of certain state or props?

    Side effects are anything that affects the scope outside of its own function. Side effects can be synced to changes in state or props by using a dependency array as a second argument in an effect hook. Listing specific states or props in the dependency array will sync the side effect to those states or props, listing no states or props will cause the side effect to only run once, and not giving a dependency array will cause the side effect to run whenever any state or prop changes.
