"use server";

import { prisma } from "@/lib/prisma";
import { z } from "zod";

const WaitlistSchema = z.object({
  handle: z
    .string()
    .email("Please enter a valid email address")
    .min(1, "Email is required")
    .max(100, "Email is too long"),
});

export async function joinWaitlist(formData: FormData) {
  try {
    const { handle } = WaitlistSchema.parse({
      handle: formData.get("handle"),
    });

    const existingUser = await prisma.waitlistUser.findUnique({
      where: { handle },
    });

    if (existingUser) {
      return { success: false, error: "This email is already on the waitlist" };
    }

    await prisma.waitlistUser.create({
      data: { handle },
    });

    return { success: true, message: "Successfully joined the waitlist!" };
  } catch (error) {
    if (error instanceof z.ZodError) {
      const errorMessage = error.errors[0]?.message || "Invalid input";
      return { success: false, error: errorMessage };
    }

    console.error("Waitlist error:", error);
    return { success: false, error: "Failed to join waitlist" };
  }
}

export async function getRecentWaitlistUsers(limit: number = 5) {
  try {
    return await prisma.waitlistUser.findMany({
      take: limit,
      orderBy: { createdAt: "desc" },
      select: { handle: true, createdAt: true },
    });
  } catch (error) {
    console.error("Error fetching recent waitlist users:", error);
    return [];
  }
}
