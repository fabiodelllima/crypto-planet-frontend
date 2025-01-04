import { useState, ReactNode, useCallback } from "react";
import TooltipIcon from "../../assets/notifications/tooltip.svg";

interface TooltipProps {
  text: string | ReactNode;
  className?: string;
}

const Tooltip = ({ text, className = "" }: TooltipProps) => {
  const [isVisible, setIsVisible] = useState(false);

  const showTooltip = useCallback(() => {
    setIsVisible(true);
  }, []);

  const hideTooltip = useCallback(() => {
    setIsVisible(false);
  }, []);

  return (
    <div
      className={`relative inline-block items-center ${className}`}
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
      onTouchStart={showTooltip}
      onTouchEnd={hideTooltip}
      role="tooltip"
    >
      <img src={TooltipIcon} alt="Help" />

      {isVisible && (
        <div className="absolute z-50 p-8 right-full mr-3 top-1/4 -translate-y-1/2 w-[370px] bg-zinc-800 text-white rounded-lg shadow-lg text-sm border border-bluePrimary">
          <div className="absolute w-2 h-2 bg-zinc-800 transform rotate-45 right-[-5px] top-1/2 -translate-y-1/2 border-r border-t border-bluePrimary" />
          <div className="relative z-10">{text}</div>
        </div>
      )}
    </div>
  );
};

export default Tooltip;
