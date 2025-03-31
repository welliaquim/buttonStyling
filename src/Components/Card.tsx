import clsx from "clsx";

type CardProps = {
  w: string;
  h: string;
  gap?: string;
  flexType?: string;
  children: React.ReactNode;
};

function Card({ w, h, gap, flexType, children }: CardProps) {
  return (
    <div
      className={clsx(
        "bg-gray-950 flex justify-center items-center rounded-md border-2 border-gray-800",
        w,
        gap,
        flexType,
        h
      )}
    >
      {children}
    </div>
  );
}

export default Card;
