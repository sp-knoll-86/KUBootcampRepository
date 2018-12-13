// Import React
import React from "react";
import ReactDOM from "react-dom";

// Import Playground
import Playground from "component-playground";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import Bootstrap (for the playground demo)
import "bootstrap/dist/css/bootstrap.min.css";
// Import CSS
import "normalize.css";
import "spectacle/lib/themes/default/index.css";

// Import Spectacle Core tags
import {
  Deck,
  Slide,
  Heading,
  ListItem,
  List,
  Text,
  Image,
  Appear,
  Layout,
  Fill,
  S
} from "spectacle";

import { Underline, ResetCSS, PlaygroundContainer } from "../custom/components";

import theme from "../custom/theme";

const images = {
  comptree: require("../assets/comptree.svg"),
  compExample: require("../assets/component-example.png")
};

const snippets = {
  jsxCurly: require("../assets/jsx-curly-snippet"),
  navbar: require("../assets/navbar-snippet"),
  props: require("../assets/props-snippet"),
  css: require("../assets/css-snippet")
};

preloader(images);

class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={["zoom", "slide"]}
        transitionDuration={500}
        theme={theme}
        progress="bar"
      >
        <Slide transition={["zoom"]} bgColor="tertiary">
          <Heading size={1} fit caps lineHeight={1} textColor="primary">
            React Recap
          </Heading>
        </Slide>
        <Slide bgColor="primary">
          <Heading size={2} textColor="secondary">
            What are the "building blocks" of a React application?
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="secondary">
          <Heading size={1} textColor="secondary">
            Components!
          </Heading>
          <Underline />
        </Slide>
        <Slide
          align="center flex-start"
          transition={["zoom"]}
          bgColor="primary"
          textColor="secondary"
        >
          <Heading textAlign="left" size={3} textColor="secondary">
            Components
          </Heading>
          <Underline />
          <List>
            <ListItem>
              <span style={{ fontSize: "27pt" }}>
                <S type="bold">Components</S> allow us to split the UI of our
                application into independent reusable pieces, and think about
                each piece in isolation.
              </span>
            </ListItem>
            <Appear>
              <ListItem>
                <span style={{ fontSize: "27pt" }}>
                  <S type="bold">Components</S> are JavaScript functions which
                  return the part of an application’s UI.
                </span>
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                <span style={{ fontSize: "27pt" }}>
                  We organize our <S type="bold">components</S> into a tree
                  structure, just like HTML elements in the DOM.
                </span>
              </ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide
          notes={`
        <p>Explain that each node represents a React component. Similar to the HTML elements in the DOM, React components are organized into a tree structure. i.e. we have one root component, App, and other components nested inside of it.</p>
        `}
          transition={["fade"]}
          bgColor="primary"
        >
          <Image width="75%" src={images.comptree} />
        </Slide>
        <Slide
          align="center flex-start"
          transition={["fade"]}
          bgColor="primary"
          textColor="secondary"
        >
          <Heading textAlign="left" size={4} textColor="secondary">
            The Power of Components!
          </Heading>
          <Underline />
          <Layout>
            <Fill>
              <Text textAlign="left" size={6} textColor="secondary">
                <S type="bold">By separating elements out into components...</S>
              </Text>
              <List>
                <ListItem
                  style={{
                    fontSize: "18.5pt"
                  }}
                >
                  Layout and logic are kept bundled together in a self-contained
                  package.
                </ListItem>
                <ListItem
                  style={{
                    fontSize: "18.5pt"
                  }}
                >
                  Components can easily be re-used in various points in the
                  application without needing to be re-coded.
                </ListItem>
                <ListItem
                  style={{
                    fontSize: "18.5pt"
                  }}
                >
                  Components can be more easily tested. (e.g. having one
                  re-usable component means only one UI element needs to be
                  tested).
                </ListItem>
              </List>
            </Fill>
            <Fill>
              <Image style={{ width: "100%" }} src={images.compExample} />
            </Fill>
          </Layout>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="secondary">
          <Heading size={3} textColor="secondary">
            What is the name of the HTML-like markup syntax we use to describe
            the UI our components should produce?
          </Heading>
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary" textColor="secondary">
          <Heading size={1} textColor="secondary">
            JSX!
          </Heading>
          <Underline />
        </Slide>
        <Slide
          align="center flex-start"
          transition={["zoom"]}
          bgColor="primary"
          textColor="secondary"
        >
          <Heading textAlign="left" size={3} textColor="secondary">
            JSX
          </Heading>
          <Underline />
          <List>
            <ListItem>
              <span style={{ fontSize: "29pt" }}>
                <S type="bold">JSX</S> is a preprocessor step that adds XML
                syntax to JavaScript. You can definitely use React without JSX
                but JSX makes React a lot more elegant.
              </span>
            </ListItem>
            <Appear>
              <ListItem>
                <span style={{ fontSize: "29pt" }}>
                  While <S type="bold">JSX</S> may look like HTML, there are a
                  few gotchas to be aware of. React’s documentation does a great
                  job of listing these.
                </span>
              </ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide
          notes={`
          <div style="font-size: 1rem;">
            <p>Point out the following:</p>
            <ul>
              <li>
              We're using "className" instead of "class" as the latter is a reserved word in JavaScript.
              </li>
              <li>
              We close all tags with a sibling tag, or with a self closing forward slash &mdash; point out the input element.
              </li>
              <li>
              We contain all of our returned JSX within a single parent tag. The same way we can only return one value from a function, our components can only return one root JSX element, though it can contain other JSX tags inside of it.
              </li>
            </ul>
            <p>Take another moment to answer any questions. This slide is interactive, so you can update the code and watch the rendered component change live</p>
          </div>
        `}
          transition={["fade"]}
          bgColor="primary"
          textColor="secondary"
        >
          <Heading size={6}>Live Demo</Heading>
          <ResetCSS>
            <PlaygroundContainer
              codeFontSize=".8rem"
              codeHeight="500px"
              previewHeight="60px"
            >
              <Playground
                codeText={snippets.navbar}
                scope={{ React, ReactDOM }}
                theme={"material"}
                noRender={false}
              />
            </PlaygroundContainer>
          </ResetCSS>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="secondary">
          <Heading size={2} textColor="secondary">
            How can we embed JavaScript expressions/values inside of JSX?
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="secondary">
          <Heading size={2} textColor="secondary">
            JSX Curly Braces!
          </Heading>
          <Underline />
        </Slide>
        <Slide
          align="center flex-start"
          transition={["zoom"]}
          bgColor="primary"
          textColor="secondary"
        >
          <Heading textAlign="left" size={3} textColor="secondary">
            JSX Curly Braces
          </Heading>
          <Underline />
          <List>
            <ListItem>
              <S type="bold">JSX curly braces {"{}"}</S> can use used inside of
              JSX code in order to embed JavaScript expressions.
            </ListItem>
            <Appear>
              <ListItem>
                <S type="bold">JSX curly braces {"{}"}</S> can be compared to
                the double curly braces {"{{}}"} in Handlebars.
              </ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide
          notes={`
          <div style="font-size: 1.8rem;">
            <p>Point out how we can use JSX curly braces to embed an expression inside of our JSX code</p>
            <p>In order to check for understanding, ask the class: what would this component would render?</p>
          </div>
        `}
          transition={["fade"]}
          bgColor="primary"
        >
          <Heading size={6}>Live Demo</Heading>
          <ResetCSS>
            <PlaygroundContainer codeHeight="150px" previewHeight="100px">
              <Playground
                codeText={snippets.jsxCurly}
                scope={{ React, ReactDOM }}
                theme={"material"}
                noRender={false}
              />
            </PlaygroundContainer>
          </ResetCSS>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="secondary">
          <Heading size={2} textColor="secondary">
            What library and method do we use to render our application’s root
            component to the DOM?
          </Heading>
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary" textColor="secondary">
          <Heading fit size={1} textColor="secondary">
            ReactDOM.render
          </Heading>
          <Underline />
          <List>
            <ListItem>
              <S type="bold">ReactDOM</S> is a library separate from React with
              methods for working with the DOM.
            </ListItem>
            <Appear>
              <ListItem>
                <S type="bold">ReactDOM.render()</S> renders a single root
                component to the Virtual DOM, and then the real HTML DOM. We
                typically call this method only once per React application.
              </ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="secondary">
          <Heading textAlign="left" size={1} textColor="secondary">
            Questions?
          </Heading>
          <Underline />
        </Slide>
        <Slide bgColor="tertiary">
          <Heading size={1} fit caps lineHeight={1} textColor="primary">
            Time to Code!
          </Heading>
        </Slide>
      </Deck>
    );
  }
}

export default Presentation;
