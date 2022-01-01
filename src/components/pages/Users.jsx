import styled from "styled-components";
import { SearchInput } from "../molecules/SearchInput";
import { UserCard } from "../organisms/user/UserCard";

const users = [...Array(10).keys()].map((val) => {
  return {
    id: val,
    name: `ke${val}`,
    image: "https://source.unsplash.com/Sg3XwuEpybU",
    email: "12345ex.com",
    phone: "090-0000000",
    company: {
      name: "TEST COMPANY"
    },
    website: "https://google.com"
  };
});

const user = {};

export const Users = () => {
  return (
    <SContainer>
      <h2>User page </h2>
      <SearchInput />
      <SUserArea>
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </SUserArea>
    </SContainer>
  );
};

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;

const SUserArea = styled.div`
  padding-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat((auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`;
