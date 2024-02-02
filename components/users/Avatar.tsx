import React from "react";
import styles from "./Avatar.module.css";

/**
 * This file shows how to add live avatars like you can see them at the top right of a Google Doc or a Figma file.
 * https://liveblocks.io/docs/examples/live-avatars
 *
 * The users avatar and name are not set via the `useMyPresence` hook like the cursors.
 * They are set from the authentication endpoint.
 *
 * See pages/api/liveblocks-auth.ts and https://liveblocks.io/docs/api-reference/liveblocks-node#authorize for more information
 */

const IMAGE_SIZE = 48;

export function Avatar({ name, otherStyles }: { name: string, otherStyles: string }) {
  return (
    <div className={`relative h-9 w-9 rounded-full ${otherStyles}`} data-tooltip={name}>
      <img
        src={`https://liveblocks.io/avatars/avatar-${Math.floor(Math.random() * 30)}.png`}
        height={IMAGE_SIZE}
        width={IMAGE_SIZE}
        className={styles.avatar_picture}
      />
    </div>
  );
}