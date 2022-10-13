import classNames from "classnames";

const Button = ({ bgColor, textColor, href, onClick, children }) => {
  return (
    <a
      href={href}
      className={classNames(
        `${bgColor} ${textColor} rounded-lg flex w-max cursor-pointer items-center justify-center space-x-2 px-6 py-2 text-sm font-medium transition ease-in-out md:text-base`
      )}
      onClick={onClick}
    >
      <button className="flex w-full items-center justify-center space-x-2">
        {children}
      </button>
    </a>
  );
};

export default Button;
