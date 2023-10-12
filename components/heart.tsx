import Icons from "@/utils/Icons";

type Props = {
  isFavourite: boolean;
  handleHeart: () => void;
  handleUnheart: () => void;
};

export default function Heart({ isFavourite, handleUnheart, handleHeart }: Props) {
  return (
    <>
      {isFavourite ? (
        <Icons.HeartFilledIcon
          className="h-8 w-8 text-white transition-colors hover:cursor-pointer hover:text-red-500"
          onClick={handleUnheart}
        />
      ) : (
        <Icons.HeartIcon
          className="h-8 w-8 text-white transition-colors hover:cursor-pointer hover:text-red-500"
          onClick={handleHeart}
        />
      )}
    </>
  );
}
