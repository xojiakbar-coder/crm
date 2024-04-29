import { ProfileContainer } from "./style";
import logo from "../../assets/images/noUser.webp";

export const Profile = () => {
  return (
    <ProfileContainer>
      <ProfileContainer.Image src={logo} alt="Not Found" />
      <div>
        <ProfileContainer.Name>Sardorbek Muhtorov</ProfileContainer.Name>
        <ProfileContainer.Email>sardor.edu@gmail.com</ProfileContainer.Email>
      </div>
    </ProfileContainer>
  );
};

export default Profile;
