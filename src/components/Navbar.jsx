import React from "react";
import styled from "styled-components";

const Section = styled.div`
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0px;

  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 10px;
  }
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`;

const Logo = styled.img`
  height: 50px;
`;

const List = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const ListItem = styled.li`
  cursor: pointer;
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Icon = styled.img`
  width: 20px;
  cursor: pointer;
`;

const Button = styled.button`
  width: 100px;
  padding: 10px;
  background-color: #da4ea2;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Navbar = () => {
  return (
    <Section>
      <Container>
        <Links>
          <svg
            version="1.0"
            class="h-[30vh] w-[30vh]"
            xmlns="http://www.w3.org/2000/svg"
            width="100"
            height="100"
            xml:space="preserve"
          >
            <path
              fill="black"
              d="M23.333 70.611V56.055C27.21 54.678 30 51.016 30 46.667c0-5.524-4.477-10-10-10-5.524 0-10 4.476-10 10 0 4.349 2.793 8.011 6.667 9.388v14.559C12.793 71.989 10 75.65 10 80c0 5.523 4.476 10 10 10 5.523 0 10-4.477 10-10 0-4.35-2.79-8.011-6.667-9.389zM20 43.333c1.843 0 3.333 1.491 3.333 3.333S21.843 50 20 50a3.333 3.333 0 0 1 0-6.667zm0 40a3.333 3.333 0 1 1 0-6.665 3.333 3.333 0 0 1 0 6.665z"
            />
            <path
              fill="#8BC34A"
              d="M80 70c-5.523 0-10 4.477-10 10s4.477 10 10 10 10-4.477 10-10-4.477-10-10-10zm0 13.333c-1.843 0-3.333-1.49-3.333-3.333s1.49-3.333 3.333-3.333 3.333 1.49 3.333 3.333-1.49 3.333-3.333 3.333zM46.667 36.667c-1.54 0-2.982.377-4.287 1l-13.379-13.38C29.622 22.983 30 21.542 30 20c0-5.524-4.477-10-10-10-5.524 0-10 4.476-10 10s4.476 10 10 10c1.543 0 2.984-.377 4.287-1l13.379 13.379c-.623 1.306-1 2.745-1 4.288 0 5.522 4.476 10 10 10 5.522 0 10-4.478 10-10 .001-5.524-4.477-10-9.999-10zM20 23.333c-1.839 0-3.333-1.493-3.333-3.333s1.494-3.333 3.333-3.333c1.843 0 3.333 1.493 3.333 3.333s-1.49 3.333-3.333 3.333zM46.667 50a3.334 3.334 0 1 1 0-6.667 3.334 3.334 0 0 1 0 6.667z"
            />
            <path
              fill="#263238"
              d="M80 36.667c-5.523 0-10 4.476-10 10 0 1.543.378 2.98.999 4.287L50.954 70.999C49.65 70.378 48.21 70 46.667 70c-5.524 0-10 4.477-10 10s4.476 10 10 10c5.522 0 10-4.477 10-10 0-1.54-.378-2.98-1-4.287l20.046-20.046c1.307.622 2.747 1 4.287 1 5.523 0 10-4.478 10-10 0-5.524-4.477-10-10-10zM46.667 83.333a3.333 3.333 0 1 1 0-6.666C48.509 76.667 50 78.157 50 80s-1.491 3.333-3.333 3.333zM80 50a3.33 3.33 0 0 1-3.333-3.333c0-1.843 1.49-3.333 3.333-3.333s3.333 1.492 3.333 3.333S81.843 50 80 50zM80 10c-4.35 0-8.012 2.792-9.389 6.667H56.055C54.678 12.792 51.016 10 46.667 10c-5.524 0-10 4.476-10 10s4.476 10 10 10c4.349 0 8.011-2.792 9.388-6.667h14.559C71.988 27.208 75.65 30 80 30c5.523 0 10-4.476 10-10s-4.477-10-10-10zM46.667 23.333a3.334 3.334 0 1 1 0-6.664 3.334 3.334 0 0 1 0 6.664zm33.333 0A3.332 3.332 0 0 1 76.667 20c0-1.841 1.49-3.333 3.333-3.333s3.333 1.492 3.333 3.333A3.331 3.331 0 0 1 80 23.333z"
            />
          </svg>
          <List>
            <ListItem>Home</ListItem>
            <ListItem>Studio</ListItem>
            <ListItem>Works</ListItem>
            <ListItem>Contact</ListItem>
          </List>
        </Links>
        <Icons>
          {/* Changed the image due to copyright problems */}
          <Icon src="./img/search.png" />
          <Button>Hire Now</Button>
        </Icons>
      </Container>
    </Section>
  );
};

export default Navbar;
