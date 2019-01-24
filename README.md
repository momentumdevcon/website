# Momentum Website

**This site was built using the Gatsby Forty theme.**

Check out https://codebushi.com/gatsby-starters/ for more Gatsby starters and templates.


## Installation

Install dependencies by running `yarn` in the terminal

Start the site by running `gatsby develop` in the terminal

## CSS Grid

The grid on this site was replaced with a custom version, built using CSS Grid. It's a very simple 12 column grid that is disabled on mobile. To start using the grid, wrap the desired items with `grid-wrapper`. Items inside the `grid-wrapper` use the class `col-` followed by a number, which should add up to 12.

Here is an example of using the grid, for a 3 column layout:

```
<div className="grid-wrapper">
    <div className="col-4">
        <p>Content Here</p>
    </div>
    <div className="col-4">
        <p>Content Here</p>
    </div>
    <div className="col-4">
        <p>Content Here</p>
    </div>
</div>
```