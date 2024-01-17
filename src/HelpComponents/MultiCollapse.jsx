import React from "react";

const MultiCollapse = ({ children, isOpen }) => {
    return (
        <div className={`collapsible-container ${!isOpen ? 'collapsed' : ''}`}>
                    <div className="collapsible-content">
        {/* Content to be displayed when expanded */}
{children}
      </div>
      </div>
    );
    };

export default MultiCollapse;