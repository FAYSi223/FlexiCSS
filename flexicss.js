class FlexiCSS {
    constructor() {
        this.theme = 'light';
        this.breakpoints = { 
            sm: '640px', 
            md: '768px', 
            lg: '1024px', 
            xl: '1280px',
            xxl: '1600px'
        };
        this.mappings = this.initializeMappings();
        this.defaultStyles = {};
        this.customStyles = {};
        this.themeVariables = {
            light: {
                "--primary-color": "#3498db",
                "--secondary-color": "#2ecc71",
                "--text-color": "#333",
                "--background-color": "#fff"
            },
            dark: {
                "--primary-color": "#2c3e50",
                "--secondary-color": "#27ae60",
                "--text-color": "#ddd",
                "--background-color": "#181818"
            }
        };
        document.addEventListener("DOMContentLoaded", () => this.applyFlexiCSS());
    }

    initializeMappings() {
        return {
            color: "color",
            bg: "background-color",
            size: "font-size",
            radius: "border-radius",
            padding: "padding",
            margin: "margin",
            display: "display",
            align: "text-align",
            shadow: "box-shadow",
            transition: "transition",
            zindex: "z-index",
            opacity: "opacity",
            sm: `@media (max-width: ${this.breakpoints.sm})`,
            md: `@media (max-width: ${this.breakpoints.md})`,
            lg: `@media (max-width: ${this.breakpoints.lg})`,
            xl: `@media (max-width: ${this.breakpoints.xl})`,
            xxl: `@media (max-width: ${this.breakpoints.xxl})`,
            flex: "display: flex",
            grid: "display: grid",
            gap: "gap",
            direction: "flex-direction",
            justify: "justify-content",
            items: "align-items",
            content: "align-content",
            font: "font-family",
            weight: "font-weight",
            spacing: "letter-spacing",
            transform: "text-transform",
            animate: "animation",
            hover: ":hover",
            active: ":active",
            focus: ":focus",
            primary: "var(--primary-color)",
            secondary: "var(--secondary-color)",
            float: "float",
            width: "width",
            height: "height"
        };
    }

    applyFlexiCSS() {
        const flexiCSSLinks = document.querySelectorAll("link[href$='.fcss']");
        flexiCSSLinks.forEach(link => {
            fetch(link.href)
                .then(response => response.text())
                .then(cssText => {
                    this.parseFlexiRules(cssText);
                })
                .catch(err => console.error('Error loading .fcss file:', err));
        });

        const flexiCSSElements = document.querySelectorAll("flexicss");
        flexiCSSElements.forEach(flex => {
            this.parseFlexiRules(flex.textContent);
            flex.remove();
        });

        this.applyTheme();
    }

    parseFlexiRules(cssText) {
        const style = document.createElement("style");
        const rules = cssText.trim().split("}").map(rule => rule.trim()).filter(Boolean);

        rules.forEach(rule => {
            const [selector, properties] = rule.split("{");
            if (!selector || !properties) return;

            const cssProperties = properties.split(";").map(p => p.trim()).filter(Boolean);
            let cssRule = `${selector.trim()} {`;

            cssProperties.forEach(prop => {
                const [name, value] = prop.split(":").map(part => part.trim());
                if (name && value) cssRule += this.mapCSS(name, value);
            });

            cssRule += "}";
            style.appendChild(document.createTextNode(cssRule));
        });

        document.head.appendChild(style);
    }

    mapCSS(name, value) {
        const cssName = this.mappings[name] || name;
        const cssValue = this.convertValue(value);
        return `${cssName}: ${cssValue};`;
    }

    convertValue(value) {
        const themeColors = this.themeVariables[this.theme];
        return themeColors[value] || value;
    }

    applyTheme() {
        const themeColors = this.themeVariables[this.theme];
        for (const [key, value] of Object.entries(themeColors)) {
            document.documentElement.style.setProperty(key, value);
        }
    }

    setTheme(newTheme) {
        this.theme = newTheme;
        this.applyTheme();
    }

    applyAnimation(element, animationType, duration = '1s') {
        if (element) {
            element.style.animation = `${animationType} ${duration} ease-in-out`;
        }
    }

    addBreakpoint(name, size) {
        this.breakpoints[name] = size;
        this.mappings[name] = `@media (max-width: ${size})`;
    }

    addCustomStyle(selector, properties) {
        if (!this.customStyles[selector]) {
            this.customStyles[selector] = [];
        }
        this.customStyles[selector].push(properties);
        this.updateCustomStyles();
    }

    updateCustomStyles() {
        const style = document.createElement("style");
        Object.keys(this.customStyles).forEach(selector => {
            let cssRule = `${selector} {`;
            this.customStyles[selector].forEach(properties => {
                Object.keys(properties).forEach(prop => {
                    const cssName = this.mappings[prop] || prop;
                    const cssValue = this.convertValue(properties[prop]);
                    cssRule += `${cssName}: ${cssValue};`;
                });
            });
            cssRule += "}";
            style.appendChild(document.createTextNode(cssRule));
        });
        document.head.appendChild(style);
    }

    static getInstance() {
        if (!FlexiCSS.instance) {
            FlexiCSS.instance = new FlexiCSS();
        }
        return FlexiCSS.instance;
    }
}
const flexiCSS = FlexiCSS.getInstance();

flexiCSS.setTheme("dark");
flexiCSS.addBreakpoint("xxl", "1600px");

flexiCSS.addCustomStyle('.my-class', { bg: 'primary', padding: '20px', radius: '5px' });

const exampleElement = document.querySelector(".example");
if (exampleElement) {
    flexiCSS.applyAnimation(exampleElement, "fade-in");
}
