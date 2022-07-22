# Momentum Website

**This site was built using the Gatsby Forty theme.**

Check out https://codebushi.com/gatsby-starters/ for more Gatsby starters and templates.


## Getting Started

Set your node version to the version in the .nvmrc. If you use nvm, simply run `nvm use`

Install dependencies by running `yarn` in the terminal

Start the site by running `yarn develop` in the terminal

Visit the site at http://localhost:8000

If you want to use graphql, visit http://localhost:8000/___graphql

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