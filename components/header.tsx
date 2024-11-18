'use client'

interface HeaderProps {
  title: string;
  subtitle?: string;
  center?: boolean;
}

const Header = ({ center, title, subtitle }: HeaderProps) => {
  return (
    <div className={`${center ? "text-center" : ""}`}>
      <h1 className="text-2xl font-medium">{title}</h1>
      <p className="font-light text-neutral-500 mt-2">{subtitle}</p>
    </div>
  );
};

export default Header;
