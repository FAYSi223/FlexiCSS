# FlowCSS

**FlowCSS** is an innovative CSS framework specifically designed for beginners. It simplifies the application of CSS properties and provides a user-friendly syntax to make creating responsive layouts and animations easier.

## Installation

To include FlowCSS in your project, simply add the following `<script>` tag to your HTML file:

```html
<script src="https://cdn.jsdelivr.net/gh/FAYSi223/flowcss@latest/flowcss.js"></script>
```

## Usage

FlowCSS uses a new `<flowcss>` tag to define CSS rules. Here’s an example of how to use FlowCSS in your HTML file:

```html
<flowcss>
  .example {
    color: primary;
    bg: secondary;
    size: 16px;
    padding: 10px;
    radius: 5px;
    display: flex;
    justify: center;
    align: center;
  }
</flowcss>
```

## Features

- **Simple Syntax**: Use simplified attributes like `color`, `bg`, `size`, `padding`, `margin`, and more to quickly define styles.

- **Responsive Breakpoints**: Create responsive designs with built-in breakpoints like `sm`, `md`, `lg`, and `xl`. Easily add new breakpoints with the `addBreakpoint(name, size)` method.

- **Theme Management**: Switch between different themes (e.g., `light` and `dark`) at runtime using the `setTheme(newTheme)` method.

- **Animations**: Easily add animations by using the `applyAnimation(element, animationType, duration)` method.

- **Modularity**: Define styles that can be reused in any HTML document.

## API

### FlowCSS Class

- **constructor()**: Initializes FlowCSS with default values and standard mappings.

- **initializeMappings()**: Creates a mapping of simplified attributes to CSS properties.

- **applyFlowCSS()**: Applies FlowCSS to all `<flowcss>` elements in the document.

- **parseFlowRules(cssText)**: Parses the CSS rules and converts them to regular CSS.

- **mapCSS(name, value)**: Converts simplified CSS properties into regular CSS properties.

- **convertValue(value)**: Converts values based on the current theme.

- **setTheme(newTheme)**: Switches the color scheme between `light` and `dark`.

- **applyAnimation(element, animationType, duration)**: Adds an animation to a DOM element.

- **addBreakpoint(name, size)**: Adds a new responsive breakpoint.

## Example

Here’s a complete example showing how FlowCSS is used in an HTML page:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>FlowCSS Example</title>
    <script src="https://cdn.jsdelivr.net/gh/FAYSi223/flowcss@latest/flowcss.js"></script>
</head>
<body>
    <flowcss>
        .example {
            color: primary;
            bg: secondary;
            size: 20px;
            padding: 15px;
            radius: 10px;
            display: flex;
            justify: center;
            align: center;
        }
    </flowcss>
    <div class="example">Welcome to FlowCSS!</div>
    <script>
        const flowCSS = new FlowCSS();
        flowCSS.setTheme("light");
    </script>
</body>
</html>
```

## Support

For questions or support, feel free to open an issue in the [GitHub Repository](https://github.com/FAYSi223/flowcss).

## License

FlowCSS is free for all. You can use it for your own works
