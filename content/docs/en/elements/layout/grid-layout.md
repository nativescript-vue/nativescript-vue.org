---
title: GridLayout
apiRef: https://docs.nativescript.org/api-reference/modules/_ui_layouts_grid_layout_
---

The GridLayout container lets you define a grid of columns and rows, and position child element on this grid.

## Props

| name | type | description |
|------|------|-------------|
`columns` | `String` | Specifies the columns schema for the grid
`rows` | `String` | Specifies the rows schema for the grid


## Additional Children Props

When an element is a direct child of the GridLayout, the following
props get a meaning:

| name | type | description |
|------|------|-------------|
`row` | `Number` | Specifies the row which this element should be in
`column` | `Number` | Specifies the column which this element should be in
`rowSpan` | `Number` | Specifies the number of rows which this element should span across
`columnSpan` | `Number` | Specifies the number of columns which this element should span across
