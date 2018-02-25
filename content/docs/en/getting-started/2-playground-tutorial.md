---
title: Sample Tasks for the Playground
contributors: [ikoevska]
---

If you don't know where to start, why not create a simple to-do app. The first tab of the app lets you add new tasks and shows a list of active tasks. The second tab lists completed tasks.

### A two-tab app

Use the `<TabView>` component to create a two-tab app. 

1. Remove the default `<ScrollView>` block that comes with the template.
1. Drag and drop the `<TabView>` component in its place.<br/>
1. Configure the height of the `<TabView>` to fill the screen (set it to 100%).
1. Change the titles of the `<TabViewItem>` elements and their contents.

```JavaScript
new Vue({

  template: `
    <Page class="page">
      <ActionBar title="My Tasks" class="action-bar" />
      
      <TabView height="100%">
        <TabViewItem title="To Do">
          <Label text="This tab will list active tasks and will let users add new tasks." textWrap="true" />
        </TabViewItem>
        <TabViewItem title="Completed">
          <Label text="This tab will list completed tasks for tracking." textWrap="true" />
        </TabViewItem>
      </TabView>

    </Page>
  `,

}).$start();
```

### Adding new tasks

Use a `<GridLayout>`, a `<TextField>`, and a `<Button>`.

1. Remove the `<Label>` from the first `<TabViewItem>`.
1. Insert a `<GridLayout>` inside the first `<TabViewItem>`. With it, you can position the text field for entering new tasks plus a button on the same row.
1. Configure the `<GridLayout>` to have two columns and two rows. Play with the size settings.
1. Drag and drop a `<TextField>` and a `<Button>` inside the `<GridLayout>`. Modify the hint for the text field and change the label of the button. Note the methods added before the `template` block.
1. Improve console logging for the button press and clear the text field after hitting the button.
1. Drag and drop a `<ListView>` that will list newly added tasks below. Clean up the default code

```JavaScript
new Vue({
  methods: {
    onButtonTap() {
      console.log("Button was pressed. New task is \"" + this.textFieldValue + "\".");
      this.textFieldValue = ""; // Clears the text field.
    },
  },

  data() {
    return {
      textFieldValue: "",
    }
  },

  template: `
    <Page class="page">
      <ActionBar title="My Tasks" class="action-bar" />
      
      <TabView height="100%">
        <TabViewItem title="To Do"> 
           <GridLayout columns="*, *" rows="*, *" width="100%" height="100%">
            <TextField col="0" row="0" v-model="textFieldValue" hint="Create new task" editable="true" />
            <Button col="1" row="0" text="Add task" @tap="onButtonTap" />
          </GridLayout>
        </TabViewItem>
        <TabViewItem title="Completed">
          <Label text="This tab will list completed tasks for tracking." textWrap="true" />
        </TabViewItem>
      </TabView>

    </Page>
  `,
 ```

### 