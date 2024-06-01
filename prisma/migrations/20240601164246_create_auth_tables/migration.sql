/*
  Warnings:

  - You are about to drop the column `email_verified` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `image` on the `users` table. All the data in the column will be lost.
  - You are about to drop the `userss` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[username]` on the table `users` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `username` to the `users` table without a default value. This is not possible if the table is not empty.
  - Made the column `name` on table `users` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "users" DROP COLUMN "email_verified",
DROP COLUMN "image",
ADD COLUMN     "avatar_url" TEXT,
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "username" TEXT NOT NULL,
ALTER COLUMN "name" SET NOT NULL;

-- DropTable
DROP TABLE "userss";

-- CreateIndex
CREATE UNIQUE INDEX "users_username_key" ON "users"("username");
