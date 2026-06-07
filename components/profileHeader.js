import Image from "next/image";
import Link from "next/link";

const ProfileHeader = ({ profile }) => {
  const { avatar_url, login, name, bio, followers, following } = profile;

  return (
    <div className="py-2 flex justify-center items-center gap-10">
      <Image
        src={avatar_url}
        alt="profile picture"
        width={150}
        height={150}
        className="border-2 border-green-400 rounded-br-3xl rounded-tl-3xl"
      />
      <div className="flex flex-col gap-2">
        <div className="flex gap-4 items-center">
          <span className="text-md">Username:</span>{" "}
          <Link
            href={`/user/${login}`}
            className="text-xl font-bold hover:text-blue-500 hover:scale-102 transition-all duration-100"
          >
            {name}
          </Link>
        </div>
        <div className="flex gap-4 items-center">
          <span className="text-md">Bio:</span>{" "}
          <span className="text-lg font-bold">{bio}</span>
        </div>
        <div className="flex gap-4 items-center text-md">
          <span>Followers Count:</span>{" "}
          <span className="font-bold">{followers}</span>
        </div>
        <div className="flex gap-4 items-center text-md">
          <span>Following Count:</span>{" "}
          <span className="font-bold">{following}</span>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
