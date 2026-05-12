import { SecondPagePart, GridDiv } from "./styled";
import { Container, Flexible } from "../../GlobalStyle";
import { useEffect, useState } from "react";
import Photo2 from "../../assets/image/savethedate.png";
import BlockImage from "../../assets/image/blockimage.jpg";
import PhotoF1 from "../../assets/image/photof1.jpg";
import PhotoF2 from "../../assets/image/photof2.jpg";
import PhotoF3 from "../../assets/image/photof3.jpg";
import PhotoGroup1 from "../../assets/image/groupphoto1.jpg";
import PhotoGroup2 from "../../assets/image/groupphoto2.jpg";
import PhotoGroup3 from "../../assets/image/groupphoto3.jpg";
import LineAes from "../../assets/image/lineaes.png";
import { ThirdPagePartCalendar } from "../third-page/styled";

export const SecondPage = () => {
  const weddingDate = new Date(2026, 5, 27, 0, 0, 0);

  const calculateTimeLeft = () => {
    const now = new Date();
    const diff = weddingDate - now;

    if (diff <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft);
  const [slideIndex, setSlideIndex] = useState(0);

  const sliderImages = [
    { src: PhotoF1, alt: "Wedding photo 1" },
    { src: PhotoF2, alt: "Wedding photo 2" },
    { src: PhotoF3, alt: "Wedding photo 3" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % sliderImages.length);
    }, 5000);

    return () => clearInterval(slideInterval);
  }, [sliderImages.length]);

  const formatNumber = (num) => String(num).padStart(2, "0");

  const prevSlide = () => {
    setSlideIndex(
      (prev) => (prev - 1 + sliderImages.length) % sliderImages.length,
    );
  };

  const nextSlide = () => {
    setSlideIndex((prev) => (prev + 1) % sliderImages.length);
  };

  return (
    <SecondPagePart className="my-10">
      <Container>
        <div>
          <h2 className="mb-10" data-aos="zoom-in">
            Հարսանիքին մնաց
          </h2>
          <GridDiv>
            <Flexible data-aos="flip-up">
              <h2>{formatNumber(timeLeft.days)}</h2>
              <p>Օր</p>
            </Flexible>
            <Flexible
              data-aos="flip-up"
              data-aos-duration="900"
              data-aos-delay="450"
            >
              <h2>{formatNumber(timeLeft.hours)}</h2>
              <p>Ժամ</p>
            </Flexible>
            <Flexible
              data-aos="flip-up"
              data-aos-duration="900"
              data-aos-delay="600"
            >
              <h2>{formatNumber(timeLeft.minutes)}</h2>
              <p>Րոպե</p>
            </Flexible>
            <Flexible
              className="uniqueBorder"
              data-aos="flip-up"
              data-aos-duration="900"
              data-aos-delay="750"
            >
              <h2>{formatNumber(timeLeft.seconds)}</h2>
              <p>Վրկ</p>
            </Flexible>
          </GridDiv>
        </div>

        <div
          className="bg-[#ffffff] rounded-[15px] w-[271px] h-[358px] mt-[50px] mx-auto drop-shadow-2xl flex flex-col items-center justify-center gap-4 p-6 pt-12 pb-10"
          data-aos="fade-up"
          data-aos-duration="600"
        >
          <img src={BlockImage} className="mt-[6px] grayscale" alt="" />
          <p className="font-[600]">
            Սերը հանդուրժող է, <br />
            սերը բարի է<p className="mt-2">— Ա Կորնթացիներ 13:4</p>
          </p>
        </div>
      </Container>
      <Container>
        <div className="flex h-[100vh] my-11 gap-[20px]">
          <div>
            <img src={Photo2} className="h-[100vh]" />
          </div>
          <div className="flex flex-col gap-2">
            <img src={PhotoGroup1} alt="" className="h-1/3 object-cover" />
            <img src={PhotoGroup2} alt="" className="h-1/3 object-cover" />
            <img src={PhotoGroup3} alt="" className="h-1/3 object-cover" />
          </div>
        </div>
        <div className="mt-10 mb-7">
          <h2 className="mb-10">Սիրելի հյուրեր</h2>
          <Flexible className="font-[600]">
            <p>
              Սիրով հրավիրում ենք Ձեզ մեր կյանքի կարևորագույն և հիշարժան օրը մեզ
              հետ կիսելու, և ուրախ կլինենք եթե այս երջանիկ օրը անցկացնեք մեզ հետ
              նվիրելով Ձեր ներկայությունը:
            </p>
          </Flexible>
        </div>
      </Container>
      <img src={LineAes} alt="" className="w-full" />
      <Container>
        <h2 className="mt-5" data-aos="zoom-in">
          Հունիս
        </h2>
        <ThirdPagePartCalendar
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-delay="300"
          className="mt-15"
        >
          {["Երկ", "Երք", "Չրք", "Հնգ", "Ուրբ", "Շբթ", "Կիր"].map((day) => (
            <div
              className="font-bold text-center py-2 mb-3"
              style={{ fontSize: "16px" }}
            >
              {day}
            </div>
          ))}
          {[...Array(37)].map((_, i) =>
            i > -1 && i <= 29 ? (
              <div className={i + 1 == 27 ? "special" : ""}>{i + 1}</div>
            ) : (
              <div className=""></div>
            ),
          )}
        </ThirdPagePartCalendar>
        <div
          className="relative mt-[50px] rounded-[15px] overflow-hidden shadow-2xl h-[420px]"
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-delay="400"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent pointer-events-none" />
          {sliderImages.map((image, index) => {
            const active = index === slideIndex;
            return (
              <img
                key={image.alt}
                src={image.src}
                alt={image.alt}
                className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 ease-in-out ${
                  active
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-95"
                }`}
              />
            );
          })}

          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full border border-white/70 bg-white/40 text-2xl text-black shadow-xl backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:bg-white"
            aria-label="Previous slide"
          >
            ←
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full border border-white/70 bg-white/40 text-2xl text-black shadow-xl backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:bg-white"
            aria-label="Next slide"
          >
            →
          </button>
        </div>
        <div className="flex justify-center gap-3 mt-4">
          {sliderImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setSlideIndex(index)}
              className={`h-3.5 w-12 rounded-full transition-all duration-300 ${
                slideIndex === index
                  ? "bg-white shadow-xl"
                  : "bg-white/40 hover:bg-white/80"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </Container>
    </SecondPagePart>
  );
};
