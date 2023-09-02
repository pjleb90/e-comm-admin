import { UserButton } from "@clerk/nextjs";

const SetupPage = () => {
  return (
    <div className="p-4">
        this is a protected setup page
        <UserButton afterSignOutUrl="/"/>
      </div>
  )
}

export default SetupPage;
