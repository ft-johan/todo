import { cn } from "@/utils/cn";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid  grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto my-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  tag,

  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  tag?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.4] bg-white border border-transparent justify-between flex flex-col md:mx-1 mx-10 ",
        className
      )}
    >
      <div className="group-hover/bento:translate-x-2 transition duration-200 my-auto md:p-4 p-2 bg-black">
        <div className="text-xl lg:text-3xl font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
          {title}
        </div>

        <div className=" inline-block rounded-xl p-1 bg-gray-500 font-sans font-normal text-neutral-600 text-l dark:text-neutral-300 gap-4 px-4 text-left ">
          {tag}
        </div>
      </div>
    </div>
  );
};
