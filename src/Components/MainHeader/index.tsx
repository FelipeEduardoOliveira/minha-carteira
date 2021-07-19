import React, { useMemo } from "react";
import emojiList from "../../utils/emojis";
import Toggle from "../Toggle";
import { Container, Profile, Wellcome, UserName } from "./styles";

const MainHeader: React.FC = () => {
  const emoji = useMemo(() => {
    const indice = Math.floor(Math.random() * emojiList.length);

    return emojiList[indice];
  }, []);

  return (
    <Container>
      <Toggle />

      <Profile>
        <Wellcome> Olá,{emoji}</Wellcome>
        <UserName>Felipe Oliveira</UserName>
      </Profile>
    </Container>
  );
};

export default MainHeader;
