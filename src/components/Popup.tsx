import { FC, useState } from "react";
import { TPlace } from "@/types/place";
import Image from "next/image";
import {
  AiOutlineClose,
  AiOutlineFullscreen,
  AiOutlineFullscreenExit,
} from "react-icons/ai"; // Import des icônes

interface PopupProps {
  place: TPlace;
  onClose: () => void;
}

const Popup: FC<PopupProps> = ({ place, onClose }) => {
  const [activeTab, setActiveTab] = useState<"description" | "npc">(
    "description"
  );
  const [isFullScreen, setIsFullScreen] = useState(false); // État pour gérer le plein écran

  const handleFullScreenToggle = () => {
    setIsFullScreen(!isFullScreen);
  };

  return (
    <>
      {isFullScreen ? (
        <div
          className='fixed inset-0 z-50 p-5 flex items-center justify-center bg-black bg-opacity-90'
          onClick={handleFullScreenToggle}
        >
          <Image
            src={`/images/places/${place.banner}.webp`}
            alt={place.title}
            className='object-contain w-full h-full'
            width={1200}
            height={800}
          />
          <button className='absolute top-4 right-4 text-white text-3xl'>
            <AiOutlineFullscreenExit />
          </button>
        </div>
      ) : (
        <div className='fixed inset-0 z-10 flex items-center justify-center p-4'>
          {/* Overlay */}
          <div
            className='fixed inset-0 bg-black bg-opacity-50'
            onClick={onClose}
          ></div>

          {/* Popup */}
          <div className='relative flex flex-col z-10 bg-white rounded shadow-lg max-w-md w-full max-h-full overflow-hidden mx-auto lg:max-w-lg lg:max-h-[90vh]'>
            <div className='relative'>
              {/* Close button */}
              <button
                className='absolute top-0 right-0 bg-orange-950 text-white p-1 text-2xl border-b border-l border-white'
                onClick={onClose}
              >
                <AiOutlineClose />
              </button>
              {/* Fullscreen button */}
              <button
                className='absolute bottom-0 right-0 bg-orange-950 text-white p-1 text-2xl border-t border-l border-white'
                onClick={handleFullScreenToggle}
              >
                <AiOutlineFullscreen />
              </button>
              {/* Banner */}
              <div className='h-60'>
                <Image
                  src={`/images/places/${place.banner}.webp`}
                  alt={place.title}
                  className='object-cover w-full h-full'
                  width={600}
                  height={200}
                />
              </div>
            </div>
            <div className='bottom-0 left-0 w-full bg-orange-950 text-white text-center py-2'>
              <h3 className='text-l ff-primer-regular uppercase'>
                {place.title}
              </h3>
            </div>

            {/* Content */}
            <div className='px-4 pt-1 pb-4 max-h-full overflow-y-auto'>
              {/* Tabs */}
              <div className='border-b border-gray-200 mb-2'>
                <ul className='flex justify-around'>
                  <li className='w-1/2 text-center'>
                    <button
                      className={`py-2 w-full font-semibold ${
                        activeTab === "description"
                          ? "text-orange-950 border-b-2 border-orange-950"
                          : "text-gray-700 hover:text-orange-950"
                      }`}
                      onClick={() => setActiveTab("description")}
                    >
                      Description
                    </button>
                  </li>
                  <li className='w-1/2 text-center'>
                    <button
                      className={`py-2 w-full font-semibold ${
                        activeTab === "npc"
                          ? "text-orange-950 border-b-2 border-orange-950"
                          : place.npc && place.npc.length === 0
                          ? "text-gray-400 cursor-not-allowed"
                          : "text-gray-700 hover:text-orange-950"
                      }`}
                      onClick={() =>
                        place.npc && place.npc.length > 0 && setActiveTab("npc")
                      }
                      disabled={place.npc && place.npc.length === 0}
                    >
                      PNJ
                    </button>
                  </li>
                </ul>
              </div>

              {/* Tab Content */}
              <div>
                {activeTab === "description" && (
                  <div>
                    <p>{place.description}</p>
                  </div>
                )}
                {activeTab === "npc" && place.npc && (
                  <div>
                    <p>Liste des npc à venir...</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
