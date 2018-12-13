// Import React
import React from "react";

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
  ListItem,
  List,
  Text,
  Image,
  Layout,
  Fill,
  S,
  BlockQuote,
  Quote,
  Cite
} from "spectacle";

import { Underline } from "../custom/components";

import theme from "../custom/theme";

const images = {
  compExample: require("../assets/component-example.png"),
  confusion: require("../assets/confusion.jpg"),
  dumb: require("../assets/dumb.jpg"),
  spoon: require("../assets/spoon.jpg"),
  messy: require("../assets/messy.jpg"),
  react: require("../assets/react.jpg"),
  facebook: require("../assets/facebook.jpg"),
  compare: require("../assets/compare.jpg"),
  jquerydom: require("../assets/jquerydom.svg"),
  virtualdom: require("../assets/virtualdom.svg"),
  wat: require("../assets/wat.jpg"),
  webpack: require("../assets/webpack.png"),
  babel: require("../assets/babel.png"),
  vdom: require("../assets/vdom.jpg")
};

preloader(images);

class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme} progress="bar">
        <Slide transition={["zoom"]} bgColor="tertiary">
          <Heading size={1} fit caps lineHeight={1} textColor="primary">
            React Gently
          </Heading>
        </Slide>
        <Slide bgColor="primary">
          <Heading fit size={2} textColor="secondary">
            Welcome to ReactJS!!!
          </Heading>
          <Underline />
        </Slide>
        <Slide align="center flex-start" transition={["fade"]} bgColor="primary">
          <Heading textAlign="left" size={6} textColor="secondary">
            Note: This will not be you.
          </Heading>
          <Underline />
          <Image style={{ marginTop: "10vh", width: "70%" }} src={images.spoon} />
          <Text style={{ fontSize: "2.44rem" }}>
            Do not treat this class as a “spoon feeding” session.
          </Text>
        </Slide>
        <Slide align="center flex-start" transition={["fade"]} bgColor="primary">
          <Heading textAlign="left" size={6} textColor="secondary">
            Note: This will be you.
          </Heading>
          <Underline />
          <Image style={{ marginTop: "8vh", width: "70%" }} src={images.messy} />
          <Text style={{ fontSize: "2.44rem" }}>
            Instead, it’s meant to be an immersion and exposure.
          </Text>
        </Slide>
        <Slide align="center flex-start" transition={["fade"]} bgColor="primary">
          <Heading textAlign="left" size={6} textColor="secondary">
            Expectations...
          </Heading>
          <Underline />
          <Heading size={3} style={{ marginTop: "12vh" }}>
            Learning React Can Be <S type="underline">Tough</S>
          </Heading>
          <br />
          <Heading size={6} fit>
            It’s a huge mindset shift when it comes to building applications.
          </Heading>
        </Slide>
        <Slide align="center flex-start" transition={["fade"]} bgColor="primary">
          <Heading textAlign="left" size={6} textColor="secondary">
            Expectations...
          </Heading>
          <Underline />
          <Heading size={3} style={{ marginTop: "12vh" }}>
            You're Going to Need to Practice
          </Heading>
          <br />
          <Heading size={5}>
            <S type="underline">A Lot.</S>
          </Heading>
        </Slide>
        <Slide align="center flex-start" transition={["fade"]} bgColor="primary">
          <Heading textAlign="left" size={6} textColor="secondary">
            Expectations...
          </Heading>
          <Underline />
          <Heading size={3} style={{ marginTop: "12vh" }}>
            But In The End It’s Worth It
          </Heading>
          <br />
          <Heading size={5}>
            React is one of the most powerful, in demand front end JavaScript libraries today.
          </Heading>
        </Slide>
        <Slide align="center flex-start" transition={["fade"]} bgColor="primary">
          <Heading textAlign="left" size={6} textColor="secondary">
            Expectations...
          </Heading>
          <Underline />
          <Heading size={4} style={{ marginTop: "12vh" }}>
            Just About Every Popular UI Library That Came After React Borrows From It
          </Heading>
          <br />
          <Heading size={6}>
            Libraries are like fads. They’ll always come and go in popularity, but the ideas
            introduced by React appear to be here to stay.
          </Heading>
        </Slide>
        <Slide align="center flex-start" transition={["fade"]} bgColor="primary">
          <Heading textAlign="left" size={6} textColor="secondary">
            So... What is React?
          </Heading>
          <Underline />
          <List style={{ marginTop: "12vh" }}>
            <ListItem style={{ fontSize: "27pt" }}>
              An open-source JavaScript library developed at Facebook specifically for the task of
              developing user interfaces.
            </ListItem>
            <ListItem style={{ fontSize: "27pt", marginTop: 10 }}>
              Developed for the purpose of building large apps with rapidly changing data.
            </ListItem>
            <ListItem style={{ fontSize: "27pt", marginTop: 10 }}>
              Relies on a component-based architecture. Elements of the UI are broken into
              self-contained components.
            </ListItem>
            <Image style={{ float: "right" }} src={images.react} />
          </List>
        </Slide>
        <Slide
          align="center flex-start"
          transition={["fade"]}
          bgColor="primary"
          notes={`
          <p>Facebook is a massive web application. React was created to more easily have Facebook's UI to reactively update in response to state changes. E.g. a new friend request, new message, new post of the news feed, all can trigger multiple UI updates. This was difficult to manage in a reliable and performant way.</p>
          <p>Today, Facebook has over 30,000 React components.</p>
        `}
        >
          <Heading textAlign="left" size={6} textColor="secondary">
            Facebook's UI Complexities
          </Heading>
          <Underline />
          <Image style={{ marginTop: "10vh", width: "80%" }} src={images.facebook} />
          <Text style={{ fontSize: "16pt" }}>
            Facebook’s website buzzes with interactive options, live-updating data, and tightly
            interacting elements. This poses a challenge to simple DOM manipulation strategies.
          </Text>
        </Slide>
        <Slide
          align="center flex-start"
          transition={["fade"]}
          bgColor="primary"
          notes={`
          <p>The most important takeaway here is that React encourages creating and building with components.</p>
          <p>Components are self-contained modules that describe the UI that should be produced by it.</p>
          <p>We could, for example, have a component for a navbar or button that we define once and use multiple times across a project.</p>
        `}
        >
          <Heading textAlign="left" size={6} textColor="secondary">
            The Concept of Components
          </Heading>
          <Underline />
          <Image style={{ marginTop: "4vh", width: "80%" }} src={images.compExample} />
          <Text style={{ fontSize: "16pt" }}>
            Using React, UI elements are broken down into re-usable components. Each sub-component
            behaves in a way that it is fully contained.
          </Text>
        </Slide>
        <Slide align="center flex-start" transition={["fade"]} bgColor="primary">
          <Heading textAlign="left" size={6} textColor="secondary">
            The Power of Components
          </Heading>
          <Underline />
          <Layout style={{ marginTop: "13vh" }}>
            <Fill>
              <Text style={{ fontSize: "22pt", textAlign: "left" }}>
                Why Separate UI Elements Into Components?
              </Text>
              <List>
                <ListItem style={{ fontSize: "18pt", marginTop: 5 }}>
                  Components allow us to logically decompose a UI into different parts
                </ListItem>
                <ListItem style={{ fontSize: "18pt", marginTop: 5 }}>
                  They allow us to easily re-use these parts without re-coding
                </ListItem>
                <ListItem style={{ fontSize: "18pt", marginTop: 5 }}>
                  Component-based applications are easier to test
                </ListItem>
                <ListItem style={{ fontSize: "18pt" }}>
                  All of this can help us find bugs and save time
                </ListItem>
              </List>
            </Fill>
            <Fill>
              <Image src={images.compExample} width="100%" />
            </Fill>
          </Layout>
        </Slide>
        <Slide bgColor="primary">
          <Heading fit size={2} textColor="secondary">
            Data Shifting Applications
          </Heading>
          <Underline />
        </Slide>
        <Slide
          align="center flex-start"
          transition={["fade"]}
          bgColor="primary"
          notes={`
          <p>If necessary, take a few minutes to make sure everyone understands what the DOM is.</p>
          <p>Example: The Document Object Model (DOM) is a programming API for HTML documents. In the past, whenever we've manipulated a webpage using JavaScript or jQuery, we've done so by modifying the DOM.</p>
          <p>It's the model or data that web browsers use to represent the what should be rendered.</p>
        `}
        >
          <Heading textAlign="left" size={6} textColor="secondary">
            How’s This Different Than jQuery?
          </Heading>
          <Underline />
          <Layout style={{ marginTop: "8vh" }}>
            <Fill style={{ flex: 2 }}>
              <Image src={images.compare} />
            </Fill>
            <Fill style={{ flex: 1 }}>
              <List>
                <ListItem style={{ fontSize: "14pt" }}>
                  <S type="bold">
                    In jQuery, our application’s state and UI are updated independently of each
                    other.
                  </S>{" "}
                  Without an organization structure, code quickly becomes a series of erratic DOM
                  manipulations.
                </ListItem>
                <ListItem style={{ fontSize: "14pt", marginTop: 38 }}>
                  In contrast, when working with React, we never update the DOM ourselves. Instead,
                  whenever some part of our application’s state changes, React efficiently updates
                  the DOM for us to reflect this.{" "}
                  <S type="bold">Our application’s UI is a pure function of its state.</S>
                </ListItem>
              </List>
            </Fill>
          </Layout>
        </Slide>
        <Slide align="center flex-start" transition={["fade"]} bgColor="primary">
          <Heading textAlign="left" size={6} textColor="secondary">
            Rapid Data Changes: Option #1 jQuery
          </Heading>
          <Underline />
          <Image style={{ width: "70%" }} src={images.jquerydom} />
          <Heading size={5}>JavaScript is FAST</Heading>
          <Text style={{ marginTop: 20, fontSize: "1.6rem" }}>
            But whenever we update the DOM, the browser needs to recalculate the CSS, update the
            layout, and repaint the web page...
          </Text>
          <Text style={{ marginTop: 20, fontSize: "1.6rem" }}>
            This can be a slow process in comparison
          </Text>
        </Slide>
        <Slide align="center flex-start" transition={["fade"]} bgColor="primary">
          <Heading textAlign="left" size={6} textColor="secondary">
            Rapid Data Changes: Option #2 React
          </Heading>
          <Underline />
          <Image style={{ width: "70%" }} src={images.virtualdom} />
          <Text style={{ fontSize: "2.44rem" }}>
            React’s Virtual DOM serves as an intermediary and avoids unnecessary trips to the DOM
          </Text>
        </Slide>
        <Slide align="center flex-start" transition={["fade"]} bgColor="primary">
          <Heading textAlign="left" size={6} textColor="secondary">
            Virtual DOM
          </Heading>
          <Underline />
          <Image style={{ marginTop: "3vh", width: "70%" }} src={images.wat} />
          <Heading size={6}>WAT?</Heading>
        </Slide>
        <Slide
          align="center flex-start"
          transition={["fade"]}
          bgColor="primary"
          notes={`
          <p>Students should understand the basic concept of the Virtual DOM, but don't need to concern themselves with it any further than that.</p>
          <p>What should be highlighted are the benefits of a Virtual DOM.</p>
          <p>Our React applications are fast and performant out of the box.</p>
          <p>We don't need to worry about explicitly updating the DOM ourselves. React looks at our components and does all of the work of figuring out how they should be rendered and updated.</p>
        `}
        >
          <Heading textAlign="left" size={6} textColor="secondary">
            Virtual DOM
          </Heading>
          <Underline />
          <Image style={{ marginTop: "3vh" }} src={images.vdom} />
          <Text style={{ fontSize: "2.22rem", marginTop: 15 }}>
            Essentially it’s a JavaScript object that models the real DOM. Whenever some part of our
            application’s state changes, the Virtual DOM receives the UI updates first. Then the
            Virtual DOM is compared to the real DOM, which React aims to update with the smallest
            number of changes.
          </Text>
        </Slide>
        <Slide align="center flex-start" transition={["fade"]} bgColor="primary">
          <Heading textAlign="left" size={6} textColor="secondary">
            Pros and Cons of React
          </Heading>
          <Underline />
          <Layout>
            <Fill style={{ padding: 10 }}>
              <S type="underline">
                <Text textAlign="center">Pros</Text>
              </S>
              <List>
                <ListItem style={{ fontSize: "1.44rem" }}>
                  A component-based architecture encourages us to break our application's UI into
                  reusable components, allowing us to build more quickly through code reuse
                </ListItem>
                <ListItem style={{ fontSize: "1.44rem", marginTop: 10 }}>
                  Our application's UI reactively updates in response to changes to its state,
                  reducing the amount of DOM manipulation code we need to write ourselves
                </ListItem>
                <ListItem style={{ fontSize: "1.44rem", marginTop: 10 }}>
                  Can be be used to build applications on the web, on the server, and in native
                  applications
                </ListItem>
                <ListItem style={{ fontSize: "1.44rem", marginTop: 10 }}>
                  Arguably easier to learn and more popular than other competing front-end
                  JavaScript libraries and frameworks
                </ListItem>
              </List>
            </Fill>
            <Fill style={{ padding: 10 }}>
              <S type="underline">
                <Text textAlign="center">Cons</Text>
              </S>
              <List>
                <ListItem style={{ fontSize: "1.44rem" }}>
                  React is just a view library concerned with rendering user interfaces. We'll have
                  to pull in other libraries to accomplish things such as HTTP requests
                </ListItem>
                <ListItem style={{ fontSize: "1.44rem", marginTop: 10 }}>
                  Setting up React can require more configuration than other libraries
                </ListItem>
              </List>
            </Fill>
          </Layout>
        </Slide>
        <Slide align="center flex-start" transition={["fade"]} bgColor="primary">
          <Heading textAlign="left" size={6} textColor="secondary">
            Tools
          </Heading>
          <Underline />
          <Heading style={{ marginTop: "20vh" }} size={3}>
            Okay, so React sounds pretty magical
          </Heading>
          <Heading style={{ marginTop: 30 }} size={5}>
            What do we need to get started?
          </Heading>
        </Slide>
        <Slide
          align="center flex-start"
          transition={["fade"]}
          bgColor="primary"
          notes={`
          <p>Explain that not all of the code we'll be writing will be code that web browsers understand.</p>
          <p>We'll need to use another application to transform and bundle our code for browsers.</p>
        `}
        >
          <Heading textAlign="left" size={6} textColor="secondary">
            Tools
          </Heading>
          <Underline />
          <Layout style={{ marginTop: "20vh" }}>
            <Fill>
              <Image src={images.webpack} width="100%" />
            </Fill>
            <Fill>
              <Image src={images.babel} width="100%" />
            </Fill>
          </Layout>
          <Heading size={6}>We'll Need a Build System</Heading>
        </Slide>
        <Slide
          align="center flex-start"
          transition={["fade"]}
          bgColor="primary"
          notes={`
          <p>In a nutshell, webpack is a program that can be configured to combine all of our JavaScript into a single file.</p>
          <p>This allows us to use JavaScript modules to separate our front-end code.</p>
          <p>Webpack can also use plugins to apply transformations to our code.</p>
        `}
        >
          <Heading textAlign="left" size={6} textColor="secondary">
            Tools
          </Heading>
          <Underline />
          <Layout style={{ marginTop: "12vh" }}>
            <Fill style={{ flex: 1, marginTop: "15vh" }}>
              <Image src={images.webpack} width="100%" />
            </Fill>
            <Fill style={{ flex: 3 }}>
              <BlockQuote>
                <Quote style={{ color: "black", fontSize: "16pt" }}>
                  “webpack is a module bundler for modern JavaScript applications. When webpack
                  processes your application, it recursively builds a dependency graph that includes
                  every module your application needs, then packages all of those modules into a
                  small number of bundles - often only one - to be loaded by the browser.”
                </Quote>
                <Cite style={{ fontSize: "12pt" }}>From webpack.js.org</Cite>
              </BlockQuote>
              <Text style={{ fontSize: "25pt" }}>
                webpack allows us to modularize our front end code in the same way we do in
                Node with CommonJS modules (require, module.exports). webpack also allows us
                to apply various transformations on our assets through the use of plugins, such as…
              </Text>
            </Fill>
          </Layout>
        </Slide>
        <Slide
          align="center flex-start"
          transition={["fade"]}
          bgColor="primary"
          notes={`
          <p>The major takeaway here is that Babel can be used to transform new unsupported JavaScript code into older widely supported JavaScript code.</p>
        `}
        >
          <Heading textAlign="left" size={6} textColor="secondary">
            Tools
          </Heading>
          <Underline />
          <Image style={{ marginTop: "4vh", width: "70%" }} src={images.babel} />
          <Text style={{ fontSize: "20pt", marginTop: 15 }}>
            Babel is a JavaScript compiler. It allows us to transform next generation JavaScript
            code (ES6, ES7, ES8) into ES5 JavaScript code that most browsers will understand.
          </Text>
          <Text style={{ fontSize: "20pt", marginTop: 15 }}>
            Additionally, developers can extend the JavaScript language syntax and create their own
            features, or even entire languages that compile down to regular JavaScript by creating
            Babel plugins.
          </Text>
          <Text style={{ fontSize: "20pt", marginTop: 15 }}>
            React makes use of both next generation JavaScript, and JavaScript syntax extensions.
          </Text>
        </Slide>
        <Slide align="center flex-start" transition={["fade"]} bgColor="primary">
          <Heading textAlign="left" size={6} textColor="secondary">
            Tools
          </Heading>
          <Underline />
          <Heading style={{ marginTop: "28vh" }} size={3}>
            Can I Just Use a CDN For All of This?
          </Heading>
        </Slide>
        <Slide
          transition={["fade"]}
          align="center flex-start"
          bgColor="primary"
          notes={`
          <p>We COULD technically set up a React project using CDNs.</p>
          <p>It would be significantly slower since our code would have to compile during runtime (when the app loaded in the users browser while they wait). We'd definitely want to compile our code beforehand.</p>
          <p>Thankfully we're covering React at a good time. Because of new tools Facebook has created for us, it's never been easier to get started with React.</p>
        `}
        >
          <Heading textAlign="left" size={6} textColor="secondary">
            Tools
          </Heading>
          <Underline />
          <Heading style={{ marginTop: "15vh" }} size={4}>
            You Can, But It’d Be SUPER Slow
          </Heading>
          <Text style={{ fontSize: "25pt" }}>
            So please don't{" "}
            <span role="img" aria-label="smile">
              🙂
            </span>
          </Text>
          <Text style={{ fontSize: "25pt", marginTop: 15 }}>
            There used to be a lot of overhead in setting up a proper React application. At times
            you’d need to have a deep understanding of these other libraries to get anything done.
            This made it hard to get started.
          </Text>
          <Text style={{ fontSize: "25pt", marginTop: 15 }}>
            Now, all you need to know is plain old JavaScript. As we’ll soon learn, Facebook has
            since made it REALLY easy to begin working with React.
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Heading fit size={2} textColor="secondary">
            Digging into Docs
          </Heading>
          <Underline />
        </Slide>
        <Slide align="center flex-start" transition={["fade"]} bgColor="primary">
          <Heading textAlign="left" size={5} textColor="secondary">
            Documentation Immersion
          </Heading>
          <Underline />
          <Heading style={{ marginTop: "25vh" }} size={3}>
            Work In Groups...
          </Heading>
          <Text style={{ marginTop: 20 }}>
            Complete each task and answer each of the questions slacked out to you.
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Heading textAlign="left" size={2} textColor="secondary">
            Questions
          </Heading>
          <Underline />
        </Slide>
      </Deck>
    );
  }
}

export default Presentation;
