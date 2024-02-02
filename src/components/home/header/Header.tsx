import { Logo } from "./Logo";
import { SearchBox } from "./SearchBox";

export const Header = () => {
  return (
    <div className="flex justify-center px-8 pt-8">
      <Logo />
      <SearchBox />
      <div className="mr-auto opacity-0">
        <Logo />
      </div>
    </div>
  );
};
