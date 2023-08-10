import { Bio, Info, StyledProfile } from './styles'
import githubIcon from '../../../../assets/githubIcon.svg'
import githubInfo from '../../../../assets/githubInfo.svg'
import companyInfo from '../../../../assets/companyInfo.svg'
import followersInfo from '../../../../assets/followersInfo.svg'
import { useEffect, useState } from 'react'
import { api } from '../../../../lib/axios'
import { GoTo } from '../../../../components/GoTo'

interface UserBio {
  avatarUrl: string
  name: string
  login: string
  htmlUrl: string
  bio: string
  company: string
  followers: number
}

export function Profile() {
  const [userBio, setUserBio] = useState<UserBio>({} as UserBio)

  async function fetchUserData() {
    try {
      const response = await api.get('/users/gustavoguanabara')
      const { avatar_url, name, login, html_url, bio, company, followers } =
        response.data

      const userData = {
        avatarUrl: avatar_url,
        name,
        login,
        htmlUrl: html_url,
        bio,
        company,
        followers,
      }

      setUserBio(userData)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchUserData()
  }, [])

  return (
    <StyledProfile>
      <img src={userBio.avatarUrl} alt="" />
      <Bio>
        <strong>{userBio.name}</strong>
        {/* <a href={userBio.htmlUrl} target="_blank" rel="noreferrer">
          Github
          <img src={githubIcon} alt="" />
        </a> */}
        <GoTo label="Github" link={userBio.htmlUrl} />
        <p>{userBio.bio}</p>
        <Info>
          <div className="info">
            <img src={githubInfo} alt="" />
            <span>{userBio.login}</span>
          </div>
          <div className="info">
            <img src={companyInfo} alt="" />
            <span>{userBio.company}</span>
          </div>
          <div className="info">
            <img src={followersInfo} alt="" />
            <span>{userBio.followers} seguidores</span>
          </div>
        </Info>
      </Bio>
    </StyledProfile>
  )
}
