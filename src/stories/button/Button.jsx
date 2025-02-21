import React from "react";
import PropTypes from "prop-types";
import "./button.css";

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary,
  backgroundColor,
  size,
  label,
  icon,
  width,
  ...props
}) => {
  const mode = primary
    ? "storybook-button--primary"
    : "storybook-button--secondary";

  return (
    <button
      type="button"
      className={["storybook-button", `storybook-button--${size}`, mode].join(
        " "
      )}
      style={(backgroundColor && { backgroundColor }, width && { width })}
      {...props}
    >
      {label}
      {icon && <div className="storybook-button--icon">{icon}</div>}
    </button>
  );
};

Button.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(["small", "medium", "large"]),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,

  width: PropTypes.number,
};

Button.defaultProps = {
  backgroundColor: null,
  primary: true,
  size: "medium",
  onClick: undefined,
  icon: null,
  width: null,
};
