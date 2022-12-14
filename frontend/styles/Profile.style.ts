import styled from "styled-components";

export const ProfileContainer = styled.div`
  height: 95vh;
  padding: 3rem 4rem;
`;

export const ProfileHead = styled.h1.attrs({
  className: "mt-4 text-center font-bold",
})`
  font-size: 2rem;
  color: #ddd;
`;

export const ProfileAdd = styled.h1.attrs({
  className: "font-bold",
})`
  width: fit-content;
  background: #000;
  padding: 0.5rem;
  border-radius: 10px;
  margin: 0 auto;
  margin-bottom: 1rem;
  font-size: 1rem;
  color: #ddd;
  border: 1px solid #444;
`;

export const ProfileNFTCardContainer = styled.div.attrs({
  className: "flex justify-center",
})`
  flex-wrap: wrap;
  max-height: 80vh;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-track {
    border-radius: 1rem;
    background-color: #ccc;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 1rem;
    background-color: #7c1dc1;
    background-image: -webkit-linear-gradient(
      45deg,
      rgba(255, 255, 255, 0.2) 25%,
      transparent 25%,
      transparent 50%,
      rgba(255, 255, 255, 0.2) 50%,
      rgba(255, 255, 255, 0.2) 75%,
      transparent 75%,
      transparent
    );
    &:hover {
      background-color: #58138a;
    }
  }
`;
