class FlowCSS {
    constructor() {
        this.theme = 'light';
        this.breakpoints = { 
            sm: '640px', 
            md: '768px', 
            lg: '1024px', 
            xl: '1280px' 
        };
        this.mappings = this.initializeMappings();
        document.addEventListener("DOMContentLoaded", () => this.applyFlowCSS());
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

    applyFlowCSS() {
        const flowcssElements = document.querySelectorAll("flowcss");
        flowcssElements.forEach(flow => {
            this.parseFlowRules(flow.textContent);
            flow.remove();
        });
    }

    parseFlowRules(cssText) {
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
        const themeColors = {
            light: { "--primary-color": "#3498db", "--secondary-color": "#2ecc71" },
            dark: { "--primary-color": "#2c3e50", "--secondary-color": "#27ae60" },
        };
        const colors = themeColors[this.theme];
        return colors[value] || value;
    }

    setTheme(newTheme) {
        this.theme = newTheme;
        const themeColors = {
            light: { "--primary-color": "#3498db", "--secondary-color": "#2ecc71" },
            dark: { "--primary-color": "#2c3e50", "--secondary-color": "#27ae60" },
        };
        document.documentElement.style.setProperty('--primary-color', themeColors[newTheme]["--primary-color"]);
        document.documentElement.style.setProperty('--secondary-color', themeColors[newTheme]["--secondary-color"]);
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
}

const flowCSS = new FlowCSS();
flowCSS.setTheme("dark");
const exampleElement = document.querySelector(".example");
if (exampleElement) {
    flowCSS.applyAnimation(exampleElement, "fade-in");
}
flowCSS.addBreakpoint("xxl", "1600px");
