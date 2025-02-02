import SectionSvg from "../assets/svg/SectionSvg";

const Section = ({
  className,
  id,
  crosses,
  crossesOffset,
  customPaddings,
  children,
}) => {
  return (
    <div
      id={id}
      className={`
      relative 
      ${
        customPaddings ||
        ` lg:py-5 xl:py-4 p-0 ${crosses ? "lg:py-32 xl:py-40" : ""}`
      } 
      ${className || ""}`}
    >
      {children}

      <div className="absolute top-0 left-0 w-0.25 h-full bg-stroke-1 pointer-events-none md:block lg:left-5 xl:left-0" />
      <div className="absolute top-0 right-0 w-0.25 h-full bg-stroke-1 pointer-events-none md:block lg:right-5 xl:right-0" />

      {crosses && (
        <>
          <div
            className={`absolute top-0 left-7.5 right-7.5 h-0.25 bg-stroke-1 ${
              crossesOffset && crossesOffset
            } pointer-events-none lg:block xl:left-0 xl:right-0`}
          />
          <SectionSvg crossesOffset={crossesOffset} />
        </>
      )}
    </div>
  );
};

export default Section;
