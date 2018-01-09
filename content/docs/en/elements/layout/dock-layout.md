---
title: DockLayout
apiRef: https://docs.nativescript.org/api-reference/modules/_ui_layouts_dock_layout_
---

The DockLayout container arranges it's children on it's outer edges, and allows the **last children** to take up the remaining space.

## Props

| name | type | description |
|------|------|-------------|
`stretchLastChild` | `Boolean` | Enables/Disables stretching the last child to fit the remaining space.

## Additional Children Props

When an element is a direct child of the DockLayout, the following
props get a meaning:

| name | type | description |
|------|------|-------------|
`dock` | `String` | Specifies which side to dock the element to. Values can be: `top`, `right`, `bottom`, `left`
