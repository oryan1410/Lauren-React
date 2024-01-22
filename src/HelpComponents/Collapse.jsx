import React from "react";

const Collapse = React.forwardRef((props,ref) => {
    let children = props.children;
    let isOpen = props.isOpen;
    return (
        <div className={`collapsible-container ${!isOpen ? 'collapsed' : ''}`} ref={ref&& ref}>
                    <div className="collapsible-content">
        {/* Content to be displayed when expanded */}
{children
}      </div>
      </div>
    );
    });

export default Collapse;