"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useFormStatus } from "react-dom";
import { useSession } from "next-auth/react";
import { updateUser } from "@/app/actions/users";
import toast from "react-hot-toast";

const SubmitBtn = () => {
  const { pending } = useFormStatus();
  return (
    <button
      disabled={pending}
      type="submit"
      className="flex w-full justify-center rounded-[calc(7vw)] bg-black py-[1rem] text-white cursor-pointer lg:text-[1.8rem] text-[1.5rem]"
    >
      {pending ? "Loading" : "SAVE CHANGES"}
    </button>
  );
};

const ProfilePage = () => {
  const { data: session, update: updateSession } = useSession();
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");


  useEffect(() => {
    if (session?.user) {
      setName(session.user.name || "");
      setEmail(session.user.email || "");
    }
  }, [session]);

  async function formAction(formData: FormData) {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const currentPassword = formData.get("currentPassword") as string;
    const newPassword = formData.get("newPassword") as string;

    if (!email || !name) {
      toast.error("Name and email are required");
      return;
    }

    if (newPassword && !currentPassword) {
      toast.error("Enter current password to set a new password");
      return;
    }

    const payload = {
      name,
      email,
      currentPassword: currentPassword || null,
      newPassword: newPassword || null,
    };

    try {
      const updatedUser = await updateUser(session?.user.id as string, payload);

      await updateSession({
        name: updatedUser.name,
        email: updatedUser.email,
      });

      setName(updatedUser.name);
      setEmail(updatedUser.email);

      toast.success("Profile updated successfully");
    } catch (err: any) {
      toast.error(err.message || "Update failed");
    }
  }

  return (
    <section className="pt-[7rem] pb-[4rem] mx-[2rem]">
      <div>
        <div className="border-b pb-[3rem]">
          <h1 className="lg:text-[3rem] text-[2rem] mb-[2rem]">CUSTOMER PROFILE</h1>
          <div className="flex items-center gap-[.5rem]">
            <Link href={"/"}>Homepage</Link>
            <span>→</span>
            <span>Profile</span>
          </div>
        </div>

        <div className="border-b mt-[3rem] flex items-start flex-col gap-[2rem]">
          <h2>ACCOUNT SETTINGS</h2>
          <form
            className="space-y-6 lg:w-[50%] w-full flex items-start gap-[1rem] flex-col pb-[3rem]"
            action={formAction}
          >
            <div className="w-full">
              <Label htmlFor="name">Name</Label>
              <div className="mt-2">
                <Input
                  type="text"
                  name="name"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </div>

            <div className="w-full">
              <Label htmlFor="email">Email address</Label>
              <div className="mt-2">
                <Input
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div className="w-full">
              <Label htmlFor="currentPassword">Current Password</Label>
              <div className="mt-2">
                <Input
                  type="password"
                  name="currentPassword"
                  id="currentPassword"
                />
              </div>
            </div>

            <div className="w-full">
              <Label htmlFor="newPassword">New Password</Label>
              <div className="mt-2">
                <Input type="password" name="newPassword" id="newPassword" />
              </div>
            </div>

            <div className="w-full">
              <SubmitBtn />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ProfilePage;
