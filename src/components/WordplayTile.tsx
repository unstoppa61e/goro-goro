import Image from 'next/image';
import NumberTile from './NumberTile';

type numberTileNumber = {
  value: string;
  id: number;
  isMistaken: boolean;
  isClosed: boolean;
  isFocused: boolean;
};

type tile = {
  isTarget: boolean;
};

type Props = {
  tilePiNumbers: numberTileNumber[];
  tile: tile;
};

const WordplayTile = ({ tilePiNumbers, tile }: Props) => {
  const wordplayImageSrc = () => {
    const str: string = tilePiNumbers
      .map((eachNumber) => eachNumber.value)
      .join('');

    return `/wordplays/${str}.png`;
  };

  const numberTiles = tilePiNumbers.map((numberTileNumber, index) => {
    return (
      <li key={index}>
        <NumberTile tileNumber={numberTileNumber} />
      </li>
    );
  });

  return (
    <div
      className={`flex items-center justify-center h-24 w-16 py-1 rounded  ${
        tile.isTarget ? 'bg-focused' : ''
      }`}
    >
      <div className="h-full w-14 flex flex-col justify-between">
        <div className="flex justify-center items-center h-14 bg-stage-1 rounded relative">
          <div className="absolute flex justify-center items-center">
            <Image
              src={wordplayImageSrc()}
              width={50}
              height={50}
              objectFit="contain"
              alt="wordplay"
              className="rotate-y-0"
            />
          </div>
          <Image
            src="/mark_question.png"
            width={50}
            height={50}
            objectFit="contain"
            alt="wordplay"
            className="rotate-y-90"
          />
        </div>
        <ul className="flex justify-between">{numberTiles}</ul>
      </div>
    </div>
  );
};

export default WordplayTile;
