import { cn } from "@/utils/utils";

type Props = {
  title: string;
  children?: React.ReactNode;
  className?: string;
};

export default function PageTitleLayout({ children, className, title }: Props) {
  const classes = cn("flex items-center capitalize justify-between", className);

  return (
    <div className={classes}>
      <h1 className="text-2xl font-bold">{title}</h1>
      {children}
    </div>
  );
}
