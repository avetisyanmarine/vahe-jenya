import { Container, Flexible } from "../../GlobalStyle";
import { ForthPageBlock } from "./fortg-page-block";
import { ForthPagePart, ForthPagePartContext } from "./styled";
import Church from "../../assets/image/church.jpeg";
import Restaurant from "../../assets/image/restaurant.jpg";
import HeartLine from "../../assets/image/heartline.png";
import Photo3 from "../../assets/image/examp2.jpg";

export const ForthPage = () => {
  return (
    <ForthPagePart>
      <Container>
        <ForthPagePartContext>
          <ForthPageBlock
            ImageSrc={Church}
            bigText={"Սուրբ Սարգիս եկեղեցի"}
            mapSrc={"https://maps.app.goo.gl/6teeTNCMFQV1wkAk9?g_st=ic"}
          />
          <ForthPageBlock
            ImageSrc={Restaurant}
            bigText={"Safari Hall"}
            mapSrc={"https://maps.app.goo.gl/Xkvp2zaV4jCr4LPw5?g_st=ic"}
          />
        </ForthPagePartContext>
        <div className="relative mt-10">
          <img
            src={Photo3}
            alt="Restaurant"
            className="w-full rounded-[15px] grayscale"
          />
        </div>
      </Container>

      <div className="text-center my-14">
        <h2>Դետալներ</h2>
        <img src={HeartLine} className="mx-auto my-8 w-[300px]" />
        <Flexible
          className=" font-[600] px-5"
          data-aos="fade-up"
          data-aos-duration="600"
        >
          Ձեզ հետ բերեք ՍԵՐ, ժպիտներ ու անսահման դրական էմոցիաներ. ինչպես նաև
          հարմարավետ կոշիկներ` պարելու համար:
          <br /><br />
          Սիրով կսպասենք
          <br />
          
        </Flexible>
        <hr className="mx-auto my-8 w-[300px]" />
      </div>
    </ForthPagePart>
  );
};
