import MainPhoto from "../../assets/image/mainPhoto.jpg";
import { Container, Flexible } from "../../GlobalStyle";
import { FirstPagePart, FirstPagePartContext } from "./styled";

export const FirstPage = () => {
  return (
    <FirstPagePart>
      <img className="grayscale" src={MainPhoto} />
      <Container>
        <FirstPagePartContext>
          <div className="mt-7 text-[#2D2929] maintext">
            <p>Wedding Day</p>
            <h3>Vahe & Jenya</h3>
            <p>27.06.2026</p>
          </div>
        </FirstPagePartContext>
      </Container>
    </FirstPagePart>
  );
};
