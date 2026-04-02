
const elements = document.querySelectorAll("[class]");

// -------------------- MAPS --------------------

const styleMap = {
  text: "color",
  bg: "backgroundColor",
};

const directionMap = {
  "": [""],
  t: ["Top"],
  b: ["Bottom"],
  l: ["Left"],
  r: ["Right"],
  x: ["Left", "Right"],
  y: ["Top", "Bottom"],
};

const typographyMap = {
  sm: "12px",
  md: "16px",
  lg: "20px",
  xl: "24px",
};

const textAlignMap = {
  left: "left",
  right: "right",
  center: "center",
};

const radiusMap = {
  sm: "4px",
  md: "8px",
  lg: "12px",
  xl: "16px",
  full: "9999px",
};

const displayMap = {
  block: "block",
  inline: "inline",
  flex: "flex",
  hidden: "none",
};

const justifyMap = {
  center: "center",
  between: "space-between",
};

const itemsMap = {
  center: "center",
  start: "flex-start",
  end: "flex-end",
};

const positionMap = {
  relative: "relative",
  absolute: "absolute",
  fixed: "fixed",
};

// -------------------- ENGINE --------------------

elements.forEach((el) => {
  el.classList.forEach((cls) => {
    
    // prefix check
    if (!cls.startsWith("chai-")) return;

    const parts = cls.split("-");
    const type = parts[1];
    const value = parts[parts.length - 1];

    // -------------------- DEFAULTS --------------------

    if (cls === "chai-border") {
      el.style.borderWidth = "1px";
      el.style.borderStyle = "solid";
      return;
    }

    if (cls === "chai-rounded") {
      el.style.borderRadius = "6px";
      return;
    }

    // -------------------- SIMPLE MAPS --------------------

    if (type in displayMap) {
      el.style.display = displayMap[type];
      return;
    }

    if (type in positionMap) {
      el.style.position = positionMap[type]; 
      return;
    }

    // -------------------- NEED VALUE --------------------

    if (parts.length < 3) return;

    // -------------------- TYPOGRAPHY --------------------

    if (type === "text") {
      if (value in typographyMap) {
        el.style.fontSize = typographyMap[value];
      } else if (value in textAlignMap) {
        el.style.textAlign = textAlignMap[value];
      } else {
        el.style.color = value;
      }
      return;
    }

    // -------------------- COLOR --------------------

    const property = styleMap[type];
    if (property) {
      el.style[property] = value;
      return;
    }

    // -------------------- SPACING --------------------

    if (type.startsWith("p") || type.startsWith("m")) {
      const base = type[0] === "p" ? "padding" : "margin";
      const direction = type.slice(1);
      const px = value * 4 + "px";

      const sides = directionMap[direction];
      if (!sides) return;

      sides.forEach((side) => {
        el.style[side ? base + side : base] = px;
      });

      return;
    }

    // -------------------- BORDER --------------------

    if (type === "border") {
      const num = Number(value);

      el.style.borderStyle = "solid";

      if (!isNaN(num)) {
        el.style.borderWidth = num * 4 + "px";
      } else {
        el.style.borderColor = value;
      }

      return;
    }

    // -------------------- RADIUS --------------------

    if (type === "rounded") {
      if (value in radiusMap) {
        el.style.borderRadius = radiusMap[value];
      }
      return;
    }

    // -------------------- FLEX --------------------

    if (type === "justify") {
      if (value in justifyMap) {
        el.style.justifyContent = justifyMap[value];
      }
      return;
    }

    if (type === "items") {
      if (value in itemsMap) {
        el.style.alignItems = itemsMap[value];
      }
      return;
    }

    // -------------------- SIZE --------------------

    if (type === "w") {
      el.style.width = value === "full" ? "100%" : value * 4 + "px";
      return;
    }

    if (type === "h") {
      el.style.height = value === "full" ? "100%" : value * 4 + "px";
      return;
    }

    // -------------------- POSITION OFFSETS --------------------

    if (["top", "left", "right", "bottom"].includes(type)) {
      el.style[type] = value * 4 + "px";
      return;
    }

    // -------------------- OPACITY --------------------

    if (type === "opacity") {
      el.style.opacity = value / 100;
      return;
    }

  });
});