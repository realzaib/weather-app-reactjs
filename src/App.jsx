import { BsXLg, BsChevronRight } from "react-icons/bs";
import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import SunIMG from "./assets/fcloudSun.png";
import Bg from "./assets/bg.jpg";
import { Navbar } from "./components";
import { Today } from "./pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

const App = () => {
  const [isSidePanelVisible, setSidePanelVisible] = useState(false);
  const [data, setData] = useState({});
  const [cityName, setCityName] = useState("Lahore")

  const handleToggleSidePanel = () => {
    setSidePanelVisible((prevVisible) => !prevVisible);
  };
  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=ddf1e7b1660ef31d8e314631e1512e9d`
      )
      .then((r) => setData(r.data));

      console.log(data)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cityName]);

  const changeCity = (e) => {
    setCityName(e.target.value)
    
  }
  return (
    <BrowserRouter>
      <div
        className={`fixed top-0 left-0 h-full  bg-blue-300 px-6 py-5 shadow-md flex flex-col items-center ${
          isSidePanelVisible ? "w-96" : "w-0 -mr-80"
        }`}
      >
        <div className="flex justify-evenly items-center w-full">
          <div className="flex items-center">
            <FiSearch />
            <input
              className={`bg-blue-300 text-blue-900 font-semibold font placeholder:text-black px-4 py-2 outline-none focus:border-none ${
                isSidePanelVisible ? "" : "hidden"
              }`}
              type="text"
              placeholder="Search for places..."
              onChange={(e)=>changeCity(e)}
              value={cityName}
            />
          </div>
          <button onClick={handleToggleSidePanel}>
            {isSidePanelVisible ? <BsXLg /> : <BsChevronRight />}
          </button>
        </div>
        {isSidePanelVisible && (
          <>
            <div className="flex flex-col px-10 pt-8">
              <img className="h-56 w-56 mb-4" src={SunIMG} alt="" />
              {data.main ? (
                <h1 className="font-bold text-6xl">
                  {data.main.temp}<sup>°C</sup>
                </h1>
              ) : null}
              <br />
              <span className="text-lg font-bold">
                Monday,<span className="text-gray-500"> 15:00</span>
              </span>
              <hr className="my-4" />
            </div>
            <div className="flex justify-start pl-7 items-center pb-1 space-x-2 w-full">
              <img className="h-10 w-10" src={SunIMG} alt="" />
              
              {data.rain? <h2 className="font-semibold">{data.rain["1h"]}</h2> : null}
            </div>
            <div className="flex justify-start pl-7 items-center space-x-2 w-full">
              <img className="h-10 w-10" src={SunIMG} alt="" />
              <h2 className="font-semibold">Mostly Sunny</h2>
            </div>
            <div
              className="rounded-2xl bg-no-repeat bg-center bg-cover h-36 w-72 mt-3 relative"
              style={{ backgroundImage: `url(${Bg})` }}
            >
              {
                data.sys ? <p className="absolute top-16 left-12 text-3xl text-white">
               {data.name}, {data.sys.country}
              </p> : null
              }
            </div>
          </>
        )}
        {!isSidePanelVisible && (
          <div className="fixed top-0 left-0 w-12 h-12 bg-blue-500 flex items-center justify-center">
            <button onClick={handleToggleSidePanel}>
              <BsChevronRight />
            </button>
          </div>
        )}
      </div>
      <div
        className={`${
          isSidePanelVisible ? "md:ml-96" : "ml-10"
        }   p-4 bg-blue-200 text-blue-800 font-semibold`}
      >
        <Navbar />
        <Routes>
          <Route path="/" element={<Today data={data}/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
