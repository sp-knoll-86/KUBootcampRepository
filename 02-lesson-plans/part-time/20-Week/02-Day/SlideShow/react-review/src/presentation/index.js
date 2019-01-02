// Import React
import React from "react";

import ReactDOM from "react-dom";

// Import Playground
import Playground from "component-playground";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import CSS
import "normalize.css";
import "spectacle/lib/themes/default/index.css";

// Import Spectacle Core tags
import {
  Deck,
  Slide,
  Heading,
  Text,
  Image,
  Layout,
  Fill,
  Appear
} from "spectacle";

import { Underline, PlaygroundContainer } from "../custom/components";

import theme from "../custom/theme";

const images = {
  thumbsUp: require("../assets/thumbs-up.gif"),
  react: require("../assets/react.svg"),
  node: require("../assets/node.svg"),
  express: require("../assets/express.png"),
  mongo: require("../assets/mongodb.svg")
};

const snippets = {
  onChange: require("../assets/onchange-snippet"),
  conditional1: require("../assets/conditional1-snippet"),
  conditional2: require("../assets/conditional2-snippet"),
  router: require("../assets/react-router-snippet")
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
            React Review
          </Heading>
        </Slide>
        <Slide bgColor="primary">
          <Heading size={2} textColor="secondary">
            What event listener do we use to capture changes on an input
            element?
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} textColor="secondary">
            onChange!
          </Heading>
          <Underline />
        </Slide>
        <Slide
          transition={["fade"]}
          bgColor="primary"
          notes={`
        <p>This is an interactive example that can be edited live</p>
        <p>Demonstrate how updating the value of the input field also updates the text displayed in the paragraph above</p>
        <p>Make sure everyone understands the role of each of the following and how they relate to eachother:</p>
        <ul>
          <li>onChange</li>
          <li>handleInputChange</li>
          <li>The "name" prop on the input</li>
          <li>The "value" prop on the input</li>
        </ul>
        `}
        >
          <PlaygroundContainer
            codeFontSize=".8rem"
            codeHeight="430px"
            previewHeight="150px"
          >
            <Playground
              codeText={snippets.onChange}
              scope={{ React, ReactDOM }}
              theme={"material"}
              noRender={false}
            />
          </PlaygroundContainer>
        </Slide>
        <Slide bgColor="primary">
          <Heading size={2} textColor="secondary">
            How can we conditionally render elements in React?
          </Heading>
        </Slide>
        <Slide bgColor="primary">
          <Heading size={4} textColor="secondary">
            We can write conditional logic directly inside of JSX curly braces
            using a ternary expression or short circuit operator...
          </Heading>
        </Slide>
        <Slide
          transition={["fade"]}
          bgColor="primary"
          notes={`
        <p>This is an interactive example that can be edited live</p>
        <p>Demonstrate how the ternary expression returns one value if "this.state.count" is even and another if it is odd.</p>
        <p>Explain that only expressions can be embedded inside of JSX curly braces, so if/else statements can't be used directly inside of them.</p>
        <p>A ternary expression is like a short-hand if/else statement.</p>
        `}
        >
          <PlaygroundContainer
            codeFontSize=".8rem"
            codeHeight="320px"
            previewHeight="210px"
          >
            <Playground
              codeText={snippets.conditional1}
              scope={{ React, ReactDOM }}
              theme={"material"}
              noRender={false}
            />
          </PlaygroundContainer>
        </Slide>
        <Slide bgColor="primary">
          <Heading size={4} textColor="secondary">
            We can also write conditional logic inside of a function which we
            run inside of JSX curly braces...
          </Heading>
        </Slide>
        <Slide
          transition={["fade"]}
          bgColor="primary"
          notes={`
        <p>This is an interactive example that can be edited live</p>
        <p>Demonstrate how we can also define a function which conditionally returns a value and call that inside of JSX curly braces.</p>
        <p>Explain that inside of this function's definition, we can use if/else statements or any other JavaScript syntax we wish.</p>
        <p>This can be useful for when we want to perform more complex conditional logic and don't want to clutter the render method with this logic.</p>
        `}
        >
          <PlaygroundContainer
            codeFontSize=".8rem"
            codeHeight="420px"
            previewHeight="210px"
          >
            <Playground
              codeText={snippets.conditional2}
              scope={{ React, ReactDOM }}
              theme={"material"}
              noRender={false}
            />
          </PlaygroundContainer>
        </Slide>
        <Slide bgColor="primary">
          <Heading size={2} textColor="secondary">
            What library do we use to handle routing with React?
          </Heading>
        </Slide>
        <Slide bgColor="primary">
          <Heading size={2} textColor="secondary">
            React Router!
          </Heading>
          <Underline />
        </Slide>
        <Slide
          transition={["fade"]}
          bgColor="primary"
          notes={`
        <p>This is an interactive example that can be edited live</p>
        <p>Demonstrate how we can conditionally render components base on pathname with React Router.</p>
        <p>Click each link and demonstrate how a different component is rendered depending on the pathname.</p>
        <p>Make sure everyone understands the function of the following:</p>
        <ul>
          <li>The Link component</li>
          <li>The Route component</li>
          <li>The "path" prop on the Route component</li>
          <li>The "exact" prop on the Route component</li>
        </ul>
        `}
        >
          <PlaygroundContainer
            codeFontSize=".8rem"
            codeHeight="310px"
            previewHeight="180px"
            previewStyles={`
              ul {
                margin: 0;
              }

              li {
                text-align: left;
                font-size: 14pt;
              }

              h1 {
                margin: 0;
              }
            `}
          >
            <Playground
              codeText={snippets.router}
              scope={{ React, ReactDOM, Router, Route, Link }}
              theme={"material"}
              noRender={false}
            />
          </PlaygroundContainer>
        </Slide>
        <Slide bgColor="primary">
          <Heading size={3} textColor="secondary">
            What else do I need to learn about React?
          </Heading>
        </Slide>
        <Slide
          bgColor="primary"
          notes={`
        <p>At this point, we've covered the most important aspects of the React library</p>
        <p>Students should be skilled enough now to build apps with React independently</p>
        <p>Anything they don't understand, they should be able to look up in the documentation or search/ask for on stackoverflow</p>
        <p>After a certain point, tutorials, walkthoughs, video guides, all become ineffective</p>
        <p>Hands down, the best way to really learn a technology is to build something with it</p>
        <p>Between class this week, the homework assignment, and final projects, students are really about to level up their skills even further</p>
        `}
        >
          <Heading size={2} textColor="secondary">
            Not much, really.
          </Heading>
          <Appear>
            <Text>
              At this point, we've covered most of what you'll do with React
              most of the time.
            </Text>
          </Appear>
          <Appear>
            <Text>
              The most important thing to do now is to continue practicing.
            </Text>
          </Appear>
          <Appear>
            <Text>
              Build new things, work to solve unfamiliar problems, solve
              familiar problems in new ways.
            </Text>
          </Appear>
        </Slide>
        <Slide bgColor="primary">
          <Heading size={3} textColor="secondary">
            You Got This
          </Heading>
          <Image width="70%" src={images.thumbsUp} />
        </Slide>
        <Slide bgColor="primary">
          <Heading size={2} textColor="secondary">
            So... what IS next?
          </Heading>
        </Slide>
        <Slide
          bgColor="primary"
          notes={`
        <p>Remind everyone that React is a front-end library.</p>
        <p>It isn't concerned with databases or what happens on the server.</p>
        <p>In today's class we'll use React with node, express, and mongodb.</p>
        <p>It should serve to prepare them for the homework assignment as well as final projects.</p>
        <p>Avoid going too in depth right now, but answer any high level questions. We'll dive into coding soon enough.</p>
        `}
        >
          <Heading size={6} textColor="secondary">
            Building Full Stack Apps With React
          </Heading>
          <Layout>
            <Fill>
              <Image width="100%" src={images.react} />
            </Fill>
            <Fill>
              <Image
                width="100%"
                style={{ display: "inline-block", marginTop: "20%" }}
                src={images.node}
              />
            </Fill>
          </Layout>
          <Layout>
            <Fill>
              <Image
                width="100%"
                style={{ display: "inline-block", marginTop: "15%" }}
                src={images.express}
              />
            </Fill>
            <Fill>
              <Image width="100%" src={images.mongo} />
            </Fill>
          </Layout>
        </Slide>
        <Slide bgColor="primary">
          <Heading textAlign="left" size={2} textColor="secondary">
            Questions?
          </Heading>
          <Underline />
        </Slide>
        <Slide transition={["zoom"]} bgColor="tertiary">
          <Heading size={1} fit caps lineHeight={1} textColor="primary">
            Time to Code!
          </Heading>
        </Slide>
      </Deck>
    );
  }
}

export default Presentation;
