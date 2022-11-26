# Sarder Simple React Grid System

Setting out layout or grid systems for React projects is often a nightmare. We often have to use big chunky frameworks (yes Material UI, I'm talking about ya!) to make responsive React apps and components. This leaves developers with limited opportunities in terms of customization and capability to override the design systems of these frameworks. Also, each frameworks have their own steep learning curve and architecture, which makes it even harder and time-consuming. Sarder Simple React Grid System has been written in order to make your React frontend dev journey easier. 

What if you want to build a custom design system based on your company's or your client's requirements, but you don't wanna spend too much time on responsiveness, layout and stuff? Using the chunky UI frameworks (especially Material!) would provide so much bottlenecks to you. Let this npm package make your life easier by taking care of the layout system for you!

## Installation instructions

### For npm users

```bash
npm i sarder-simple-react-grid-system --save
```

### For yarn users

```bash
yarn add sarder-simple-react-grid-system
```

## Piece of advice

This teeny tiny library is using Sass under the hood. You might need `node-sass` to be configured in your project.

## How to use
The Sarder Simple React Grid System follows the simplest Container, Row, Column convention for setting up grid system (similar to Bootstrap). The hierarchy of the components are as follows:

- Container
    - Row
        - Column

### Basic example

```jsx
<Container>
    <Row>
        <Col sm={4}>
            <h2>Maria</h2>
        </Col>
        <Col sm={4}>
            <h2>I love</h2>
        </Col>
        <Col sm={4}>
            <h2>SSRGS (yeah I know the package name is too long)</h2>
        </Col>
    </Row>
</Container>
```
