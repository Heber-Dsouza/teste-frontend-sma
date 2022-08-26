import styled from "@emotion/styled"

import GitHubIcon from '@mui/icons-material/GitHub';

export const MainContainer = styled.div`
  background-color: black;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 4.6vh;
`
export const CustomCreditsContainer = styled.span`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  font-size: 15px;
`
export const CreatedBy = styled.span`
  margin-right: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const CustomLinkContainer = styled.a`
  display: flex;
  color: inherit;
  align-items: flex-end;
  justify-content: center;
  text-decoration: none;
    :hover{
      text-decoration: underline;
      cursor: pointer;
    }
`
export const CustomGitHubIcon = styled(GitHubIcon)`
  width: 15px;
  margin-right: 1px;
  position: relative;
  top: 2px;
`