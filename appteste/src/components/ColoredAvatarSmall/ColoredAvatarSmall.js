import React from 'react'
import styled from "@emotion/styled"

import Avatar from '@mui/material/Avatar';

const CustomAvatar = styled(Avatar)`
  width: 30px;
  height: 30px;
  margin-right: 8px;
  font-size: 12px;
`

const stringToColor = (string) => {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = '#';

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

const stringAvatar = (name) => {

  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${name[0]}${name[1]}`,
  };
}

const ColoredAvatarSmall = ({ avatarName }) => {
  return (
    <CustomAvatar
      {...stringAvatar(`${avatarName}`)}
    />
  )
}

export default ColoredAvatarSmall