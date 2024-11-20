

# FlexiCSS

**FlexiCSS** is a modern CSS framework designed to simplify the process of building responsive and dynamic web pages. It provides an easy-to-use, beginner-friendly syntax for applying CSS properties, and comes with powerful utilities to manage layouts, themes, and animations.

## Installation

To include **FlexiCSS** in your project, add the following `<script>` tag to your HTML file:

```html
<script src="https://cdn.jsdelivr.net/gh/FAYSi223/flexicss@latest/flexicss.js"></script>
```

## Usage

With **FlexiCSS**, you can define CSS rules using a new `<flexicss>` tag. Here’s an example:

```html
<flexicss>
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
</flexicss>
```

## Features

- **Simple Syntax**: Use simplified attributes such as `color`, `bg`, `size`, `padding`, `margin`, and more to define styles quickly.
- **Responsive Breakpoints**: Create responsive designs with built-in breakpoints like `sm`, `md`, `lg`, and `xl`. You can easily add new breakpoints with the `addBreakpoint(name, size)` method.
- **Theme Management**: Switch between themes (e.g., `light` and `dark`) at runtime using the `setTheme(newTheme)` method.
- **Animations**: Add animations to elements using the `applyAnimation(element, animationType, duration)` method.
- **Custom Variables**: Define custom CSS variables that can be used across your site.
- **Modularity**: Reuse defined styles throughout your project.

## API

### FlexiCSS Class

- **constructor()**: Initializes FlexiCSS with default values and mappings.
- **initializeMappings()**: Creates a mapping of simplified attributes to CSS properties.
- **applyFlexiCSS()**: Applies FlexiCSS to all `<flexicss>` elements in the document.
- **parseFlexiRules(cssText)**: Parses the CSS rules and converts them to regular CSS.
- **mapCSS(name, value)**: Converts simplified CSS properties into regular CSS properties.
- **convertValue(value)**: Converts values based on the current theme.
- **setTheme(newTheme)**: Switches between `light` and `dark` themes.
- **applyAnimation(element, animationType, duration)**: Adds an animation to a DOM element.
- **addBreakpoint(name, size)**: Adds a new responsive breakpoint.
- **defineCustomVariable(variableName, value)**: Defines custom CSS variables that can be used globally in your project.

### Example Usage

Here’s a complete example of how to use FlexiCSS in an HTML page:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>FlexiCSS Example</title>
    <script src="https://cdn.jsdelivr.net/gh/FAYSi223/flexicss@latest/flexicss.js"></script>
</head>
<body>
    <flexicss>
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
    </flexicss>
    <div class="example">Welcome to FlexiCSS!</div>
    <script>
        const flexiCSS = new FlexiCSS();
        flexiCSS.setTheme("light");
        flexiCSS.addBreakpoint("xxl", "1600px"); // Adding a custom breakpoint
    </script>
</body>
</html>
```

### Custom Breakpoints

You can add custom breakpoints for responsive design:

```javascript
flexiCSS.addBreakpoint('xxl', '1600px'); // Custom breakpoint for extra-large screens
```

### Animation Support

Easily add animations to elements:

```javascript
flexiCSS.applyAnimation(document.querySelector('.example'), 'fade-in', '2s');
```

### Custom Variables

Define custom variables that can be used across your project:

```javascript
flexiCSS.defineCustomVariable('--primary-color', '#3498db');
```

In your CSS, you can use the custom variable like this:

```html
<flexicss>
    .custom-style {
        color: var(--primary-color);
    }
</flexicss>
```

## Breakpoints

FlexiCSS includes several predefined breakpoints that can be used to create responsive designs:

- `sm`: Small screens (e.g., mobile devices)
- `md`: Medium screens (e.g., tablets)
- `lg`: Large screens (e.g., laptops)
- `xl`: Extra-large screens (e.g., desktops)

You can also define custom breakpoints for any screen size with the `addBreakpoint(name, size)` method.

## Support

For questions or support, feel free to open an issue in the [GitHub Repository](https://github.com/FAYSi223/flexicss).

## License

FlexiCSS is free to use under the [MIT License](https://opensource.org/licenses/MIT).


### Key Updates:
1. **New Name**: Changed from FlowCSS to **FlexiCSS** to reflect its more flexible capabilities.
2. **Custom Variables**: Added the ability to define custom CSS variables (`defineCustomVariable()`).
3. **Updated Example**: A complete example with custom breakpoints and variable usage.
4. **Responsive Design**: Emphasized support for adding custom breakpoints and animations for enhanced UI flexibility.
5. **Animations**: Expanded the documentation for animations with a more detailed example.
