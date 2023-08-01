import { Bio, Info, StyledProfile } from './styles'
import githubIcon from '../../../../assets/githubIcon.svg'
import githubInfo from '../../../../assets/githubInfo.svg'
import companyInfo from '../../../../assets/companyInfo.svg'
import followersInfo from '../../../../assets/followersInfo.svg'

export function Profile() {
  return (
    <StyledProfile>
      <img src="https://avatars.githubusercontent.com/u/8683378?v=4" alt="" />
      <Bio>
        <strong>Cameron Williamson</strong>
        <a href="">
          Github
          <img src={githubIcon} alt="" />
        </a>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum
          repudiandae nesciunt nemo expedita perspiciatis corporis asperiores,
          placeat incidunt! Et debitis atque consequuntur exercitationem
          suscipit ex quos ut culpa facilis perferendis.
        </p>
        <Info>
          <div className="info">
            <img src={githubInfo} alt="" />
            <span>cameronwll</span>
          </div>
          <div className="info">
            <img src={companyInfo} alt="" />
            <span>Rocketseat</span>
          </div>
          <div className="info">
            <img src={followersInfo} alt="" />
            <span>32 seguidores</span>
          </div>
        </Info>
      </Bio>
    </StyledProfile>
  )
}
