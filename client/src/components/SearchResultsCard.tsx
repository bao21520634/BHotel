import { Link } from 'react-router-dom';
import { HotelType } from '../../../server/src/shared/types';
import { AiFillStar } from 'react-icons/ai';
type Props = {
    hotel: HotelType;
};

const SearchResultsCard = ({ hotel }: Props) => {
    return (
        <div className="grid grid-cols-1 xl:grid-cols-[2fr_3fr] border border-slate-300 rounded-lg p-4 gap-8">
            <div className="w-[240px] h-[240px] rounded">
                <img src={hotel.imageUrls[0]} className="rounded w-full h-full object-cover object-center" />
            </div>
            <div className="grid grid-rows-[1fr_2fr_1fr]">
                <div>
                    <div className="flex items-center">
                        <span className="flex">
                            {Array.from({ length: hotel.starRating }).map((_, index) => (
                                <AiFillStar key={index} className="fill-yellow-400" />
                            ))}
                        </span>
                        <span className="ml-1 text-sm">{hotel.type}</span>
                    </div>
                    <Link to={`/detail/${hotel._id}`} className="text-xl font-bold cursor-pointer">
                        {hotel.name}
                    </Link>
                </div>

                <div>
                    <div className="line-clamp-4">{hotel.description}</div>
                </div>

                <div className="grid grid-cols-2 items-end whitespace-nowrap">
                    <div className="flex gap-1 items-center">
                        {hotel.facilities.slice(0, 3).map((facility, index) => (
                            <span
                                key={index}
                                className="bg-slate-300 p-2 rounded-lg font-bold text-xs whitespace-nowrap"
                            >
                                {facility}
                            </span>
                        ))}
                        <span className="text-sm">
                            {hotel.facilities.length > 3 && `+${hotel.facilities.length - 3} more`}
                        </span>
                    </div>
                    <div className="flex flex-col items-end gap-1">
                        <span className="font-bold">đ{hotel.pricePerNight} per night</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchResultsCard;
