import clsx from "clsx";

type CardProps = {
  h?: string;
  gap?: string;
  flexType?: string;
  flexWrap?: string;
  children: React.ReactNode;
};

function Card({ h, gap, flexType, flexWrap, children }: CardProps) {
  return (
    <div
      className={clsx(
        "bg-gray-950 h-52 flex  justify-center items-center rounded-md border-2 border-gray-800",
        "w-full sm:w-[400px] md:w-[500px] lg:w-[600px]",
        gap,
        flexType,
        h,
        flexWrap
      )}
    >
      {children}
    </div>
  );
}

export default Card;
