"use server";

export async function registerUser(userInfo: {name: string; email: string; password: string;}) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}api/auth/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userInfo),
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";