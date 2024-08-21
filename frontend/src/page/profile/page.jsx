import { useUser } from "../../context/userContext";

export default function ProfilePage() {
  const { user, isLoading } = useUser();
  console.log(user, isLoading);

  if (isLoading) return <div>..... loafding </div>;
  return (
    <div>
      ProfilePage
      {user && <h1>{user.username}</h1>}
    </div>
  );
}
